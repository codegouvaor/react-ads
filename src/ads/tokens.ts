/**
 * ADS design tokens — the contract.
 *
 * This module declares the token structure the Astoria Design System components will be
 * built upon (colors, typography, spacing, radius, elevation, motion, breakpoints).
 *
 * ⚠️ IMPORTANT — placeholder values.
 * The exact values below are PROVISIONAL working defaults. The official Astoria identity
 * (colors, fonts, precise scales) is decided by the Astoria brand/design owners and will
 * replace these values without changing the structure. Components must consume tokens —
 * never hard-coded values — so that updating the identity never requires rewriting a
 * component. See MIGRATION.md, stage "ADS foundations".
 *
 * The same tokens are exposed as CSS custom properties in
 * `src/assets/ads/tokens.css` (import `@codegouvaor/react-ads/assets/ads/tokens.css`),
 * so that applications can also style themselves with `var(--ads-*)`.
 */

/** CSS custom-property prefix used for every ADS token. */
export const cssCustomPropertyPrefix = "ads";

export type AdsColorTokens = {
    /** Main action / brand color. */
    primary: string;
    /** Secondary action color. */
    secondary: string;
    success: string;
    warning: string;
    danger: string;
    info: string;
    background: string;
    surface: string;
    /** Muted surface (cards on background, table stripes…). */
    "surface-muted": string;
    text: string;
    /** Secondary text (captions, muted paragraphs…). */
    "text-muted": string;
    border: string;
    focus: string;
    disabled: string;
    /** Text that must remain readable when sitting on `primary`. */
    "on-primary": string;
};

export type AdsTypographyTokens = {
    "font-family-base": string;
    "font-family-heading": string;
    /** Font sizes, from smallest to largest. */
    "font-size-xs": string;
    "font-size-sm": string;
    "font-size-md": string;
    "font-size-lg": string;
    "font-size-xl": string;
    "font-weight-regular": string;
    "font-weight-medium": string;
    "font-weight-bold": string;
    "line-height-body": string;
    "line-height-heading": string;
};

export type AdsSpacingTokens = {
    /** Base unit of the spacing scale. */
    base: string;
    /** Spacing steps (multiples of the base unit). */
    1: string;
    2: string;
    3: string;
    4: string;
    5: string;
    6: string;
    7: string;
    8: string;
    9: string;
    10: string;
    11: string;
    12: string;
};

export type AdsRadiusTokens = {
    none: string;
    small: string;
    medium: string;
    large: string;
    full: string;
};

export type AdsElevationTokens = {
    none: string;
    small: string;
    medium: string;
    large: string;
};

export type AdsMotionTokens = {
    "duration-fast": string;
    "duration-normal": string;
    "duration-slow": string;
    "easing-standard": string;
    "easing-entrance": string;
    "easing-exit": string;
};

export type AdsBreakpointTokens = {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
};

export type AdsTokens = {
    colors: AdsColorTokens;
    typography: AdsTypographyTokens;
    spacing: AdsSpacingTokens;
    radius: AdsRadiusTokens;
    elevation: AdsElevationTokens;
    motion: AdsMotionTokens;
    breakpoints: AdsBreakpointTokens;
};

/**
 * PROVISIONAL working values — replace with the official Astoria identity when decided.
 * Values are given as CSS lengths where relevant so they can be consumed both by CSS
 * custom properties and by CSS-in-JS.
 */
export const adsTokens: AdsTokens = {
    colors: {
        // Neutral, scheme-agnostic placeholders (see file header).
        primary: "#1a5da6",
        secondary: "#5a6570",
        success: "#1f7a4d",
        warning: "#9a6b00",
        danger: "#c03434",
        info: "#2962a8",
        background: "#ffffff",
        surface: "#f4f6f8",
        "surface-muted": "#e9edf1",
        text: "#1c232b",
        "text-muted": "#5c6670",
        border: "#c9d1d9",
        focus: "#0a68b4",
        disabled: "#9aa3ab",
        "on-primary": "#ffffff"
    },
    typography: {
        "font-family-base":
            '"Segoe UI", system-ui, -apple-system, "Helvetica Neue", arial, sans-serif',
        "font-family-heading":
            '"Segoe UI", system-ui, -apple-system, "Helvetica Neue", arial, sans-serif',
        "font-size-xs": "0.75rem",
        "font-size-sm": "0.875rem",
        "font-size-md": "1rem",
        "font-size-lg": "1.25rem",
        "font-size-xl": "1.5rem",
        "font-weight-regular": "400",
        "font-weight-medium": "500",
        "font-weight-bold": "700",
        "line-height-body": "1.6",
        "line-height-heading": "1.2"
    },
    spacing: {
        base: "0.25rem",
        "1": "0.25rem",
        "2": "0.5rem",
        "3": "0.75rem",
        "4": "1rem",
        "5": "1.5rem",
        "6": "2rem",
        "7": "2.5rem",
        "8": "3rem",
        "9": "4rem",
        "10": "5rem",
        "11": "6rem",
        "12": "8rem"
    },
    radius: {
        none: "0",
        small: "0.25rem",
        medium: "0.5rem",
        large: "1rem",
        full: "9999px"
    },
    elevation: {
        none: "none",
        small: "0 1px 2px rgba(28, 35, 43, 0.08)",
        medium: "0 4px 12px rgba(28, 35, 43, 0.12)",
        large: "0 12px 32px rgba(28, 35, 43, 0.18)"
    },
    motion: {
        "duration-fast": "120ms",
        "duration-normal": "200ms",
        "duration-slow": "350ms",
        "easing-standard": "cubic-bezier(0.2, 0, 0, 1)",
        "easing-entrance": "cubic-bezier(0, 0, 0.2, 1)",
        "easing-exit": "cubic-bezier(0.4, 0, 1, 1)"
    },
    breakpoints: {
        xs: "0rem",
        sm: "36rem", // 576px
        md: "48rem", // 768px
        lg: "62rem", // 992px
        xl: "75rem" // 1200px
    }
};
