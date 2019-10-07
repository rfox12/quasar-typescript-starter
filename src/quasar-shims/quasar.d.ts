/* eslint-disable @typescript-eslint/no-explicit-any */
import { QuasarPluginOptions } from 'quasar';
import { PluginObject } from 'vue';

import { QuasarIconSet } from './icon-set';
import { QuasarLanguage } from './lang';

declare module 'quasar' {
  interface QuasarPluginOptionsExt extends QuasarPluginOptions {
    lang: QuasarLanguage;
    iconSet: QuasarIconSet;
  }

  type QuasarExt = PluginObject<Partial<QuasarPluginOptionsExt>>;
}
