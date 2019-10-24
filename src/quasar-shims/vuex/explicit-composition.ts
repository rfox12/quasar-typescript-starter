import { ExplicitModuleStore } from './explicit-composition-module';
import { BootFileParams as BaseBootFileParams } from '../boot';

// Require the centralized store management to manually register all modules slices here
// This is more explicit, but more coupled:
//  central store must know the structure that modules want add to store, or define some kind of rules/constraint
interface ExplicitRootStore {
  moduleName: ExplicitModuleStore;
}

// ExplicitRootStore interface must be manually set like this in user-land, eg. in an helper file
// Otherwise it should always be specified anywhere it is used, even if we know it will always be the same
interface BootFileParams extends BaseBootFileParams<ExplicitRootStore> {}

// Works as expected, full type-safety
const store: ExplicitRootStore = {
  moduleName: {
    somebool: true,
    somemore: 4,
    something: 'blblbl'
  }
};

store.moduleName.somebool = false;
store.moduleName.somemore = 3;
store.moduleName.something = 'hey';
