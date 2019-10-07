import axios, { AxiosInstance } from 'axios';
import { VueConstructor } from 'vue';

declare module 'vue/types/vue' {
  interface Vue {
    $axios: AxiosInstance;
  }
}

export default ({ Vue }: { Vue: VueConstructor }) => {
  Vue.prototype.$axios = axios;
};
