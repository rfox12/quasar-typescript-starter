import 'quasar';

declare module 'quasar' {
  interface GlobalQuasarLanguage extends QuasarLanguage {
    set(lang: QuasarLanguage): void;
    /** Returns undefined when in SSR mode or when it cannot determine current language. */
    getLocale(): string | undefined;
  }

  interface GlobalQuasarIconSet extends QuasarIconSet {
    set(iconSet: QuasarIconSet): void;
  }

  // HasCapacitor, HasCordova and HasElectron are hidden behind feature-flags
  interface QVueGlobals extends HasCapacitor, HasCordova, HasElectron {
    version: string;
    lang: GlobalQuasarLanguage;
    iconSet: GlobalQuasarIconSet;
  }
}
