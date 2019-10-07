import { VueConstructor } from 'vue';
import VueCompositionApi from '@vue/composition-api';

export default ({ Vue }: { Vue: VueConstructor }) => {
  Vue.use(VueCompositionApi);
};
