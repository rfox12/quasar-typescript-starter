// We define placeholder scoped interface, fallback to `{}` when it has not been augmented by modules
// In this way we avoided to litter global scope
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface MixedRootStore {}

// Note type-safety for mixed store merged from module augmentation
const store: MixedRootStore = {
  moduleName: {
    somebool: true,
    somemore: 4,
    something: 'blblbl'
  }
};

store.moduleName.somebool = false;
store.moduleName.somemore = 3;
store.moduleName.something = 'hey';
