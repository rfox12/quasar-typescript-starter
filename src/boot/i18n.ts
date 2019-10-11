import messages from 'src/i18n';
import VueType, { VueConstructor, ComponentOptions } from 'vue';
import VueI18n from 'vue-i18n';

declare module 'vue/types/vue' {
  interface Vue {
    i18n: VueI18n;
  }
}

export default ({
  app,
  Vue
}: {
  app: ComponentOptions<VueType>;
  Vue: VueConstructor;
}) => {
  Vue.use(VueI18n);

  // Set i18n instance on app
  app.i18n = new VueI18n({
    locale: 'en-us',
    fallbackLocale: 'en-us',
    messages
  });
};
