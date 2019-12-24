// TODO: apply typings in this ways won't provide intellisense
//  to properties not defined in the configuration, but it won't forbid them either
// This is due to the fact that TS uses structural typing
// See https://github.com/Microsoft/TypeScript/wiki/FAQ#what-is-structural-typing
// This can be seen as a bug or as a feature.
// To accept only valid properties, something like this should be done:
// `const config: QuasarConfiguration = {...}; return config;`

// export const configure = (
//   callback: (context: QuasarContext) => QuasarConfiguration
// ) => callback;
