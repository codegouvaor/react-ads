import { describe, it, expect } from "vitest";
import { renderToStaticMarkup } from "react-dom/server";
import { createElement } from "react";
import {
    ADSCard,
    ADSTeaserCard,
    ADSArticleCard,
    ADSNewsList,
    ADSLinkList,
    ADSDocument,
    ADSDownload,
    ADSEvent,
    ADSMeetingCard
} from "../../../src/ads/content";

describe("ADS content components", () => {
    it("ADSCard renders title, description, media, tag, footer and link title", () => {
        const html = renderToStaticMarkup(
            createElement(ADSCard, {
                "href": "/x",
                "title": "Titre",
                "description": "Desc",
                "tag": "Actu",
                "footer": "Pied"
            })
        );
        expect(html).toContain('class="ads-card"');
        expect(html).toContain('class="ads-card__title"');
        expect(html).toContain('href="/x"');
        expect(html).toContain('class="ads-card__tag"');
        expect(html).toContain("Actu");
        expect(html).toContain("Desc");
        expect(html).toContain("Pied");
    });

    it("ADSTeaserCard renders a call-to-action link", () => {
        const html = renderToStaticMarkup(
            createElement(ADSTeaserCard, { "href": "/t", "title": "T", "description": "D" })
        );
        expect(html).toContain('class="ads-teaser-card"');
        expect(html).toContain('class="ads-teaser-card__action"');
        expect(html).toContain("fr-icon-arrow-right-line");
    });

    it("ADSArticleCard renders date, image and a read-more link", () => {
        const html = renderToStaticMarkup(
            createElement(ADSArticleCard, { "href": "/a", "title": "T", "date": "12 janv. 2026", "image": createElement("img", { "src": "/i.jpg", "alt": "" }) })
        );
        expect(html).toContain('class="ads-article-card"');
        expect(html).toContain('class="ads-article-card__media"');
        expect(html).toContain("12 janv. 2026");
        expect(html).toContain("Lire la suite");
    });

    it("ADSNewsList renders a list of article cards", () => {
        const html = renderToStaticMarkup(
            createElement(ADSNewsList, {
                "items": [
                    { "title": "A", "href": "/a" },
                    { "title": "B", "href": "/b" }
                ]
            })
        );
        expect(html).toMatch(/^<ul /);
        const cards = html.match(/class="ads-article-card"/g) ?? [];
        expect(cards.length).toBe(2);
    });

    it("ADSLinkList renders a bordered list of links with descriptions", () => {
        const html = renderToStaticMarkup(
            createElement(ADSLinkList, {
                "title": "Liens utiles",
                "items": [
                    { "label": "Formulaires", "href": "/form", "description": "Accès aux démarches" }
                ]
            })
        );
        expect(html).toContain('class="ads-link-list"');
        expect(html).toContain("Formulaires");
        expect(html).toContain("Accès aux démarches");
        expect(html).toContain('href="/form"');
    });

    it("ADSDocument renders file meta line", () => {
        const html = renderToStaticMarkup(
            createElement(ADSDocument, { "href": "/r.pdf", "title": "Rapport", "fileType": "PDF", "fileSize": "1,2 Mo" })
        );
        expect(html).toContain('class="ads-document"');
        expect(html).toContain("PDF · 1,2 Mo");
        expect(html).toContain('href="/r.pdf"');
    });

    it("ADSDownload renders a download link", () => {
        const html = renderToStaticMarkup(
            createElement(ADSDownload, { "href": "/r.pdf", "label": "Télécharger", "fileType": "PDF" })
        );
        expect(html).toContain('class="ads-download"');
        expect(html).toContain('download');
        expect(html).toContain("Télécharger");
        expect(html).toContain("PDF");
    });

    it("ADSEvent formats the date and renders location/time", () => {
        const html = renderToStaticMarkup(
            createElement(ADSEvent, { "date": "2026-01-12", "title": "Réunion", "location": "Paris", "time": "14h00" })
        );
        expect(html).toContain('class="ads-event"');
        expect(html).toContain("12");
        expect(html).toContain("janv.");
        expect(html).toContain("Paris");
        expect(html).toContain("14h00");
    });

    it("ADSMeetingCard renders an attendees line", () => {
        const html = renderToStaticMarkup(
            createElement(ADSMeetingCard, { "date": "2026-02-01", "title": "Comité", "attendees": "25 inscrits" })
        );
        expect(html).toContain('class="ads-meeting-card"');
        expect(html).toContain("25 inscrits");
    });
});