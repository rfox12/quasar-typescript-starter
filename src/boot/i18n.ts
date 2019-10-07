import messages from 'src/i18n';
import Vue, { VueConstructor } from 'vue';
import VueI18n from 'vue-i18n';

declare module 'vue/types/vue' {
  interface Vue {
    i18n: VueI18n;
  }
}

const i18n = new VueI18n({
  locale: 'en-us',
  fallbackLocale: 'en-us',
  messages
});

export default ({ app, Vue }: { app: Vue; Vue: VueConstructor }) => {
  console.log(app, Vue);
  Vue.use(VueI18n);

  // Set i18n instance on app
  app.i18n = i18n;
};

export { i18n };
