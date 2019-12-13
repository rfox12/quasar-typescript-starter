import {
  QVueGlobals as BaseQVueGlobals,
  HasCapacitor,
  HasCordova,
  HasElectron
} from 'quasar';
import * as Cordova from 'cordova';
import * as electron from 'electron';
import { Capacitor } from '../../src-capacitor/node_modules/@capacitor/core';

// HasCapacitor, HasCordova and HasElectron are hidden behind feature-flags
// Capacitor typings are into @capacitor/core,
//  will it be possible to retain types also inside it?
export type QVueGlobals = BaseQVueGlobals &
  HasCapacitor<{ capacitor: typeof Capacitor }> &
  HasCordova<{ cordova: typeof Cordova }> &
  HasElectron<{ electron: typeof electron }>;
