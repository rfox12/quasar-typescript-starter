import { BootFileParams as BaseBootFileParams } from 'quasar';
import Vue, { ComponentOptions } from 'vue';

// `app` property typing should be updated into core typings
interface BootFileParams<TStore = any>
  extends Omit<BaseBootFileParams<TStore>, 'app'> {
  app: ComponentOptions<Vue>;
}

// `boot` function should be added into core helpers
export const boot = (
  callback: (parms: BootFileParams) => void | Promise<void>
) => callback;
