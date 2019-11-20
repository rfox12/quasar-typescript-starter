// This import enable module augmentation instead of module overwrite
import 'quasar';
import { QuasarIconSets } from '@quasar/extras';
import { DeepPartial } from '../helpers';

declare module 'quasar' {
  // TODO: these options should be declared using interface merging
  //  instead of a monolitic interface. To support this, some kind of tweak
  //  is needed into JSON-generated typings
  // TODO: probably a better interface name can be found
  // TODO: I cannot find any others, help needed
  interface QuasarFrameworkInnerConfiguration {
    brand: {
      primary: string;
      secondary: string;
      accent: string;
      dark: string;
      positive: string;
      negative: string;
      info: string;
      warning: string;
    };
    capacitor: {
      iosStatusBarPadding: boolean;
    };
    cordova: {
      iosStatusBarPadding: boolean;
      backButtonExit: boolean;
    };
    dark: boolean | 'auto';
    loading: {
      delay: number;
      message: false | string;
      spinnerSize: number;
      spinnerColor: string;
      messageColor: string;
      backgroundColor: string;
      spinner: QSpinner;
      customClass: string;
    };
    loadingBar: { color: string; size: string; position: string };
    notify: {
      position: string;
      timeout: number;
      textColor: string;
      actions: { icon: string; color: string }[];
    };
  }

  // FIXME: components, directives and plugins types are taken from generated `QuasarPluginOptions`
  // This means that we'll have to check again that build step when types are moved into core
  //  or we'd get type-errors when compiling because of the missing interfaces
  // TODO: currently discriminated unions can only use
  //  a literal value to apply the discrimination, we cannot
  //  discriminate based on the absence of 'all' property,
  //  so `all` property must be always present.
  // This is the same problem we have with `electron.bundler` property,
  //  check there for more information
  interface QuasarBaseFrameworkObjectConfiguration {
    plugins?: (keyof QuasarPluginOptions['plugins'])[];
    config?: DeepPartial<QuasarFrameworkInnerConfiguration>;
    iconSet?: QuasarIconSets;
    lang?: QuasarLanguageCodes;
    cssAddon?: boolean;
  }

  interface QuasarAutoFrameworkObjectConfiguration
    extends QuasarBaseFrameworkObjectConfiguration {
    all: 'auto';
    /** @default 'kebab' */
    autoImportComponentCase?: 'kebab' | 'pascal' | 'combined';
  }

  interface QuasarAllFrameworkObjectConfiguration
    extends QuasarBaseFrameworkObjectConfiguration {
    all: true;
  }

  interface QuasarManualFrameworkObjectConfiguration
    extends QuasarBaseFrameworkObjectConfiguration {
    all: false;
    components?: (keyof QuasarPluginOptions['components'])[];
    directives?: (keyof QuasarPluginOptions['directives'])[];
  }

  type QuasarFrameworkConfiguration =
    | 'all' // Equal to `{ all: true }`
    | QuasarAutoFrameworkObjectConfiguration
    | QuasarAllFrameworkObjectConfiguration
    | QuasarManualFrameworkObjectConfiguration;
}
