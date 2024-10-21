import LabelComponent from '@/components/label/label.vue';
import ButtonComponent from '@/components/button/button.vue';
import tareaEdit from '@/components/tarea-edit/tarea-edit.vue';
import Calculadora from '@/components/calculadora/calculadora.vue';

export function initCustomVue(vue) {
  vue.component('daic-label', LabelComponent);
  vue.component('daic-button', ButtonComponent);
  vue.component('daic-tarea-edit', tareaEdit);
  vue.component('daic-button-cal', Calculadora)
}
