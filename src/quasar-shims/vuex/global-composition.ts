import { BootFileParams as BaseBootFileParams } from '../boot';

// We define placeholder global interface, fallback to `{}` when it has not been augmented by modules
declare global {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface GlobalRootStore {}
}

// 'store' is rewritten to use global interface, no need to provide a type parameter
interface BootFileParams extends Omit<BaseBootFileParams, 'store'> {
  store: GlobalRootStore;
}

// Note type-safety for global store merged from module augmentation
const store: GlobalRootStore = {
  moduleName: {
    somebool: true,
    somemore: 4,
    something: 'blblbl'
  }
};

store.moduleName.somebool = false;
store.moduleName.somemore = 3;
store.moduleName.something = 'hey';
