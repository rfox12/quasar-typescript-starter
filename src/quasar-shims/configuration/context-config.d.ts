// This import enable module augmentation instead of module overwrite
import 'quasar';

declare module 'quasar' {
  type QuasarModes =
    | 'spa'
    | 'ssr'
    | 'pwa'
    | 'cordova'
    | 'capacitor'
    | 'electron';

  interface QuasarContext {
    /** True if we are in development mode */
    dev: boolean;
    /** True if we are in production mode */
    prod: boolean;
    /** App mode */
    mode: { [index in QuasarModes]: boolean };
    modeName: QuasarModes;
    /**
     * App target, required only for Cordova, Capacitor and Electron modes.
     *
     * @default 'all installed' For Cordova mode
     * @default 'none' For Capacitor
     * @default 'current system' For Electron mode
     */
    // TODO: must be present only if mode is cordova, capacitor or electron
    // TODO: must have different possible targets depending on which mode it has and its bundler
    target: {
      [index in
        | QuasarCordovaTargets
        | QuasarCapacitorTargets
        | QuasarBuilderTargets
        | QuasarPackagerTargets]: boolean;
    };
    /**
     * App target name, required only for Cordova and Capacitor modes.
     */
    // TODO: must be present only if mode is cordova, capacitor or electron
    // TODO: must have different possible targets depending on which mode it has and its bundler
    targetName?:
      | QuasarCordovaTargets
      | QuasarCapacitorTargets
      | QuasarBuilderTargets
      | QuasarPackagerTargets;
    /**
     * Emulator name, may be present only for Cordova mode.
     *
     * @example
     * 'iPhone-7', 'iPhone-X', 'iPhone-X', 'com.apple.CoreSimulator.SimRuntime.iOS-12-2'
     */
    // TODO: must be present only if mode is cordova
    emulator: string;
    // TODO: may be present only if mode is electron
    // TODO: must have different possible arch depending on used bundler
    arch: {
      [index in QuasarBuilderArchs | QuasarPackagerArchs]: boolean;
    };
    // TODO: may be present only if mode is electron
    // TODO: must have different possible arch depending on used bundler
    archName?: QuasarBuilderArchs | QuasarPackagerArchs;
    // TODO: may be present only if mode is electron
    bundler: { [index in QuasarElectronBundlers]: boolean };
    // TODO: may be present only if mode is electron
    bundlerName: QuasarElectronBundlers;
    /** True if debugging is enabled */
    debug: boolean;
    // TODO: may be present only if mode is electron and bundler is builder
    publish?: 'onTag' | 'onTagOrDraft' | 'always' | 'never';
  }
}
