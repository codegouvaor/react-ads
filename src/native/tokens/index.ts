/**
 * ADS Native tokens — aggregated entry.
 *
 * ```ts
 * import { adsTokens } from "@codegouvaor/react-ads/native";
 * ```
 *
 * These mirror the semantic contract of the web ADS tokens
 * (`@codegouvaor/react-ads/ads`) but are expressed with concrete values
 * consumable by React Native styles.
 */

import { adsColors, adsDarkColors } from "./colors";
import type { ADSColorTokens, ADSColorToken } from "./colors";
import { adsTypography } from "./typography";
import type { ADSTypographyTokens, ADSFontWeight } from "./typography";
import { adsSpacing } from "./spacing";
import type { ADSSpacingTokens } from "./spacing";
import { adsRadius } from "./radius";
import type { ADSRadiusTokens } from "./radius";
import { adsElevation } from "./elevation";
import type { ADSElevation, ADSElevationTokens } from "./elevation";
import { adsDimensions } from "./dimensions";
import type { ADSDimensionTokens } from "./dimensions";
import { adsMotion } from "./motion";
import type { ADSMotionTokens } from "./motion";

export type {
    ADSColorTokens,
    ADSColorToken,
    ADSTypographyTokens,
    ADSFontWeight,
    ADSSpacingTokens,
    ADSRadiusTokens,
    ADSElevation,
    ADSElevationTokens,
    ADSDimensionTokens,
    ADSMotionTokens
};

export { adsColors, adsDarkColors };
export { adsTypography };
export { adsSpacing };
export { adsRadius };
export { adsElevation };
export { adsDimensions };
export { adsMotion };

export type ADSTokens = {
    colors: ADSColorTokens;
    darkColors: ADSColorTokens;
    typography: ADSTypographyTokens;
    spacing: ADSSpacingTokens;
    radius: ADSRadiusTokens;
    elevation: Record<keyof ADSElevationTokens, ADSElevation>;
    dimensions: ADSDimensionTokens;
    motion: ADSMotionTokens;
};

/** Default ADS Native tokens (light scheme). */
export const adsTokens: ADSTokens = {
    colors: adsColors,
    darkColors: adsDarkColors,
    typography: adsTypography,
    spacing: adsSpacing,
    radius: adsRadius,
    elevation: adsElevation,
    dimensions: adsDimensions,
    motion: adsMotion
};
