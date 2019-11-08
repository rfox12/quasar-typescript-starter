import 'quasar';

declare module 'quasar' {
  // `null` was missing into return type.
  function getBrand(color: string, element?: Element): string | null;
}
