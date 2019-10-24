// This can be used like a normal interface
export interface GlobalModuleStore {
  something: string;
  somemore: number;
  somebool: boolean;
}

// Here we add this module state slice to global-defined interface
declare global {
  interface GlobalRootStore {
    moduleName: GlobalModuleStore;
  }
}
