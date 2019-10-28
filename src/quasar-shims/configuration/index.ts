import { QuasarContext, QuasarConfiguration } from 'quasar';

export const configure = (
  callback: (context: QuasarContext) => QuasarConfiguration
) => callback;
