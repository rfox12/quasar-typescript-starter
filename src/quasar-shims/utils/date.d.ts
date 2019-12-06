import 'quasar';
import { BuildDateOptions, DateUnitOptions, DateLocale } from 'quasar';

declare module 'quasar' {
  // TODO:
  // `BuildDateOptions` and `ModifyDateOptions` differ only by the `date`/`days` property.
  // But inside `getChange`, `days` seems to be transformed into `date` anyway,
  //  so this can be reduced to a common `DateOptions` for all methods
  interface DateOptions {
    milliseconds?: number;
    seconds?: number;
    minutes?: number;
    hours?: number;
    month?: number;
    year?: number;
  }

  interface BuildDateOptions extends DateOptions {
    date?: number;
  }

  interface ModifyDateOptions extends DateOptions {
    days?: number;
  }

  // Return type was Date, while a number is always returned.
  // FIXME: unit was `string` type, this could cause an error if someone
  //  inserts a random string, because the inner switch doesn't even have
  //  a default case effectively returning void.
  // I put DateUnitOptions to narrow down the type, BUT THIS REQUIRE TO UPDATE CASES CONDITIONS
  //  which atm are all plurals, while `DateUnitOptions` are all singular.
  // I'd advocate for singular words.
  function getDateDiff(
    date: Date | number | string,
    subtract: Date | number | string,
    unit?: DateUnitOptions
  ): number;
  // `format` should be optional by implementation.
  // FIXME: date should be optional by implementation too, meaning that if you pass an invalid
  //  value the function will accept it and just return void.
  // An Error should be thrown in those cases instead, to fail fast.
  // I don't think is possible to model current behavior in a meaningful way in TS.
  function formatDate(
    date: Date | number | string,
    format?: string,
    locale?: DateLocale,
    __forcedYear?: number
  ): string;
}
