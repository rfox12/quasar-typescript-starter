import {
  BootFileParams as BaseBootFileParams,
  HasSsr,
  HasStore,
  QuasarPluginOptions as BaseQuasarPluginOptions
} from 'quasar';
import 'quasar/dist/types/boot';
import Vue, { ComponentOptions, PluginObject } from 'vue';
import { QuasarIconSet } from './icon-set';
import { QuasarLanguage } from './lang';

declare module 'quasar/dist/types/boot' {
  // TODO: `req` and `res` must probably be better specified
  interface QSsrContext {
    url: string; // I assumed it's a string, I don't know the real type
  }
}

// These interfaces cannot be augmented into quasar module scope
//  because they are in conflict with some of inner declarations
export interface QuasarPluginOptions
  extends Omit<BaseQuasarPluginOptions, 'lang' | 'iconSet'> {
  lang: QuasarLanguage;
  iconSet: QuasarIconSet;
}

export type BootFileParams = Omit<BaseBootFileParams, 'app' | 'store'> & {
  // See https://discordapp.com/channels/415874313728688138/596276596319453207/632218154445176852
  app: ComponentOptions<Vue>;
} & HasSsr &
  HasStore;

export type Quasar = PluginObject<Partial<QuasarPluginOptions>>;
