# quasar-typescript-starter

Most of the stuff is copied from TypeScript app-extension to which I previously contributed.
Especially webpack configuration extension has been taken from there and I cannot guarantee it's the best way to manage it, not having done it myself, but it works.

Current setup is meant to work with normal, PWA and Electron modes and has not been tried with Cordova.
All meaningful open issues I found on `app-extension-typescript` are solved by this starter.

## ESLint

ESLint has been setup with Prettier enabled.
Everything should work with ESLint 6 too (I'm using it in a project of my company without problems), but default installed version is < 6 so I left it untouched.
See [here](https://github.com/quasarframework/app-extension-typescript/blob/dev/extension/src/templates/noprettier/_eslintrc.js) for Prettier-free version.

Problems with `@typescript-eslint` and Vue files linting [have been solved](https://github.com/quasarframework/app-extension-typescript/issues/23#issuecomment-544956269).
DFC (Double File Component) fashion, instead of SFC, is still needed to have component intellisense into unit tests.

Into `.eslintrc.js`:

- `'vue/component-name-in-template-casing': ['error', 'kebab-case']` enforces kebab-case, but it should probably be defined based on user preferences, given the recent Quasar addition which allows to choose components casing into templates;
- `@typescript-eslint/explicit-function-return-type` rule is turned off because I personally think that rule is too restrictive and verbose, but it has its benefits and should probably be left enabled and check what the community prefer (maybe leaving it, but commented and with an explanation).

## TypeScript config

Into `tsconfig.json`:

- `"noEmit": true` is needed to address [this problem](https://github.com/quasarframework/app-extension-typescript/issues/36). It will work also by adding `"outDir": "./dist"` and excluding `dist` folder. Explanations can be found via links inside the issue.
- `"experimentalDecorators": true` is needed only if using `vue-class-component` component syntax.
- `"resolveJsonModule": true` is needed only if importing JSON files into TS code.
- `"esModuleInterop": true` is needed to better manage non-TS libraries.
- `"types": [ "quasar" ]` is needed because "the actual import of the Quasar components is done in generated code that for some reason the VS Code is not picking up on consistently (it may be b/c that code is generated as JS not TS)" (cit Kerry on Discord, [reference](https://github.com/quasarframework/app-extension-typescript/pull/39)).
- `"exclude": [ ... , "/dist"]` is needed or some files which has been copied over for any reason during a build process (eg. a `.d.ts` file inside `src-ssr` folder) would apply their types even when original files has been updated.

## Quasar config

Into `quasar.config.json`:

- `fork-ts-checker-webpack-plugin` is used by default without asking to the end-user (in the app-extension a prompt was shown). As I have understood this solution is the fastest because it runs the type checker in a parallel process, but require the user to properly setup its `tsconfig.json` to include all files to check, while the original `ts-loader` relies on webpack's module resolutions to know which files should be checkd and must wait for webpack to finish its job. [Reference](https://github.com/TypeStrong/fork-ts-checker-webpack-plugin). There seems to be [a regression](https://github.com/TypeStrong/fork-ts-checker-webpack-plugin/issues/339) with new versions of the plugin, whose typings relies on `webpack` and `tapable` ones. I manually added `@types/webpack` and `@types/tapable` as devDependencies to workaround it.

## VSCode config

`.vscode` folder and its files should be added only when using VSCode I guess? Probably the user should be prompted about this, I have no real solution to avoid littering the repo with random config without user interaction ([here](https://github.com/quasarframework/app-extension-typescript/blob/dev/extension/src/install.js) is how it works in current app-extension);

`"vetur.format.defaultFormatter.html": "prettier"` should be added only when using Prettier.

## Quasar types

All definitions inside `quasar-shims` are types which need to be added into core typings.
Some of those files are helpful but a pain in the ass to maintain, because manually derived from JSON files (see `icon-set.ts` and `lang.ts`).
It would be easier if JSON files could be converted to be `.ts` files, in which case we could rely on TS inference and declaration merging to some extent to get automatic typings.

Some of types are rarely used (only when unit testing in my experience) and you can safely avoid to add them if keeping their types in sync is too troublesome, leaving `any` if there is no way to derive them automatically.

This principle works the same with components of course: Quasar components use render functions instead of SFC, so switching to native TS support using `.ts` files is relatively easy and removes the tooling process to manually sync typings.

It should be noted that, as of today, [it has been stated](https://twitter.com/Naisstep/status/1185232738602893316) by the core team that in Vue3 template-based components will be _faster_ than render-function-based components most of the times.

## Generated files

All script files generated by the CLI (except config ones like ESLint and Babel) should be generated as `.ts` instead of `.js`.
This includes boot files, i18n files, vuex files, new components/pages/layouts, etc.

New components should be generated based on user chosen default component style. Component with different styles can work together without problems AFAIK, but some requires particular libraries to be installed. Prompting the user to chose which one he wants could be an idea, adding all of them altogether another one.
The component style could also be defined via an option on `quasar new component` command, like `--style=<composition|class|object>`

Component styles:

- [Composition API](https://github.com/vuejs/composition-api) ([rfc](https://vue-composition-api-rfc.netlify.com/#basic-example)): currently available as a plugin to Vue2, it will be the official way to have TS support. It's currently in `0.x` stage. I've been using it for some time and helping pin-point some edge cases where it still fails, but overall is pretty stable. When Vue3 will be released, it will become the new standard, it will be enbedded into the core and the library won't be needed anymore.
- [Classes decorators](https://github.com/vuejs/vue-class-component) and [Property decorators](https://github.com/kaorun343/vue-property-decorator): current most used TS solution so far, it heavily relies on Decorators which aren't still a well defined standard. Decorators proposal is having some hard times, going back and forth between T39 stages. It will still be supported in Vue3, but from what I read it won't have the core team focus.
- Object syntax: good old plain object notation. Can be used with TS, but it requires a lot of typings overhead, quirks to get it right and it still fails to model some concepts, not recommended when using TS.

I put example components for all styles into `src/quasar-shim/component-styles`, from which is possible to abstract a template for automatic scaffolding.
I can produce more complex examples if needed.

## Boot files

Boot file should return code wrapped into a callback function given as parameter of `boot(...)` function (actual name isn't important, can be changed) to get parameter typings, much like when defining a component for TS you are required to wrap it into a `Vue.extend(...)` or [`createComponent(...)`](https://github.com/vuejs/composition-api/blob/bb1e0309ae943bf92ac92fab670d63b9e288e8f3/src/component/component.ts#L73-L95).
`boot(...)` won't actually do anything and just return the provided callback. It should be added to Quasar helpers to allow `import { boot } from 'quasar`, while right now I'm forced to do `import { boot } from 'src/quasar-shims/boot'`.
Note that it's return signature is `void | Promise<void>` to support async boot files: in those cases `async` should be used like `export default boot(async () => {...})`.

`BootFileParams` into core typings should be updated accordingly to the definition into `src/quasar-shims/boot`.

Placing `Vue.use(...)` and static declarations outside boot function seems pretty unconstintent to me, so I moved everything inside the function.
Also, unless there are performance issues, I'd always install plugins using `Vue` instance provided as parameter: this makes the boot function "pure" by any means and you can easily switch it during unit tests, for example.

## Store typings

I never used `Vuex`, so I'm not sure how I should type it with TS.
In Angular I used to declare a global scope `RootStore` empty interface, then all modules would redeclare it adding theirs slices of the state. Thanks to TS interface merging, I then had a global fully typed `RootStore` interface when I needed it.

Another way could be to separate every slice and manually compose the global state importing every single slice, even if to me it's a bit verbose.

A middle way is to exploit TS definition of module (every TS file with at least an `export` is a TS module) and use interface merging augmenting a predefined module, instead of the global scope.

I added examples for the all three ways into `quasar-shims/vuex` folder.

Anyway [here](https://github.com/vuejs/vuex/issues/564) are some suggestions and guidelines on how to mange Vuex with TS from someone which actually used it.

Regardless of the chosen way, the resulting `RootStore` should be used to type `BootFileParams.store` property.
The global and mixed versions allow us to define `store: RootStore` and avoid having to always specify `TStore` generic parameter.

## Feature flagged types

In Quasar there is these opt-in features (SSR, Store, etc) which happens to inject some parameters into boot files (mostly).
To avoid typing those parameters as optional, I setup a feature-flag system which add certain types when a given key is found in the `quasar` scoped interface `QuasarFeatureFlags`.
To enable a feature flag, a `*-flag.d.ts` file must be put into that feature folder (actually, anywhere you like) with content

```ts
// This import enable module augmentation instead of module overwrite
import 'quasar';

declare module 'quasar' {
  interface QuasarFeatureFlags {
    featureFlagName: true;
  }
}
```

Then you can use `IsFeatureEnabled` to create a conditional type

```ts
type HasSsr = IsFeatureEnabled<'ssr', { ssrContext?: QSsrContext | null }>;
```

If the flag is enabled, the type will match the second type parameter, otherwise it will be an empty object.
This allow you to use it in unions without effects when the feature is disabled.

```ts
type RouterBootParams = {
  Vue: VueConstructor;
} & HasSsr &
  HasStore;
```

## Unanswered questions / WIP

I have some doubts about stuff I didn't understand, I'll put them here in random order:

- files into `src-ssr`, which are marked with this disclaimer `This file runs in a Node context (it's NOT transpiled by Babel), so use only the ES6 features that are supported by your Node version.`. Should I try to setup them with TS and their transpilation? I don't know if it's worth it, are they supposed to be heavily manipulated by the user?
- scroll utility types ([reference](https://discordapp.com/channels/616161554433572894/616164014103461899/636262196275445770)
- `ctx` parameter of `quasar.config.js` function, if you want to change that file to TS too (it could be useful);
- `cfg` webpack extension parameter;
- `ssrContext.req` and `ssrContext.res` properties into `QSsrContext` are probably much more whan just the ones defined right now.
