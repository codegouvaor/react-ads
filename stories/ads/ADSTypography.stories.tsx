import { ADSHeading, ADSText, ADSLead, ADSLink } from "../dist/ads/typography";
import { getStoryFactory } from "./getStory";

const sectionName = "ADS";

export default {};

const heading = getStoryFactory({
    sectionName,
    "wrappedComponent": { ADSHeading },
    "disabledProps": ["lang", "darkMode"]
});
export const ADSHeadingStory = heading.getStory(
    {
        "level": 1,
        "children": "Ministère de la Défense"
    },
    { "description": "Titre sémantique : le tag (h1…h6) et la taille suivent le niveau." }
);

const text = getStoryFactory({
    sectionName,
    "wrappedComponent": { ADSText },
    "disabledProps": ["lang", "darkMode"]
});
export const ADSTextStory = text.getStory(
    {
        "size": "lg",
        "weight": "semibold",
        "color": "muted",
        "children": "Un paragraphe typographiquement contrôlé."
    },
    { "description": "Texte contrôlé (taille, graisse, couleur, marge, alignement)." }
);

const lead = getStoryFactory({
    sectionName,
    "wrappedComponent": { ADSLead },
    "disabledProps": ["lang", "darkMode"]
});
export const ADSLeadStory = lead.getStory(
    {
        "children": "Introduction d'un chapitre, plus grande et plus aérée pour la lisibilité."
    },
    { "description": "Paragraphe d'introduction de section." }
);

const link = getStoryFactory({
    sectionName,
    "wrappedComponent": { ADSLink },
    "disabledProps": ["lang", "darkMode"]
});
export const ADSLinkStory = link.getStory(
    {
        "href": "#",
        "variant": "action",
        "iconId": "fr-icon-arrow-right-line",
        "children": "Accéder au service"
    },
    { "description": "Lien stylisé. `variant`: default (texte souligné), muted, action (avec icône)." }
);