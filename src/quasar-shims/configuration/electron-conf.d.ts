// This import enable module augmentation instead of module overwrite
import 'quasar';
import { Options as ElectronPackagerOptions } from 'electron-packager';
import { Configuration as WebpackConfiguration } from 'webpack';
import WebpackChain from 'webpack-chain';
// Applies `devServer` typings on `WebpackConfiguration.devServer`
import 'webpack-dev-server';

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

  interface QuasarElectronConfiguration {
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
    bundler?: QuasarElectronBundlers;

    /**
     * Electron-packager options.
     * `dir` and `out` properties are overwritten by Quasar CLI to ensure the best results.
     */
    // TODO: enable only when bundler isn't builder
    packager?: Omit<ElectronPackagerOptions, 'dir' | 'out'>;

    /** Electron-builder options */
    // TODO: enable only when bundler isn't packager
    // TODO: builder typings are inside electron-builder package,
    //  I could not locate where it's installed into the monorepo
    builder?: object;
  }
}
