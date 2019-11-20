import { Configuration as BaseWebpackConfiguration } from 'webpack';
import { Configuration as WebpackDevServerConfiguration } from 'webpack-dev-server';

// See: https://stackoverflow.com/a/49936686/7931540
export type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends Array<infer U>
    ? Array<DeepPartial<U>>
    : T[P] extends ReadonlyArray<infer U>
    ? ReadonlyArray<DeepPartial<U>>
    : DeepPartial<T[P]>;
};

// Evaluate to directly add https://github.com/krzkaczor/ts-essentials
//  as dependency: some types provided from this package will be required
//  in pretty much every minimally complex project using TS (like DeepPartial).

// TODO: webpack "devServer" declaration merging broke unexpectedly, this helper is a workaround
// See https://github.com/DefinitelyTyped/DefinitelyTyped/issues/27570#issuecomment-555529569
export interface WebpackConfiguration extends BaseWebpackConfiguration {
  devServer?: WebpackDevServerConfiguration;
}
