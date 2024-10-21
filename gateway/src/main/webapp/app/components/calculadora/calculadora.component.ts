import { defineComponent, inject, ref, type ComputedRef } from "vue";

export default defineComponent({
  compatConfig:{MODE: 3},
  name: 'calculadora',
  setup() {
    const openCalculator = ref<any>(null);
    const result = ref('');
    const calculated =ref(false);

    return {
      result,
      calculated,
      openCalculator,
      // Bandera para rastrear si se ha realizado el cálculo
    };
  },
  methods: {
    openModalCalculator(){
      this.openCalculator.show();
    },
    handleClick(value) {
      if (this.calculated) {
      // Si se ha realizado el cálculo,
      // comienza una nueva expresión
        this.result = value;
        this.calculated = false; // Restablecer bandera

      } else {
        this.result += value;
      }
    },
    handleClear() {
      this.result = '';
      this.calculated = false; // Restablecer bandera
    },
    handleClearEntry() {
      if (this.result && this.result.length > 0) {
        this.result = this.result.slice(0, -1);
        if (this.result.length === 0) {
          this.handleClear();
        }
      } else {
        this.handleClear();
      }
    },
    handleOperatorClick(operator) {
      // Si el último carácter es un operador,
      // reemplácelo con el nuevo operador
      if (/[+*/-]$/.test(this.result)) {
        this.result = this.result.slice(0, -1) + operator;
      } else {
        // De lo contrario, agregue el nuevo operador
        this.result += operator;
      }
      this.calculated = false; // Restablecer bandera
    },
    calculate() {
      try {
        const evaluatedResult = eval(this.result.replace(/(^|[^0-9])0+(\d+)/g, '$1$2'));
        if (evaluatedResult === Infinity || evaluatedResult === -Infinity) {
          throw new Error('Divide by zero error');
        }
        this.result = Number.isFinite(evaluatedResult) ? evaluatedResult : 'Error';
        this.calculated = true;
        // Establecer la bandera en verdadera después del cálculo
      } catch (error) {
        if (error.message === 'Divide by zero error') {
          this.result = 'Error: Divide by zero';
        } else {
          this.result = 'Error';
        }
      }
    },
  },
});