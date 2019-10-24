// This can be used like a normal interface
export interface MixedModuleStore {
  something: string;
  somemore: number;
  somebool: boolean;
}

// Here we add this module state slice to global-defined interface
declare module './mixed-composition' {
  interface MixedRootStore {
    moduleName: MixedModuleStore;
  }
}
