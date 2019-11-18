import { RootStore } from './vuex';
import { QSsrContext } from './boot';
import { Capacitor } from '../../src-capacitor/node_modules/@capacitor/core';
import * as electron from 'electron';
import * as Cordova from 'cordova';

declare module 'quasar' {
  // We rely on declaration merging augmenting QuasarConf with declaration files
  //  located into feature folders.
  // We can obtain the same result by generating and keeping in sync a `config.d.ts`
  //  file with feature options set to true or false, but it's much more messy IMO.
  interface QuasarFeatureFlags {
    [index: string]: boolean;
  }

  // If the property is found we'll return the conditional type,
  //  otherwise an empty object is returned so that the result from unions
  //  with this type will be an unchanged type.
  type IsFeatureEnabled<
    O extends string,
    T
  > = QuasarFeatureFlags[O] extends true ? T : {};

  // Used into Boot files and similar
  type HasSsr = IsFeatureEnabled<'ssr', { ssrContext?: QSsrContext | null }>;
  type HasStore = IsFeatureEnabled<'store', { store: RootStore }>;

  // --- Used into QVueGlobals ---

  // Capacitor typings are into @capacitor/core,
  //  will it be possible to retain types also inside it?
  type HasCapacitor = IsFeatureEnabled<
    'capacitor',
    { capacitor: typeof Capacitor }
  >;
  type HasCordova = IsFeatureEnabled<'cordova', { cordova: typeof Cordova }>;
  type HasElectron = IsFeatureEnabled<
    'electron',
    { electron: typeof electron }
  >;
}
