// // TODO: may have some more Quasar-defined customizations into `app/lib/quasar-config.js`
// interface QuasarDevServerConfiguration
//   extends Omit<WebpackConfiguration['devServer'], 'open'> {
//   /**
//    * Behind the scenes, webpack devServer `open` property is always set to false
//    *  and that feature is delegated to `open` library.
//    * When a string is provided, it's used as if it was `open.Options.app` value
//    *  to define which browser must be open.
//    *
//    * @link https://github.com/sindresorhus/open/blob/ed757758dd556ae561b58b80ec7dee5e7c6ffddc/test.js#L10-L21
//    * @link https://github.com/sindresorhus/open/blob/ed757758dd556ae561b58b80ec7dee5e7c6ffddc/index.d.ts#L26-L33
//    */
//   open: boolean | string;
// }

// interface BaseQuasarConfiguration {
//   // TODO: not sure they can be only text, may be also numbers, boolean, objects, arrays, etc?
//   htmlVariables?: { [index: string]: string };
// }
