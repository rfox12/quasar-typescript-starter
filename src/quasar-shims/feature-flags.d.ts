import { QSsrContext } from './boot';
import { RootStore } from './vuex';

// WAITING-FOR-MERGE https://github.com/quasarframework/quasar/pull/5815
declare module 'quasar' {
  // We rely on declaration merging augmenting QuasarConf with declaration files
  //  located into feature folders.
  // We tryed to narrow the index type, but apparently this works only for mapped types
  //  and not for interfaces
  // See https://github.com/microsoft/TypeScript/issues/24220#issuecomment-449325451
  // We can obtain the same result by generating and keeping in sync a `config.d.ts`
  //  file with feature options set to true or false, but it's much more messy IMO.
  interface QuasarFeatureFlags {
    [index: string]: boolean;
  }

  type IsFeatureEnabled<
    O extends string,
    T,
    U = {}
  > = QuasarFeatureFlags[O] extends true ? T : U;

  type HasSsr<T, U = {}> = IsFeatureEnabled<'ssr', T, U>;
  type HasStore<T, U = {}> = IsFeatureEnabled<'store', T, U>;

  type HasSsrBootParams = HasSsr<{ ssrContext?: QSsrContext | null }>;
  type HasStoreBootParams = HasStore<{ store: RootStore }>;

  type HasPwa<T, U = {}> = IsFeatureEnabled<'pwa', T, U>;

  type HasCapacitor<T, U = {}> = IsFeatureEnabled<'capacitor', T, U>;
  type HasCordova<T, U = {}> = IsFeatureEnabled<'cordova', T, U>;
  type HasElectron<T, U = {}> = IsFeatureEnabled<'electron', T, U>;
}
