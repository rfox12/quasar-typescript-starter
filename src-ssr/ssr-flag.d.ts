/* THIS FILE SHOULD BE ADDED TO `/app/templates/ssr` FOLDER AS-IS */
// This import enable module augmentation instead of module overwrite
import 'quasar';

declare module 'quasar' {
  interface QuasarFeatureFlags {
    ssr: true;
  }
}
