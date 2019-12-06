import 'quasar';
import * as Cordova from 'cordova';
import * as electron from 'electron';
import { Capacitor } from '../../src-capacitor/node_modules/@capacitor/core';

declare module 'quasar' {
  // WAITING-FOR_MERGE - https://github.com/quasarframework/quasar/pull/5735
  interface GlobalQuasarLanguage extends QuasarLanguage {
    set(lang: QuasarLanguage): void;
    /** Returns undefined when in SSR mode or when it cannot determine current language. */
    getLocale(): string | undefined;
  }

  // WAITING-FOR_MERGE - https://github.com/quasarframework/quasar/pull/5735
  interface GlobalQuasarIconSet extends QuasarIconSet {
    set(iconSet: QuasarIconSet): void;
  }

  // HasCapacitor, HasCordova and HasElectron are hidden behind feature-flags
  // Capacitor typings are into @capacitor/core,
  //  will it be possible to retain types also inside it?
  interface QVueGlobals
    extends HasCapacitor<{ capacitor: typeof Capacitor }>,
      HasCordova<{ cordova: typeof Cordova }>,
      HasElectron<{ electron: typeof electron }> {
    version: string;
    lang: GlobalQuasarLanguage;
    iconSet: GlobalQuasarIconSet;
  }
}
