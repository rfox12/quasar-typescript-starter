// This import enable module augmentation instead of module overwrite
import 'quasar';
import { QuasarIconSets } from '@quasar/extras';

declare module 'quasar' {
  // TODO: allow only one instance per literal
  // FIXME: components, directives and plugins types are taken from generated `QuasarPluginOptions`
  // This means that we'll have to check again that build step to avoid type-errors when compiling
  //  because of the missing interface
  interface QuasarFrameworkObjectConfiguration {
    all?: boolean | 'auto'; // TODO: when present, `components` and `directives` properties should not be specified
    autoImportComponentCase?: 'kebab' | 'pascal' | 'combined'; // TODO: must be available only if `all: auto` is specified
    components?: [keyof QuasarPluginOptions['components']][];
    directives?: [keyof QuasarPluginOptions['directives']][];
    plugins?: [keyof QuasarPluginOptions['plugins']][];
    // TODO: contains component-specific configuration?
    // TODO: see https://quasar.dev/quasar-cli/developing-cordova-apps/configuring-cordova#quasar.conf.js for some options
    // TODO: see https://quasar.dev/quasar-cli/developing-capacitor-apps/configuring-capacitor#quasar.conf.js for some options
    config?: object;
    iconSet?: QuasarIconSets;
    lang?: QuasarLanguageCodes;
    cssAddon?: boolean;
  }

  type QuasarFrameworkConfiguration =
    | 'all' // Equal to `{ all: true }`
    | QuasarFrameworkObjectConfiguration;
}
