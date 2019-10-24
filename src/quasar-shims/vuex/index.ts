import { MixedRootStore } from './mixed-composition';
import { ExplicitModuleStore } from './explicit-composition-module';

// CHOSE ONE WAY TO MANAGE ROOT STATE, RENAME IT AS RootStore AND DELETE THIS CATCH-ALL TYPE DEFINITION
export type RootStore = GlobalRootStore | MixedRootStore | ExplicitModuleStore;
