import messages from 'src/i18n';
import { boot } from 'src/quasar-shims/boot';
import VueI18n from 'vue-i18n';

declare module 'vue/types/vue' {
  interface Vue {
    i18n: VueI18n;
  }
}

export default boot(({ app, Vue }) => {
  Vue.use(VueI18n);

  // Set i18n instance on app
  app.i18n = new VueI18n({
    locale: 'en-us',
    fallbackLocale: 'en-us',
    messages
  });
});
