import axios, { AxiosInstance } from 'axios';
import { boot } from 'src/quasar-shims/boot';

declare module 'vue/types/vue' {
  interface Vue {
    $axios: AxiosInstance;
  }
}

export default boot(({ Vue }) => {
  Vue.prototype.$axios = axios;
});
