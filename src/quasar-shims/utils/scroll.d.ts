import 'quasar';

// WAITING-FOR-MERGE
// As suggested by Kerry, all `Element` as been updated to `HTMLElement`
// See https://discordapp.com/channels/616161554433572894/616164014103461899/636262196275445770
declare module 'quasar' {
  // Apparently parameter and return types where switched:
  //  `Window` doesn't have a `.closest` method, used by the implementation.
  function getScrollTarget(el: HTMLElement): HTMLElement | Window;

  function getScrollHeight(el: HTMLElement | Window): number;
  function getScrollWidth(el: HTMLElement | Window): number;

  function getScrollPosition(scrollTarget: HTMLElement | Window): number;
  function getHorizontalScrollPosition(
    scrollTarget: HTMLElement | Window
  ): number;

  function animScrollTo(
    el: HTMLElement | Window,
    to: number,
    duration: number
  ): void;
  function animHorizontalScrollTo(
    el: HTMLElement | Window,
    to: number,
    duration: number
  ): void;

  function setScrollPosition(
    scrollTarget: HTMLElement | Window,
    offset: number,
    duration?: number
  ): void;
  function setHorizontalScrollPosition(
    scrollTarget: HTMLElement | Window,
    offset: number,
    duration?: number
  ): void;

  function getScrollbarWidth(): number;
  function hasScrollbar(el: HTMLElement | Window, onY?: boolean): boolean;
}
