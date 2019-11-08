import 'quasar';

declare module 'quasar' {
  // TODO: Proposed `ListenOpts` version is more adhering to the current implementation,
  //  but depending on where it used and how, you could still prefer previous one.
  // This interface and `listenOpts` are meant to be used by the developer
  //  or only for internal usage? If it's the first case, which are the use cases?
  interface ListenOpts {
    hasPassive: boolean;
    passive: undefined | { passive: true };
    notPassive: undefined | { passive: false };
    passiveCapture: true | { passive: true; capture: true };
    notPassiveCapture: true | { passive: false; capture: true };
  }

  // FIXME: `event.getEventKey(evt)` is mentioned into documentation
  //  but I cannot find any other reference of it in the codebase.
}
