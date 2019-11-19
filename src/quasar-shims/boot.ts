import { Request, Response } from 'express';
import {
  BootFileParams as BaseBootFileParams,
  HasSsrBootParams,
  HasStoreBootParams
} from 'quasar';
import Vue, { ComponentOptions } from 'vue';

// The only way to get full typings on `req` and `res`, except copying them over
//  and keeping them in sync, is to require `@types/express` as dev dependency
// This **should** not generate any problem, but I saw in the past
//  some type dependency create some havoc
export interface QSsrContext {
  req: Request;
  res: Response;
  url: Request['url'];
}

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

export const boot = (
  callback: (params: BootFileParams) => void | Promise<void>
) => callback;
