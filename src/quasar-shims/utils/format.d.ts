import 'quasar';

declare module 'quasar' {
  // TODO: what is the actual expected behaviour of this function?
  // Current signature seems to suggest that it should be used to check
  //  if value is into an interval, but documentation and usage have another meaning.
  // Documentation refers to it as if was `normalizeToInterval` function
  //  and of course it seems it's used like that, this is very confusing.
  function between(v: number, min: number, max: number): number;
}
