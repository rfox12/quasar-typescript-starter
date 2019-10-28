// This import enable module augmentation instead of module overwrite
import 'quasar';
import { Options as LruCacheOptions } from 'lru-cache';

declare module 'quasar' {
  interface QuasarSsrConfiguration {
    /**
     * If a PWA should take over or just a SPA.
     * When used in object form, you can specify Workbox options
     *  which will be applied on top of `pwa > workboxOptions`.
     *
     * @default false
     */
    // TODO: not typed because it would be too long and Workbox is going to release
    //  v5 with typings included in some months.
    // See https://github.com/GoogleChrome/workbox/releases
    pwa?: boolean | object;
    // TODO: check best generic types to put there
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    componentCache?: LruCacheOptions<any, any>;
  }
}
