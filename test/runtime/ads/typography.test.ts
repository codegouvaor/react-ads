import { describe, it, expect } from "vitest";
import { renderToStaticMarkup } from "react-dom/server";
import { createElement } from "react";
import {
    ADSHeading,
    ADSText,
    ADSLead,
    ADSLink
} from "../../../src/ads/typography";

describe("ADS typography primitives", () => {
    it("ADSHeading renders the correct semantic tag and level", () => {
        const html = renderToStaticMarkup(createElement(ADSHeading, { "level": 1 }, "Titre"));
        expect(html).toMatch(/^<h1 /);
        expect(html).toContain('data-level="1"');
        expect(html).toContain('class="ads-heading"');

        const h3 = renderToStaticMarkup(createElement(ADSHeading, { "level": 3 }, "T"));
        expect(h3).toMatch(/^<h3 /);
    });

    it("ADSHeading supports an explicit size override", () => {
        const html = renderToStaticMarkup(
            createElement(ADSHeading, { "level": 2, "size": 5 }, "T")
        );
        expect(html).toContain('data-level="2"');
        expect(html).toContain('data-size="5"');
    });

    it("ADSText maps size / weight / color / margin / align props", () => {
        const html = renderToStaticMarkup(
            createElement(ADSText, {
                "size": "lg",
                "weight": "bold",
                "color": "muted",
                "margin": "bottom",
                "align": "center"
            }, "Texte")
        );
        expect(html).toContain('class="ads-text"');
        expect(html).toContain('data-size="lg"');
        expect(html).toContain('data-weight="bold"');
        expect(html).toContain('data-color="muted"');
        expect(html).toContain('data-margin="bottom"');
        expect(html).toContain('data-align="center"');
    });

    it("ADSText renders the requested tag", () => {
        const html = renderToStaticMarkup(createElement(ADSText, { "as": "span" }, "T"));
        expect(html).toMatch(/^<span /);
    });

    it("ADSLead renders a lead paragraph", () => {
        const html = renderToStaticMarkup(createElement(ADSLead, null, "Intro"));
        expect(html).toContain('class="ads-lead"');
        expect(html).toContain("Intro");
    });

    it("ADSLink renders href, variant and external target", () => {
        const html = renderToStaticMarkup(
            createElement(ADSLink, { "href": "/a", "external": true }, "Lien")
        );
        expect(html).toContain('href="/a"');
        expect(html).toContain('target="_blank"');
        expect(html).toContain('rel="noreferrer noopener"');
        expect(html).toContain('class="ads-link"');

        const action = renderToStaticMarkup(
            createElement(ADSLink, { "href": "/b", "variant": "action", "iconId": "fr-icon-arrow-right-line" }, "Voir")
        );
        expect(action).toContain("ads-link--action");
        expect(action).toContain('data-variant="action"');
        expect(action).toContain("fr-icon-arrow-right-line");
    });

    it("ADSLink honors the disabled state", () => {
        const html = renderToStaticMarkup(createElement(ADSLink, { "href": "/c", "disabled": true }, "T"));
        expect(html).not.toContain('href="/c"');
        expect(html).toContain('aria-disabled="true"');
    });
});