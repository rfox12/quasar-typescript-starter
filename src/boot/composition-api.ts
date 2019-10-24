import VueCompositionApi from '@vue/composition-api';
import { boot } from 'src/quasar-shims/boot';

export default boot(({ Vue }) => {
  Vue.use(VueCompositionApi);
});
