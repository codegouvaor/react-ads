/**
 * ADS foundations.
 *
 * Public entry of the Astoria Design System token layer:
 *
 * ```ts
 * import { adsTokens } from "@codegouvaor/react-ads/ads";
 * ```
 *
 * The CSS custom-property stylesheet is importable separately:
 *
 * ```ts
 * import "@codegouvaor/react-ads/assets/ads/tokens.css";
 * ```
 *
 * Values are provisional working defaults — see ./tokens.ts. This module is independent
 * from the legacy (DSFR-derived) token layer (`src/fr`) and will become the single source
 * of truth once the ADS stylesheet lands (MIGRATION.md).
 */
export { adsTokens, cssCustomPropertyPrefix } from "./tokens";
export type {
    AdsTokens,
    AdsColorTokens,
    AdsTypographyTokens,
    AdsSpacingTokens,
    AdsRadiusTokens,
    AdsElevationTokens,
    AdsMotionTokens,
    AdsBreakpointTokens
} from "./tokens";
