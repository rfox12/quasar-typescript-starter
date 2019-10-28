// This import enable module augmentation instead of module overwrite
import 'quasar';

declare module 'quasar' {
  interface BootConfigurationItem {
    path: string;
    // TODO: make only one of the two be there at any time?
    // TODO: maybe better to switch it the other way and make them select on which "side" they must be loaded?
    server?: false;
    client?: false;
  }

  type QuasarBootConfiguration = (string | BootConfigurationItem)[];
}
