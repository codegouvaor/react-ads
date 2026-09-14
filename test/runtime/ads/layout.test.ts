import { describe, it, expect } from "vitest";
import { renderToStaticMarkup } from "react-dom/server";
import { createElement } from "react";
import {
    ADSPage,
    ADSMain,
    ADSContainer,
    ADSSection,
    ADSStack,
    ADSGrid,
    ADSColumns
} from "../../../src/ads/layout";

describe("ADS layout primitives", () => {
    it("ADSPage renders a full-height shell with a stable class", () => {
        const html = renderToStaticMarkup(createElement(ADSPage, null, "contenu"));
        expect(html).toContain('class="ads-page"');
        expect(html).toContain("contenu");
    });

    it("ADSMain renders the main landmark with a default skip-link id", () => {
        const html = renderToStaticMarkup(createElement(ADSMain, null, "x"));
        expect(html).toContain('<main id="contenu"');
        expect(html).toContain('class="ads-main"');

        const custom = renderToStaticMarkup(createElement(ADSMain, { "id": "principal" }, "x"));
        expect(custom).toContain('id="principal"');
    });

    it("ADSContainer maps the size prop to a data attribute", () => {
        const html = renderToStaticMarkup(createElement(ADSContainer, { "size": "wide" }, "x"));
        expect(html).toContain('class="ads-container"');
        expect(html).toContain('data-size="wide"');

        const defaults = renderToStaticMarkup(createElement(ADSContainer, null, "x"));
        expect(defaults).toContain('data-size="default"');
    });

    it("ADSSection renders a semantic section and optional heading", () => {
        const html = renderToStaticMarkup(
            createElement(ADSSection, { "tone": "subtle", "title": "Actualités" }, "corps")
        );
        expect(html).toContain('<section class="ads-section" data-tone="subtle"');
        expect(html).toContain('class="ads-section__title"');
        expect(html).toContain("Actualités");
        expect(html).toContain("corps");
    });

    it("ADSStack sets the gap and align data attributes", () => {
        const html = renderToStaticMarkup(createElement(ADSStack, { "gap": 8, "align": "center" }, "x"));
        expect(html).toContain('class="ads-stack"');
        expect(html).toContain('data-gap="8"');
        expect(html).toContain('data-align="center"');
    });

    it("ADSGrid maps responsive columns and cascades defaults", () => {
        const html = renderToStaticMarkup(
            createElement(ADSGrid, { "columns": { "mobile": 1, "tablet": 2, "desktop": 3 }, "gap": 6 }, "x")
        );
        expect(html).toContain('data-cols-sm="1"');
        expect(html).toContain('data-cols-md="2"');
        expect(html).toContain('data-cols-lg="3"');
        expect(html).toContain('data-gap="6"');

        // defaults: tablet inherits mobile, desktop inherits tablet
        const defaults = renderToStaticMarkup(createElement(ADSGrid, { "columns": { "mobile": 2 } }, "x"));
        expect(defaults).toContain('data-cols-sm="2"');
        expect(defaults).toContain('data-cols-md="2"');
        expect(defaults).toContain('data-cols-lg="2"');
    });

    it("ADSColumns wraps each child in a column item", () => {
        const html = renderToStaticMarkup(
            createElement(ADSColumns, { "cols": 3, "gap": 6 }, createElement("div", null, "a"), createElement("div", null, "b"))
        );
        const items = html.match(/ads-columns__item/g) ?? [];
        expect(items.length).toBe(2);
        expect(html).toContain('data-cols="3"');
        expect(html).toContain('data-gap="6"');
    });

    it("exported from the ADS root barrel", async () => {
        const ads = await import("../../../src/ads");
        for (const name of ["ADSPage", "ADSMain", "ADSContainer", "ADSSection", "ADSStack", "ADSGrid", "ADSColumns"]) {
            expect(typeof ads[name]).toBe("function");
        }
    });
});