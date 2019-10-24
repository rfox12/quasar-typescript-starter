import { ExplicitModuleStore } from './explicit-composition-module';

// Require the centralized store management to manually register all modules slices here
// This is more explicit, but more coupled:
//  central store must know the structure that modules want add to store, or define some kind of rules/constraint
interface ExplicitRootStore {
  moduleName: ExplicitModuleStore;
}

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
