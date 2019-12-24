import {
  BootFileParams as BaseBootFileParams,
  HasSsrBootParams,
  HasStoreBootParams
} from 'quasar';
import Vue, { ComponentOptions } from 'vue';

export type BootFileParams = Omit<
  BaseBootFileParams,
  'app' | 'store' | 'ssrContext'
> & {
  // See https://discordapp.com/channels/415874313728688138/596276596319453207/632218154445176852
  app: ComponentOptions<Vue>;
  urlPath: string;
  redirect: (url: string) => void;
} & HasSsrBootParams &
  HasStoreBootParams;
