// This import enable module augmentation instead of module overwrite
import 'quasar';

declare module 'quasar' {
  interface QuasarFeatureFlags {
    ssr: true;
  }
}
