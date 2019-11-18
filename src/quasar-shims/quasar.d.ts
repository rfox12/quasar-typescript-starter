import {
  QuasarIconSet,
  QuasarLanguage,
  QuasarPluginOptions as BaseQuasarPluginOptions
} from 'quasar';
import { PluginObject } from 'vue';

/**
 * These interfaces cannot be augmented into quasar module scope
 * because they are in conflict with some of inner declarations
 */

export interface QuasarPluginOptions
  extends Omit<BaseQuasarPluginOptions, 'lang' | 'iconSet'> {
  lang: QuasarLanguage;
  iconSet: QuasarIconSet;
}

export type Quasar = PluginObject<Partial<QuasarPluginOptions>>;
