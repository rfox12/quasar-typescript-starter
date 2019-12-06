import 'quasar';

declare module 'quasar' {
  // Allow using `passive` and `notPassive` with `removeEventListener`
  // See https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/removeEventListener#Matching_event_listeners_for_removal
  // See https://github.com/quasarframework/quasar/pull/5729#issuecomment-559588257
  interface RemoveEventListenerFix {
    capture: undefined;
  }

  interface ListenOpts {
    hasPassive: boolean;
    passive: undefined | ({ passive: true } & RemoveEventListenerFix);
    notPassive: undefined | ({ passive: false } & RemoveEventListenerFix);
    passiveCapture: true | { passive: true; capture: true };
    notPassiveCapture: true | { passive: false; capture: true };
  }

  // FIXME: `event.getEventKey(evt)` is mentioned into documentation
  //  but I cannot find any other reference of it in the codebase.
}
