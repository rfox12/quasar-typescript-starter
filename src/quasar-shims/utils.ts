// WAITING-FOR_MERGE - https://github.com/quasarframework/quasar/pull/5735
export type StringDictionary<T extends string> = Required<
  { [index in T]: string }
>;
