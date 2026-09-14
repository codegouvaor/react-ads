import { describe, it, expect } from "vitest";
import { renderToStaticMarkup } from "react-dom/server";
import { createElement } from "react";
import {
    ADSPortal,
    ADSGovernmentHeader,
    ADSMinistryHeader,
    ADSGovernmentFooter,
    ADSHero,
    ADSServiceBanner,
    ADSOfficialNotice,
    ADSBreadcrumb,
    ADSNavigation,
    ADSMegaMenu,
    ADSSearch,
    ADSPagination
} from "../../../src/ads/portal";

describe("ADS government portal components", () => {
    it("ADSPortal wraps children and sets the lang", () => {
        const html = renderToStaticMarkup(
            createElement(ADSPortal, { "organization": "Ministère de la Défense" }, "contenu")
        );
        expect(html).toContain('class="ads-portal"');
        expect(html).toContain('lang="fr"');
        expect(html).toContain("contenu");
    });

    it("ADSGovernmentHeader reads the organization from ADSPortal context", () => {
        const html = renderToStaticMarkup(
            createElement(
                ADSPortal,
                { "organization": "Ministère de la Défense" },
                createElement(ADSGovernmentHeader)
            )
        );
        expect(html).toContain('class="ads-gov-header"');
        expect(html).toContain("Ministère de la Défense");
    });

    it("ADSMinistryHeader renders a compact strip", () => {
        const html = renderToStaticMarkup(
            createElement(ADSMinistryHeader, { "organization": "Justice" })
        );
        expect(html).toContain('class="ads-ministry-header"');
        expect(html).toContain("Justice");
    });

    it("ADSGovernmentFooter renders columns and bottom links", () => {
        const html = renderToStaticMarkup(
            createElement(ADSGovernmentFooter, {
                "organization": "Défense",
                "columns": [{ "title": "Formulaires", "links": [{ "label": "Demande", "href": "/d" }] }],
                "bottomLinks": [{ "label": "Mentions légales", "href": "/leg" }]
            })
        );
        expect(html).toContain('class="ads-gov-footer"');
        expect(html).toContain("Formulaires");
        expect(html).toContain("Demande");
        expect(html).toContain("Mentions légales");
        expect(html).toContain("Défense");
    });

    it("ADSHero renders a primary hero with title/subtitle/actions", () => {
        const html = renderToStaticMarkup(
            createElement(ADSHero, { "title": "Bienvenue", "subtitle": "Sous-titre" })
        );
        expect(html).toContain('class="ads-hero"');
        expect(html).toContain('data-tone="primary"');
        expect(html).toContain('class="ads-hero__title"');
        expect(html).toContain("Sous-titre");
    });

    it("ADSServiceBanner sets a role and a tone icon", () => {
        const html = renderToStaticMarkup(
            createElement(ADSServiceBanner, { "tone": "warning", "title": "Maintenance" }, "texte")
        );
        expect(html).toContain('role="status"');
        expect(html).toContain('data-tone="warning"');
        expect(html).toContain("Maintenance");
    });

    it("ADSOfficialNotice renders the legal strip", () => {
        const html = renderToStaticMarkup(createElement(ADSOfficialNotice, null, "République d'Astoria"));
        expect(html).toContain('class="ads-official-notice"');
    });

    it("ADSBreadcrumb marks the last item as current", () => {
        const html = renderToStaticMarkup(
            createElement(ADSBreadcrumb, {
                "items": [
                    { "label": "Accueil", "href": "/" },
                    { "label": "Page actuelle" }
                ]
            })
        );
        expect(html).toContain('aria-label="Fil d');
        expect(html).toContain("Ariane");
        expect(html).toContain('aria-current="page"');
        expect(html).toContain('href="/"');
    });

    it("ADSNavigation marks the active item with aria-current", () => {
        const html = renderToStaticMarkup(
            createElement(ADSNavigation, {
                "items": [
                    { "label": "Accueil", "href": "/", "active": true },
                    { "label": "Services", "href": "/services" }
                ]
            })
        );
        expect(html).toContain('aria-current="page"');
        expect(html).toContain('href="/services"');
    });

    it("ADSMegaMenu renders a closed, accessible panel", () => {
        const html = renderToStaticMarkup(
            createElement(ADSMegaMenu, {
                "label": "Démarches",
                "columns": [{ "title": "Scolarité", "links": [{ "label": "Bourse", "href": "/bourse" }] }]
            })
        );
        expect(html).toContain('class="ads-mega-menu__trigger"');
        expect(html).toContain('aria-expanded="false"');
        expect(html).toContain("hidden");
    });

    it("ADSSearch renders an accessible labelled input and submit", () => {
        const html = renderToStaticMarkup(createElement(ADSSearch));
        expect(html).toContain('role="search"');
        expect(html).toContain('type="search"');
        expect(html).toContain('class="ads-search__button"');
    });

    it("ADSPagination renders pages with an ellipsis and current page", () => {
        const html = renderToStaticMarkup(
            createElement(ADSPagination, { "currentPage": 5, "pageCount": 10 })
        );
        expect(html).toContain('aria-label="Pagination"');
        expect(html).toContain('aria-current="page"');
        expect(html).toContain("…");
    });
});