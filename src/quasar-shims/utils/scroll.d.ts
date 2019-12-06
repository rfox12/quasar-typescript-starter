import 'quasar';

// https://github.com/quasarframework/quasar/issues/5758#issuecomment-560454496
declare module 'quasar' {
  function getScrollTarget(el: Element): HTMLElement | Window;
}
