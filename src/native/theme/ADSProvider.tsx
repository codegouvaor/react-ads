/**
 * ADS Native theme provider.
 *
 * ```tsx
 * import { ADSProvider } from "@codegouvaor/react-ads/native";
 *
 * <ADSProvider colorScheme="system">
 *   <App />
 * </ADSProvider>
 * ```
 */

import * as React from "react";
import { useColorScheme } from "react-native";
import { adsTokens as defaultTokens } from "../tokens";
import type { ADSTokens } from "../tokens";
import { ADSThemeContext, type ADSColorScheme, type ADSTheme } from "./context";

export type { ADSColorScheme, ADSTheme } from "./context";

export type ADSProviderProps = {
    children: React.ReactNode;
    /** Default "system". */
    colorScheme?: ADSColorScheme;
    /** Partial token override (e.g. to supply the official Astoria identity). */
    tokens?: Partial<ADSTokens>;
    /** Provide an icon renderer (see the Icon primitive). */
    renderIcon?: ADSTheme["renderIcon"];
};

export function ADSProvider(props: ADSProviderProps) {
    const { children, colorScheme = "system", tokens, renderIcon } = props;

    const systemScheme = useColorScheme() ?? "light";

    const [colorSchemeState, setColorSchemeState] = React.useState<ADSColorScheme>(colorScheme);

    const [tokenOverride, setTokenOverride] = React.useState<Partial<ADSTokens> | undefined>(
        tokens
    );

    React.useEffect(() => {
        setColorSchemeState(colorScheme);
    }, [colorScheme]);

    React.useEffect(() => {
        setTokenOverride(tokens);
    }, [tokens]);

    const resolvedScheme: "light" | "dark" =
        colorSchemeState === "system"
            ? systemScheme
            : colorSchemeState;

    const resolvedTokens: ADSTokens = React.useMemo(
        () => deepMergeTokens(defaultTokens, tokenOverride),
        [tokenOverride]
    );

    const theme: ADSTheme = React.useMemo(
        () => ({
            colorScheme: resolvedScheme,
            colors: resolvedTokens[resolvedScheme === "dark" ? "darkColors" : "colors"],
            tokens: resolvedTokens,
            setTokens: override =>
                setTokenOverride(prev => mergeTokenOverrides([prev ?? {}, override])),
            setColorScheme: setColorSchemeState,
            renderIcon
        }),
        [resolvedScheme, resolvedTokens, renderIcon]
    );

    return <ADSThemeContext.Provider value={theme}>{children}</ADSThemeContext.Provider>;
}

function deepMergeTokens(base: ADSTokens, override?: Partial<ADSTokens>): ADSTokens {
    if (override === undefined) {
        return base;
    }

    return {
        colors: { ...base.colors, ...override.colors },
        darkColors: { ...base.darkColors, ...override.darkColors },
        typography: { ...base.typography, ...override.typography },
        spacing: { ...base.spacing, ...override.spacing },
        radius: { ...base.radius, ...override.radius },
        elevation: { ...base.elevation, ...override.elevation },
        dimensions: { ...base.dimensions, ...override.dimensions },
        motion: { ...base.motion, ...override.motion }
    };
}

function mergeTokenOverrides(overrides: Partial<ADSTokens>[]): Partial<ADSTokens> {
    return overrides.reduce<Partial<ADSTokens>>(
        (acc, override) => ({
            ...acc,
            ...(override.colors !== undefined && { colors: { ...acc.colors, ...override.colors } }),
            ...(override.darkColors !== undefined && {
                darkColors: { ...acc.darkColors, ...override.darkColors }
            }),
            ...(override.typography !== undefined && {
                typography: { ...acc.typography, ...override.typography }
            }),
            ...(override.spacing !== undefined && {
                spacing: { ...acc.spacing, ...override.spacing }
            }),
            ...(override.radius !== undefined && { radius: { ...acc.radius, ...override.radius } }),
            ...(override.elevation !== undefined && {
                elevation: { ...acc.elevation, ...override.elevation }
            }),
            ...(override.dimensions !== undefined && {
                dimensions: { ...acc.dimensions, ...override.dimensions }
            }),
            ...(override.motion !== undefined && { motion: { ...acc.motion, ...override.motion } })
        }),
        {}
    );
}

ADSProvider.displayName = "ADSProvider";

export default ADSProvider;
