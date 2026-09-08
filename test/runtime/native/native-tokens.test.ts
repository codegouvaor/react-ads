import { describe, it, expect, vi } from "vitest";

vi.mock("react-native", () => import("./react-native-mock"));

import { adsTokens, adsColors, adsSpacing, adsRadius, adsDimensions } from "../../../src/native/tokens";

describe("ADS Native tokens", () => {
    it("exposes the full ADSTokens contract", () => {
        expect(adsTokens.colors).toBeDefined();
        expect(adsTokens.darkColors).toBeDefined();
        expect(adsTokens.typography).toBeDefined();
        expect(adsTokens.spacing).toBeDefined();
        expect(adsTokens.radius).toBeDefined();
        expect(adsTokens.elevation).toBeDefined();
        expect(adsTokens.dimensions).toBeDefined();
        expect(adsTokens.motion).toBeDefined();
    });

    it("covers the required semantic colors", () => {
        const required = [
            "background",
            "foreground",
            "primary",
            "secondary",
            "accent",
            "success",
            "warning",
            "error",
            "info",
            "border",
            "muted",
            "disabled",
            "text",
            "textMuted"
        ];

        for (const key of required) {
            expect(adsColors[key], `missing color token "${key}"`).toBeDefined();
        }
    });

    it("exposes spacing scale steps xs..xl", () => {
        expect(adsSpacing.xs).toBe(4);
        expect(adsSpacing.sm).toBe(8);
        expect(adsSpacing.md).toBe(16);
        expect(adsSpacing.lg).toBe(24);
        expect(adsSpacing.xl).toBe(32);
    });

    it("exposes radius tokens sm/md/lg/full", () => {
        expect(adsRadius.sm).toBeGreaterThan(0);
        expect(adsRadius.md).toBeGreaterThan(adsRadius.sm);
        expect(adsRadius.lg).toBeGreaterThan(adsRadius.md);
        expect(adsRadius.full).toBeGreaterThan(adsRadius.lg);
    });

    it("respects a thumb-friendly touch target", () => {
        expect(adsDimensions.touchTarget).toBeGreaterThanOrEqual(44);
        expect(adsDimensions.controlMd).toBeGreaterThanOrEqual(44);
    });

    it("provides mobile-adapted control heights", () => {
        expect(adsDimensions.controlLg).toBeGreaterThan(adsDimensions.controlMd);
        expect(adsDimensions.controlMd).toBeGreaterThan(adsDimensions.controlSm);
    });
});