// WAITING-FOR_MERGE - https://github.com/quasarframework/quasar/pull/5735
// These animations are taken from `@quasar/extras/animate/animate-list`
// There is probably a better way to extract them from that file
// It's also possible to get the same types, when codebase will be migrated to TS,
//  by setting the array "as const" and using an helper type
// See https://github.com/microsoft/TypeScript/issues/28046#issuecomment-480516434
declare module '@quasar/extras' {
  type QuasarGeneralAnimations =
    | 'bounce'
    | 'flash'
    | 'flip'
    | 'headShake'
    | 'hinge'
    | 'jello'
    | 'pulse'
    | 'rubberBand'
    | 'shake'
    | 'swing'
    | 'tada'
    | 'wobble';

  type QuasarInAnimations =
    | 'bounceIn'
    | 'bounceInDown'
    | 'bounceInLeft'
    | 'bounceInRight'
    | 'bounceInUp'
    | 'fadeIn'
    | 'fadeInDown'
    | 'fadeInDownBig'
    | 'fadeInLeft'
    | 'fadeInLeftBig'
    | 'fadeInRight'
    | 'fadeInRightBig'
    | 'fadeInUp'
    | 'fadeInUpBig'
    | 'flipInX'
    | 'flipInY'
    | 'lightSpeedIn'
    | 'rollIn'
    | 'rotateIn'
    | 'rotateInDownLeft'
    | 'rotateInDownRight'
    | 'rotateInUpLeft'
    | 'rotateInUpRight'
    | 'slideInDown'
    | 'slideInLeft'
    | 'slideInRight'
    | 'slideInUp'
    | 'zoomIn'
    | 'zoomInDown'
    | 'zoomInLeft'
    | 'zoomInRight'
    | 'zoomInUp';

  type QuasarOutAnimations =
    | 'bounceOut'
    | 'bounceOutDown'
    | 'bounceOutLeft'
    | 'bounceOutRight'
    | 'bounceOutUp'
    | 'fadeOut'
    | 'fadeOutDown'
    | 'fadeOutDownBig'
    | 'fadeOutLeft'
    | 'fadeOutLeftBig'
    | 'fadeOutRight'
    | 'fadeOutRightBig'
    | 'fadeOutUp'
    | 'fadeOutUpBig'
    | 'flipOutX'
    | 'flipOutY'
    | 'lightSpeedOut'
    | 'rollOut'
    | 'rotateOut'
    | 'rotateOutDownLeft'
    | 'rotateOutDownRight'
    | 'rotateOutUpLeft'
    | 'rotateOutUpRight'
    | 'slideOutDown'
    | 'slideOutLeft'
    | 'slideOutRight'
    | 'slideOutUp'
    | 'slideOutRight'
    | 'zoomOut'
    | 'zoomOutDown'
    | 'zoomOutLeft'
    | 'zoomOutRight'
    | 'zoomOutUp';

  type QuasarAnimations =
    | QuasarGeneralAnimations
    | QuasarInAnimations
    | QuasarOutAnimations;
}
