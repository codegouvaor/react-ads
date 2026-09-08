/**
 * `useADSTheme` hook.
 *
 * Returns the active ADS Native theme. When rendered outside an `<ADSProvider>`
 * it returns a default theme so components still work out of the box.
 */

import * as React from "react";
import { useColorScheme } from "react-native";
import { adsTokens as defaultTokens } from "../tokens";
import { ADSThemeContext, type ADSTheme } from "./context";

export type { ADSTheme, ADSColorScheme } from "./context";

export function useADSTheme(): ADSTheme {
    const context = React.useContext(ADSThemeContext);

    const systemScheme = useColorScheme() ?? "light";

    if (context !== undefined) {
        return context;
    }

    return {
        colorScheme: systemScheme,
        colors: defaultTokens[systemScheme === "dark" ? "darkColors" : "colors"],
        tokens: defaultTokens,
        setTokens: () => {
            // No provider: token overrides are ignored (a provider is required to mutate).
        },
        setColorScheme: () => {
            // No provider: no-op.
        }
    };
}

export { defaultTokens as defaultADSTokens };
