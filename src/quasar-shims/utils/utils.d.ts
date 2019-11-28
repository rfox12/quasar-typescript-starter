import 'quasar';
import { debounce } from 'quasar/dist/types/utils';

// WAITING-FOR-MERGE
declare module 'quasar' {
  // Now returns same function type
  function debounce<F extends (...args: any[]) => any>(
    fn: F,
    wait?: number,
    immediate?: boolean
  ): F;

  // Unluckily, there is no way into TS to model an indefinite number
  //  of arguments of different shape
  // Here we can explicitly model the result, at least
  function extend<R>(deep: boolean, target: any, ...sources: any[]): R;
  function extend<R>(target: object, ...sources: any[]): R;

  // Now returns same function type
  function throttle<F extends (...args: any[]) => any>(fn: F, limit: number): F;
}
