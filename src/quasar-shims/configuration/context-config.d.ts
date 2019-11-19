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

  interface BaseQuasarContext {
    /** True if we are in development mode */
    dev: boolean;
    /** True if we are in production mode */
    prod: boolean;
    /** App mode */
    // TODO: find a way to model "exactly one property between the given ones"
    //  Similar to "AtLeastOne", but must allow only one property
    mode: { [index in QuasarModes]?: true };
    modeName: QuasarModes;
    /** True if debugging is enabled */
    debug: boolean;
  }

  interface CapacitorQuasarContext extends BaseQuasarContext {
    // TODO: is there a way to automatize this two properties?
    mode: { capacitor: true };
    modeName: 'capacitor';
    /**
     * App target.
     *
     * @default 'none'
     */
    // TODO: find a way to model "exactly one property between the given ones"
    target: {
      [index in QuasarCapacitorTargets]?: true;
    };
    /** App target name. */
    targetName: QuasarCapacitorTargets;
  }

  interface CordovaQuasarContext extends BaseQuasarContext {
    // TODO: is there a way to automatize this two properties?
    mode: { cordova: true };
    modeName: 'cordova';
    /**
     * App target.
     *
     * @default 'all installed'
     */
    // TODO: find a way to model "exactly one property between the given ones"
    target: {
      [index in QuasarCordovaTargets]?: true;
    };
    /** App target name. */
    targetName: QuasarCordovaTargets;
    /**
     * Emulator name, may be present only for Cordova mode.
     *
     * @example
     * 'iPhone-7', 'iPhone-X', 'iPhone-X', 'com.apple.CoreSimulator.SimRuntime.iOS-12-2'
     */
    emulator: string;
  }

  interface ElectronQuasarContext extends BaseQuasarContext {
    // TODO: is there a way to automatize this two properties?
    mode: { electron: true };
    modeName: 'electron';
    /**
     * App target.
     *
     * @default 'current system'
     */
    // TODO: must have different possible targets depending on which mode it has and its bundler
    // TODO: find a way to model "exactly one property between the given ones"
    target: {
      [index in QuasarBuilderTargets | QuasarPackagerTargets]?: true;
    };
    /** App target name. */
    targetName: QuasarBuilderTargets | QuasarPackagerTargets;
    // TODO: must have different possible arch depending on used bundler
    // TODO: find a way to model "exactly one property between the given ones"
    arch: {
      [index in QuasarBuilderArchs | QuasarPackagerArchs]?: true;
    };
    // TODO: must have different possible arch depending on used bundler
    archName: QuasarBuilderArchs | QuasarPackagerArchs;
    // TODO: find a way to model "exactly one property between the given ones"
    bundler: { [index in QuasarElectronBundlers]?: true };
    bundlerName: QuasarElectronBundlers;
    // TODO: may be present only if bundler is builder
    publish?: 'onTag' | 'onTagOrDraft' | 'always' | 'never';
  }

  interface SpaQuasarContext extends BaseQuasarContext {
    // TODO: is there a way to automatize this two properties?
    mode: { spa: true };
    modeName: 'spa';
  }

  interface PwaQuasarContext extends BaseQuasarContext {
    // TODO: is there a way to automatize this two properties?
    mode: { pwa: true };
    modeName: 'pwa';
  }

  interface SsrQuasarContext extends BaseQuasarContext {
    // TODO: is there a way to automatize this two properties?
    mode: { ssr: true };
    modeName: 'ssr';
  }

  // TODO: this works nicely, but checking current mode in TS is easier with
  //  `context.modeName === 'spa'` instead of `context.mode.spa` as it was with JS
  // Check if there is some way to make this better
  type QuasarContext =
    | SpaQuasarContext
    | HasPwa<PwaQuasarContext, never>
    | HasSsr<SsrQuasarContext, never>
    | HasCapacitor<CapacitorQuasarContext, never>
    | HasCordova<CordovaQuasarContext, never>
    | HasElectron<ElectronQuasarContext, never>;
}
