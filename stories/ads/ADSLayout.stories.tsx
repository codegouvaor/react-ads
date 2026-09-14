import { ADSPage, ADSMain, ADSContainer, ADSSection, ADSStack, ADSGrid, ADSColumns } from "../dist/ads/layout";
import { getStoryFactory } from "./getStory";

const sectionName = "ADS";

export default {};

const page = getStoryFactory({
    sectionName,
    "wrappedComponent": { ADSPage },
    "disabledProps": ["lang", "darkMode"]
});
export const ADSPageStory = page.getStory(
    {
        "children": (
            <ADSStack gap="4">
                <ADSGovernmentHeaderMock />
                <ADSMain>
                    <ADSContainer>
                        <p>Contenu de la page.</p>
                    </ADSContainer>
                </ADSMain>
                <ADSGovernmentFooterMock />
            </ADSStack>
        )
    },
    { "description": "Coquille pleine hauteur d'une page : colonne flex avec contenu qui pousse le footer en bas." }
);

const container = getStoryFactory({
    sectionName,
    "wrappedComponent": { ADSContainer },
    "disabledProps": ["lang", "darkMode"]
});
export const ADSContainerStory = container.getStory(
    {
        "size": "wide",
        "children": (
            <div style={{ "backgroundColor": "var(--ads-color-surface-muted)", "padding": "1rem" }}>
                Contenu dans un conteneur centré et borné en largeur.
            </div>
        )
    },
    { "description": "Colonne centrée et bornée en largeur. `size` : default (75rem), wide (80rem), narrow (52rem)." }
);

const section = getStoryFactory({
    sectionName,
    "wrappedComponent": { ADSSection },
    "disabledProps": ["lang", "darkMode"]
});
export const ADSSectionStory = section.getStory(
    {
        "title": "Actualités",
        "subtitle": "Les dernières publications du ministère.",
        "action": <button>Voir tout</button>,
        "children": "Contenu de la section."
    },
    { "description": "Section verticale avec en-tête (titre + sous-titre + action) et fond optionnel." }
);

const stack = getStoryFactory({
    sectionName,
    "wrappedComponent": { ADSStack },
    "disabledProps": ["lang", "darkMode"]
});
export const ADSStackStory = stack.getStory(
    {
        "gap": 6,
        "children": (
            <>
                <div>Bloc A</div>
                <div>Bloc B</div>
                <div>Bloc C</div>
            </>
        )
    },
    { "description": "Pile verticale avec un espacement constant entre les blocs." }
);

const grid = getStoryFactory({
    sectionName,
    "wrappedComponent": { ADSGrid },
    "disabledProps": ["lang", "darkMode"]
});
export const ADSGridStory = grid.getStory(
    {
        "columns": { "mobile": 1, "tablet": 2, "desktop": 3 },
        "gap": 6,
        "children": (
            <>
                <div>1</div>
                <div>2</div>
                <div>3</div>
            </>
        )
    },
    { "description": "Grille responsive : colonnes par breakpoint (mobile / tablette / desktop)." }
);

const columns = getStoryFactory({
    sectionName,
    "wrappedComponent": { ADSColumns },
    "disabledProps": ["lang", "darkMode"]
});
export const ADSColumnsStory = columns.getStory(
    {
        "cols": 3,
        "gap": 6,
        "children": (
            <>
                <div>Colonne 1</div>
                <div>Colonne 2</div>
                <div>Colonne 3</div>
            </>
        )
    },
    { "description": "Colonnes de largeur égale qui passent en pleine largeur sur mobile." }
);

function ADSGovernmentHeaderMock() {
    return <header style={{ "borderBottom": "1px solid var(--ads-color-border)", "padding": "1rem" }}>En-tête</header>;
}
function ADSGovernmentFooterMock() {
    return <footer style={{ "borderTop": "1px solid var(--ads-color-border)", "padding": "1rem" }}>Pied de page</footer>;
}