import { BootFileParams as BaseBootFileParams } from 'quasar';
import Vue, { ComponentOptions } from 'vue';

// BootFileParams redefined here should be updated into core typings
export interface BootFileParams<TStore = any>
  extends Omit<BaseBootFileParams<TStore>, 'app' | 'store'> {
  // See https://discordapp.com/channels/415874313728688138/596276596319453207/632218154445176852
  app: ComponentOptions<Vue>;
}

// `boot` function should be added into core helpers
export const boot = (
  callback: (parms: BootFileParams) => void | Promise<void>
) => callback;
