// TODO: these options should be declared using interface merging
//  instead of a monolitic interface. To support this, some kind of tweak
//  is needed into JSON-generated typings
// TODO: probably a better interface name can be found
// TODO: I cannot find any others, help needed
// TODO: this seems to be the same config which can be provided to QuasarPluginObject,
//  shall investigate it and eventually abstract it into another file to avoid circular dependencies
// interface QuasarFrameworkInnerConfiguration {
//   loading: {
//     // TODO: should allow choice only between predefined spinners, not every Vue instance
//     spinner: Vue;
//   };
// }

// TODO: currently discriminated unions can only use
//  a literal value to apply the discrimination, we cannot
//  discriminate based on the absence of 'all' property,
//  so `all` property must be always present.
// This is the same problem we have with `electron.bundler` property,
//  check there for more information

// interface QuasarAutoFrameworkObjectConfiguration {
//   all: 'auto';
// }
// interface QuasarAllFrameworkObjectConfiguration {
//   all: true;
// }
// interface QuasarManualFrameworkObjectConfiguration {
//   all: false;
// }

// type QuasarFrameworkConfiguration =
//   | 'all' // Equal to `{ all: true }`
//   | QuasarAutoFrameworkObjectConfiguration
//   | QuasarAllFrameworkObjectConfiguration
//   | QuasarManualFrameworkObjectConfiguration;
