import 'quasar';
import { BuildDateOptions, DateUnitOptions, DateLocale, clone } from 'quasar';

declare module 'quasar' {
  // Being the two interfaces exactly the same (and provided to the same functions too)
  //  you can simplify one of them as a type alias (or use a single DateOptions interface for all methods)
  type ModifyDateOptions = BuildDateOptions;

  function isValid(date: number | string): boolean;
  // FIXME: there is a random `return` into `adjustDate` which is probably meant to be a `continue`
  // and would make `buildDate` to return `void` if `month` is set.
  // It's not clear why `month` has a branch for itself which would not use the `UTC` function version
  function buildDate(options: BuildDateOptions, utc?: boolean): Date;
  // There was a redundant `| number` in parameter type
  function getDayOfWeek(date: Date | number | string): number;
  // By your usage `to` and `from` are both wrapped with a `new Date` call,
  //  their type can be relaxed to match the one of the first parameter
  function isBetweenDates(
    date: Date | number | string,
    from: Date | number | string,
    to: Date | number | string,
    opts?: { inclusiveFrom: boolean; inclusiveTo: boolean }
  ): boolean;
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
  // Stricter input type, more precise output
  function inferDateFormat(
    date: Date | number | string
  ): 'date' | 'number' | 'string';
  // `min` and `max` are optional in the implementation function, it has been reflected into the signature
  function getDateBetween(
    date: Date | number | string,
    min?: Date | number | string,
    max?: Date | number | string
  ): Date;
  // `unit` is now stricter. Like `getDateDiff`, but here unit switch cases are already singular words
  function isSameDate(
    date: Date | number | string,
    date2: Date | number | string,
    unit?: DateUnitOptions
  ): boolean;
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
  // Right now `clone` implementation is open to a lot of edge cases,
  //  because it will return as-is any value which is not a Date,
  //  also Objects, Arrays, etc which are passed by reference.
  // I put some strict typings (still looser than current one), but actual signature adhering
  //  to implementation should be `function clone<D>(date: D): D;`
  //  which is much broader.
  function clone<D extends Date | number | string>(date: D): D;
}
