import { Tarea } from '@/shared/model/tarea.model';
import { defineComponent, ref, type Ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { useTareaStore } from '@/store';
import { isIdentifierStart } from 'typescript';

export default defineComponent({
  compatConfig: { MODE: 3 },
  emits: ['confirmed','update','cancel'],
  name: 'Tareas',
  setup() {
    const textLabel: Ref<string> = ref('Hola mundo');
    const tareaStore = useTareaStore();
    const listaTareas: Ref<Tarea[] | null> = ref(tareaStore.listaDeTareas);
    const tareaToEdit: Ref<Tarea> = ref(new Tarea());
    const fields: Ref<string[]> = ref(['id', 'nombre', 'fechaLimite', 'acciones']);

    const createTareaModal = ref<any>(null);
    const deleteTareaModal = ref<any>(null);
    const editTareaModal = ref<any>(null);
    const refTareaCreateEditComponent = ref<any>(null);
    const refTareaEditComponent = ref<any>(null);
    return {
      textLabel,
      listaTareas,
      createTareaModal,
      deleteTareaModal,
      editTareaModal,
      tareaToEdit,
      tareaStore,
      fields,
      refTareaEditComponent,
      refTareaCreateEditComponent,
      t$: useI18n().t,
    };

  },
  methods: {
    openCreateModalHandler(): void {
      this.tareaToEdit = new Tarea('0','',null,null);
      this.createTareaModal.show();
    },
    clickHandler(): void {
      console.log('Se ejecuto un click');
    },
    openEditModalHandler(tarea: any): void {
      this.tareaToEdit = JSON.parse(JSON.stringify(tarea));
      this.tareaToEdit.fechaLimite = tarea.fechaLimite;
      this.editTareaModal.show();
    },
    openDeleteModalHandler(tarea: Tarea): void {
      this.tareaToEdit = JSON.parse(JSON.stringify(tarea));
      this.deleteTareaModal.show();
    },
    deleteTareaHandler(): void {
      if (this.listaTareas) {
        const index = this.listaTareas.findIndex(tarea => tarea.id === this.tareaToEdit.id);
        this.listaTareas.splice(index, 1);
        this.deleteTareaModal.hide();
      }
    },
    updateTareaHandler(): void {
      if (this.tareaToEdit.id === '0'){
        //create
        if (this.listaTareas) {
          this.tareaToEdit.id = this.keygenerator();
          this.listaTareas.push(this.tareaToEdit);
          this.tareaToEdit = new Tarea();
        }
        this.createTareaModal.hide();
      }else{ //update
        if (this.listaTareas) {
          const index = this.listaTareas.findIndex(tarea => tarea.id === this.tareaToEdit.id);
          this.listaTareas.splice(index, 1, this.tareaToEdit);
          this.editTareaModal.hide();
        }
      }

  },
    cancelHandler(): void {
      this.createTareaModal.hide();
      this.deleteTareaModal.hide();
      this.editTareaModal.hide();
    },
    keygenerator(): string {
      return new Date().getTime().toString();
    },

  },
});
