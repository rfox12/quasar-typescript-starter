import { BootFileParams } from './quasar';
// `boot` function should be added into core helpers
export const boot = (
  callback: (parms: BootFileParams) => void | Promise<void>
) => callback;
