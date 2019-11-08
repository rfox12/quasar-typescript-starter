import 'quasar';

declare module 'quasar' {
  // `css` has been narrowed
  function css(el: Element, css: Partial<CSSStyleDeclaration>): void;

  // `css` has been narrowed
  function cssBatch(
    elements: Element[],
    css: Partial<CSSStyleDeclaration>
  ): void;

  // `ready` was missing any real typing
  // Cover the case where a function is provided and we return its result
  function ready<F extends (...args: any[]) => any>(fn: F): ReturnType<F>;
  // TODO: Is second signature needed or we want to keep only the first and forbid usage without a function?
  // This signature covers all cases where executions stops immediately
  //  because provided parameter isn't a function
  function ready(fn?: any): void;
}
