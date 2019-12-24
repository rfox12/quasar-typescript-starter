// interface QuasarBaseElectronConfiguration {
//   // This property definition is here merely to avoid duplicating the TSDoc
//   // TODO: currently discriminated unions can only use
//   //  a literal value to apply the discrimination, we cannot
//   //  discriminate based on the absence of 'bundler' property.
//   // Because of this, 'bundler' cannot be absent to discriminate correctly
//   // See https://github.com/microsoft/TypeScript/issues/19691
//   // PS: note that the problem here is the absence of the property in a static context,
//   //  not its value; this means that `bundler: undefined` would discriminate correctly
//   //  (thanks to https://github.com/microsoft/TypeScript/pull/27695),
//   //  but not putting 'bundler' won't work, even if at runtime
//   //  (and when doing type guards) the two scenarios are the same
//   bundler: QuasarElectronBundlers;
// }

// interface QuasarBuilderElectronConfiguration {
//   // TODO: builder typings are inside electron-builder package
//   //  which is installed only when required so I installed
//   //  the whole package as a devDependency for now.
//   // There may be problems when using this typings without
//   //  having electron-builder dependency installed
//   builder?: ElectronBuilderConfiguration;
// }
