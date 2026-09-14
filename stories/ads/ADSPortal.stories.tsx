import {
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
} from "../dist/ads/portal";
import { getStoryFactory } from "./getStory";

const sectionName = "ADS";

export default {};

const header = getStoryFactory({
    sectionName,
    "wrappedComponent": { ADSGovernmentHeader },
    "disabledProps": ["lang", "darkMode"]
});
export const ADSGovernmentHeaderStory = header.getStory(
    {
        "organization": "Ministère de la Défense",
        "children": <ADSNavigationMock />
    },
    { "description": "En-tête institutionnel collant avec identité et navigation." }
);

const ministry = getStoryFactory({
    sectionName,
    "wrappedComponent": { ADSMinistryHeader },
    "disabledProps": ["lang", "darkMode"]
});
export const ADSMinistryHeaderStory = ministry.getStory(
    {
        "organization": "Ministère de la Justice"
    },
    { "description": "Bandeau ministère compact, pour les pages intérieures." }
);

const footer = getStoryFactory({
    sectionName,
    "wrappedComponent": { ADSGovernmentFooter },
    "disabledProps": ["lang", "darkMode"]
});
export const ADSGovernmentFooterStory = footer.getStory(
    {
        "organization": "Ministère de la Défense",
        "columns": [
            { "title": "Le ministère", "links": [{ "label": "Présentation", "href": "#" }, { "label": "Organisation", "href": "#" }] },
            { "title": "Démarches", "links": [{ "label": "Formulaires", "href": "#" }] }
        ],
        "bottomLinks": [{ "label": "Mentions légales", "href": "#" }, { "label": "Confidentialité", "href": "#" }]
    },
    { "description": "Pied de page institutionnel avec colonnes de liens et barre inférieure." }
);

const hero = getStoryFactory({
    sectionName,
    "wrappedComponent": { ADSHero },
    "disabledProps": ["lang", "darkMode"]
});
export const ADSHeroStory = hero.getStory(
    {
        "kicker": "Portail officiel",
        "title": "Ministère de la Défense",
        "subtitle": "La défense de la République d'Astoria.",
        "actions": <button>Découvrir</button>
    },
    { "description": "Bannière héro avec sur-titre, titre, sous-titre et actions." }
);

const banner = getStoryFactory({
    sectionName,
    "wrappedComponent": { ADSServiceBanner },
    "disabledProps": ["lang", "darkMode"]
});
export const ADSServiceBannerStory = banner.getStory(
    {
        "tone": "warning",
        "title": "Maintenance",
        "children": "Le service sera indisponible de 22h à 2h."
    },
    { "description": "Bannière d'état du service (info, succès, avertissement, danger)." }
);

const notice = getStoryFactory({
    sectionName,
    "wrappedComponent": { ADSOfficialNotice },
    "disabledProps": ["lang", "darkMode"]
});
export const ADSOfficialNoticeStory = notice.getStory(
    {
        "children": "République d'Astoria — site officiel"
    },
    { "description": "Bandeau de mention officielle." }
);

const breadcrumb = getStoryFactory({
    sectionName,
    "wrappedComponent": { ADSBreadcrumb },
    "disabledProps": ["lang", "darkMode"]
});
export const ADSBreadcrumbStory = breadcrumb.getStory(
    {
        "items": [
            { "label": "Accueil", "href": "#" },
            { "label": "Services", "href": "#" },
            { "label": "Page actuelle" }
        ]
    },
    { "description": "Fil d'Ariane sémantique (dernier élément = page courante)." }
);

const nav = getStoryFactory({
    sectionName,
    "wrappedComponent": { ADSNavigation },
    "disabledProps": ["lang", "darkMode"]
});
export const ADSNavigationStory = nav.getStory(
    {
        "items": [
            { "label": "Accueil", "href": "#", "active": true },
            { "label": "Démarches", "href": "#" },
            { "label": "Actualités", "href": "#" }
        ]
    },
    { "description": "Barre de navigation horizontale, élément actif marqué." }
);

const megaMenu = getStoryFactory({
    sectionName,
    "wrappedComponent": { ADSMegaMenu },
    "disabledProps": ["lang", "darkMode"]
});
export const ADSMegaMenuStory = megaMenu.getStory(
    {
        "label": "Démarches",
        "columns": [
            { "title": "Scolarité", "links": [{ "label": "Bourses", "href": "#" }, { "label": "Inscription", "href": "#" }] },
            { "title": "Emploi", "links": [{ "label": "Offres", "href": "#" }] }
        ]
    },
    { "description": "Menu déroulant large accessible au clavier (Enter/Échap), replié en statique sur mobile." }
);

const search = getStoryFactory({
    sectionName,
    "wrappedComponent": { ADSSearch },
    "disabledProps": ["lang", "darkMode"]
});
export const ADSSearchStory = search.getStory(
    {
        "placeholder": "Rechercher une démarche"
    },
    { "description": "Formulaire de recherche accessible (champ + bouton)." }
);

const pagination = getStoryFactory({
    sectionName,
    "wrappedComponent": { ADSPagination },
    "disabledProps": ["lang", "darkMode"]
});
export const ADSPaginationStory = pagination.getStory(
    {
        "currentPage": 5,
        "pageCount": 12
    },
    { "description": "Pagination avec numéros, ellipses et contrôles précédent/suivant." }
);

function ADSNavigationMock() {
    return (
        <nav aria-label="Navigation principale">
            <a href="#" style={{ "marginInline": "0.5rem" }}>Accueil</a>
            <a href="#" style={{ "marginInline": "0.5rem" }}>Démarches</a>
            <a href="#" style={{ "marginInline": "0.5rem" }}>Actualités</a>
        </nav>
    );
}