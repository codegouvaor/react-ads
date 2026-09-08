/**
 * Utility to translate an ADS elevation token into React Native shadow props.
 */

import { Platform } from "react-native";
import type { ViewStyle } from "react-native";
import type { ADSElevation } from "../tokens";

export function elevationToStyle(elevation: ADSElevation): ViewStyle {
    if (Platform.OS === "android") {
        return { elevation: elevation.android };
    }

    return {
        shadowColor: "#000000",
        shadowOffset: elevation.offset,
        shadowOpacity: elevation.opacity,
        shadowRadius: elevation.radius
    };
}
