import { defineComponent, inject, type ComputedRef } from 'vue';
import { useI18n } from 'vue-i18n';

export default defineComponent({
  compatConfig: { MODE: 3 },
  name: 'JhiFooter',
  setup() {

    const username = inject<ComputedRef<string>>('currentUsername');

    return {
      username,
      t$: useI18n().t,

    };
  },
});
