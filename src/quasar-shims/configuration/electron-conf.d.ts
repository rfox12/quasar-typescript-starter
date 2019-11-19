// This import enable module augmentation instead of module overwrite
import { Options as ElectronPackagerOptions } from 'electron-packager';
import { Configuration as ElectronBuilderConfiguration } from 'electron-builder';
import 'quasar';
import WebpackChain from 'webpack-chain';
import { WebpackConfiguration } from '../helpers';

declare module 'quasar' {
  type QuasarElectronBundlers = 'builder' | 'packager';

  type QuasarBuilderArchs = 'ia32' | 'x64' | 'armv7l' | 'arm64' | 'all';
  type QuasarPackagerArchs =
    | 'ia32'
    | 'x64'
    | 'armv7l'
    | 'arm64'
    | 'all'
    | 'mips64el';

  type QuasarBuilderTargets =
    | 'darwin'
    | 'mac'
    | 'win32'
    | 'win'
    | 'linux'
    | 'all';
  type QuasarPackagerTargets = 'darwin' | 'win32' | 'linux' | 'mas' | 'all';

  interface QuasarBaseElectronConfiguration {
    /** Webpack config object for the Main Process ONLY (`/src-electron/main-process/`) */
    extendWebpack?: (config: WebpackConfiguration) => void;
    /**
     * Equivalent to `extendWebpack()` but uses `webpack-chain` instead,
     *  for the Main Process ONLY (`/src-electron/main-process/`)
     */
    chainWebpack?: (chain: WebpackChain) => void;

    /**
     * You have to choose to use either packager or builder.
     * They are both excellent open-source projects,
     *  however they serve slightly different needs.
     * With packager you will be able to build unsigned projects
     *  for all major platforms from one machine.
     * Although this is great, if you just want something quick and dirty,
     *  there is more platform granularity (and general polish) in builder.
     * Cross-compiling your binaries from one computer doesn’t really work with builder,
     *  or we haven’t found the recipe yet.
     */
    // This property definition is here merely to avoid duplicating the TSDoc
    // TODO: currently discriminated unions can only use
    //  a literal value to apply the discrimination, we cannot
    //  discriminate based on the absence of 'bundler' property.
    // Because of this, 'bundler' cannot be absent to discriminate correctly
    // See https://github.com/microsoft/TypeScript/issues/19691
    // PS: note that the problem here is the absence of the property in a static context,
    //  not its value; this means that `bundler: undefined` would discriminate correctly
    //  (thanks to https://github.com/microsoft/TypeScript/pull/27695),
    //  but not putting 'bundler' won't work, even if at runtime
    //  (and when doing type guards) the two scenarios are the same
    bundler: QuasarElectronBundlers;
  }

  interface QuasarPackagerElectronConfiguration
    extends QuasarBaseElectronConfiguration {
    bundler: 'packager';

    /**
     * Electron-packager options.
     * `dir` and `out` properties are overwritten by Quasar CLI to ensure the best results.
     */
    packager?: Omit<ElectronPackagerOptions, 'dir' | 'out'>;
  }

  interface QuasarBuilderElectronConfiguration
    extends QuasarBaseElectronConfiguration {
    bundler: 'builder';

    /** Electron-builder options */
    // TODO: builder typings are inside electron-builder package,
    //  I could not locate where it's installed into the monorepo
    //  so I installed the whole package as a devDependency for now
    builder?: ElectronBuilderConfiguration;
  }

  type QuasarElectronConfiguration =
    | QuasarPackagerElectronConfiguration
    | QuasarBuilderElectronConfiguration;
}
