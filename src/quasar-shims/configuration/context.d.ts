// interface BaseQuasarContext {
//   // TODO: find a way to model "exactly one property between the given ones"
//   //  Similar to "AtLeastOne", but must allow only one property
//   mode: { [index in QuasarModes]?: true };
// }

// interface CapacitorQuasarContext extends BaseQuasarContext {
//   // TODO: is there a way to automatize this two properties?
//   mode: { capacitor: true };
//   modeName: 'capacitor';
// }

// interface CordovaQuasarContext extends BaseQuasarContext {
//   // TODO: is there a way to automatize this two properties?
//   mode: { cordova: true };
//   modeName: 'cordova';
//   // TODO: find a way to model "exactly one property between the given ones"
//   target: {
//     [index in QuasarCordovaTargets]?: true;
//   };
// }

// interface BaseElectronQuasarContext extends BaseQuasarContext {
//   // TODO: is there a way to automatize this two properties?
//   mode: { electron: true };
//   modeName: 'electron';
//   // TODO: find a way to model "exactly one property between the given ones"
//   bundler: { [index in QuasarElectronBundlers]?: true };
// }

// interface ElectronBuilderQuasarContext extends BaseElectronQuasarContext {
//   // TODO: find a way to model "exactly one property between the given ones"
//   target: {
//     [index in QuasarBuilderTargets]?: true;
//   };
//   // TODO: find a way to model "exactly one property between the given ones"
//   arch: {
//     [index in QuasarBuilderArchs]?: true;
//   };
// }

// interface ElectronPackagerQuasarContext extends BaseElectronQuasarContext {
//   // TODO: find a way to model "exactly one property between the given ones"
//   target: {
//     [index in QuasarPackagerTargets]?: true;
//   };
//   // TODO: find a way to model "exactly one property between the given ones"
//   arch: {
//     [index in QuasarPackagerArchs]?: true;
//   };
// }

// interface SpaQuasarContext extends BaseQuasarContext {
//   // TODO: is there a way to automatize this two properties?
//   mode: { spa: true };
//   modeName: 'spa';
// }

// interface PwaQuasarContext extends BaseQuasarContext {
//   // TODO: is there a way to automatize this two properties?
//   mode: { pwa: true };
//   modeName: 'pwa';
// }

// interface SsrQuasarContext extends BaseQuasarContext {
//   // TODO: is there a way to automatize this two properties?
//   mode: { ssr: true };
//   modeName: 'ssr';
// }

// TODO: checking current mode in TS is easier with
//  `context.modeName === 'spa'` instead of `context.mode.spa` as it was with JS
// Check if there is some way to make JS way working well in TS
