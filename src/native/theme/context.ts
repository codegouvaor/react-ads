/**
 * ADS Native theme context.
 */

import * as React from "react";
import type { ADSTokens } from "../tokens";

export type ADSColorScheme = "light" | "dark" | "system";

export type ADSTheme = {
    /** Resolved color scheme ("system" already resolved). */
    colorScheme: "light" | "dark";
    /** Effective color tokens for the current scheme. */
    colors: ADSTokens["colors"];
    tokens: ADSTokens;
    /** Override a single token at runtime. */
    setTokens: (override: Partial<ADSTokens>) => void;
    /** Set the color scheme. */
    setColorScheme: (scheme: ADSColorScheme) => void;
    /** Render an icon by name — overridable by the host app (see Icon). */
    renderIcon?: (name: string, size: number, color: string) => React.ReactNode;
};

export const ADSThemeContext = React.createContext<ADSTheme | undefined>(undefined);

export const ADS_ACCESSIBILITY_ERROR =
    "No ADSProvider found. Wrap your app in <ADSProvider> from @codegouvaor/react-ads/native.";

export function useADSThemeContext(): ADSTheme {
    const theme = React.useContext(ADSThemeContext);

    if (theme === undefined) {
        throw new Error(ADS_ACCESSIBILITY_ERROR);
    }

    return theme;
}
