// This import enable module augmentation instead of module overwrite
import 'quasar';

declare module 'quasar' {
  // Derived from https://developer.mozilla.org/en-US/docs/Web/Manifest
  type PwaManifestDirection = 'ltr' | 'rtl' | 'auto';

  type PwaManifestDisplay =
    | 'fullscreen'
    | 'standalone'
    | 'minimal-ui'
    | 'browser';

  type PwaManifestOrientation =
    | 'any'
    | 'natural'
    | 'landscape'
    | 'landscape-primary'
    | 'landscape-secondary'
    | 'portrait'
    | 'portrait-primary'
    | 'portrait-secondary';

  interface PwaManifestScreenshot {
    src: string;
    sizes: string;
    type: string;
  }

  interface PwaManifestServiceWorker {
    src: string;
  }

  interface PwaManifestRelatedApplications {
    platform?: string;
    url?: string;
    id?: string;
  }

  interface PwaManifestIcon {
    src: string;
    sizes: string;
    type?: string;
    purpose?: 'badge' | 'maskable' | 'any';
  }

  interface PwaManifestOptions {
    background_color?: string;
    categories?: string[];
    description?: string;
    dir?: PwaManifestDirection;
    display?: PwaManifestDisplay;
    iarc_rating_id?: string;
    icons?: PwaManifestIcon | PwaManifestIcon[];
    inject?: boolean;
    lang?: string;
    name: string;
    orientation?: PwaManifestOrientation;
    prefer_related_applications?: boolean;
    related_applications?: PwaManifestRelatedApplications[];
    scope?: string;
    screenshots?: PwaManifestScreenshot[];
    serviceworker?: PwaManifestServiceWorker;
    short_name?: string;
    start_url?: string;
    theme_color?: string;
  }

  /**
   * This is the place where you can configure
   * [Workbox](https://developers.google.com/web/tools/workbox/modules/workbox-webpack-plugin)’s
   * behavior and also tweak your `manifest.json`.
   */
  interface QuasarPwaConfiguration {
    workboxPluginMode?: 'GenerateSW' | 'InjectManifest';
    /**
     * Full option list can be found
     *  [here](https://developers.google.com/web/tools/workbox/modules/workbox-webpack-plugin#full_generatesw_config).
     */
    // TODO: not typed because it would be too long and Workbox is going to release
    //  v5 with typings included in some months.
    // See https://github.com/GoogleChrome/workbox/releases
    // TODO: available options differ depending on workboxPluginMode,
    //  when typings are added, this should result into a discrimination union
    workboxOptions?: object;
    manifest?: PwaManifestOptions;
    /**
     * @default
     * ```typescript
     * {
     *    appleMobileWebAppCapable: 'yes';
     *    appleMobileWebAppStatusBarStyle: 'default';
     *    appleTouchIcon120: 'statics/icons/apple-icon-120x120.png';
     *    appleTouchIcon180: 'statics/icons/apple-icon-180x180.png';
     *    appleTouchIcon152: 'statics/icons/apple-icon-152x152.png';
     *    appleTouchIcon167: 'statics/icons/apple-icon-167x167.png';
     *    appleSafariPinnedTab: 'statics/icons/safari-pinned-tab.svg';
     *    msapplicationTileImage: 'statics/icons/ms-icon-144x144.png';
     *    msapplicationTileColor: '#000000';
     * }
     * ```
     */
    metaVariables?: {
      appleMobileWebAppCapable: string;
      appleMobileWebAppStatusBarStyle: string;
      appleTouchIcon120: string;
      appleTouchIcon180: string;
      appleTouchIcon152: string;
      appleTouchIcon167: string;
      appleSafariPinnedTab: string;
      msapplicationTileImage: string;
      msapplicationTileColor: string;
    };
  }
}