import {
    ADSPortal,
    ADSGovernmentHeader,
    ADSGovernmentFooter,
    ADSHero,
    ADSServiceBanner,
    ADSOfficialNotice,
    ADSBreadcrumb,
    ADSNavigation,
    ADSSearch,
    ADSPagination
} from "../dist/ads/portal";
import {
    ADSPage,
    ADSMain,
    ADSContainer,
    ADSSection,
    ADSStack,
    ADSGrid
} from "../dist/ads/layout";
import { ADSLead } from "../dist/ads/typography";
import {
    ADSTeaserCard,
    ADSNewsList,
    ADSLinkList,
    ADSDocument,
    ADSDownload,
    ADSEvent
} from "../dist/ads/content";
import { getStoryFactory } from "./getStory";

const sectionName = "ADS";

/**
 * Page de portail gouvernemental construite **uniquement** avec des composants ADS.
 *
 * Aucun CSS local, aucun `CSSProperties` massif : l'application décrit le contenu et
 * la structure, ADS décide de la présentation. Cette page illustre le critère de
 * réussite principal de la mission.
 */
const { meta, getStory } = getStoryFactory({
    sectionName,
    "wrappedComponent": { ADSPortal },
    "disabledProps": ["lang", "darkMode"]
});

export default meta;

export const PortailGouvernemental = getStory(
    {
        "organization": "Ministère de la Défense",
        "children": (
            <>
                <ADSOfficialNotice>République d'Astoria — site officiel</ADSOfficialNotice>

                <ADSGovernmentHeader organization="Ministère de la Défense">
                    <ADSNavigation
                        items={[
                            { "label": "Accueil", "href": "#", "active": true },
                            { "label": "Démarches", "href": "#" },
                            { "label": "Actualités", "href": "#" },
                            { "label": "Carrières", "href": "#" }
                        ]}
                    />
                </ADSGovernmentHeader>

                <ADSPage>
                    <ADSMain>
                        <ADSHero
                            kicker="Portail officiel"
                            title="Ministère de la Défense"
                            subtitle="Assurer la défense et la sécurité de la République d'Astoria."
                            actions={<button>Découvrir nos missions</button>}
                        />

                        <ADSContainer>
                            <ADSStack gap="8">
                                <ADSBreadcrumb
                                    items={[
                                        { "label": "Accueil", "href": "#" },
                                        { "label": "Page actuelle" }
                                    ]}
                                />

                                <ADSServiceBanner tone="info">
                                    Les formulaires de demande sont en cours de mise à jour.
                                </ADSServiceBanner>

                                <ADSSearch placeholder="Rechercher une démarche" />

                                <ADSSection title="Démarches" subtitle="Accéder aux principaux services en ligne">
                                    <ADSGrid columns={{ "mobile": 1, "tablet": 2, "desktop": 3 }} gap="6">
                                        <ADSTeaserCard
                                            href="#"
                                            tag="Démarche"
                                            title="Demander une bourse"
                                            description="Constituer votre dossier de demande."
                                        />
                                        <ADSTeaserCard
                                            href="#"
                                            tag="Démarche"
                                            title="S'inscrire au service national"
                                            description="Toutes les informations pratiques."
                                        />
                                        <ADSTeaserCard
                                            href="#"
                                            tag="Démarche"
                                            title="Accéder à son dossier militaire"
                                            description="Suivez votre carrière en ligne."
                                        />
                                    </ADSGrid>
                                </ADSSection>

                                <ADSSection title="Actualités">
                                    <ADSLead>
                                        Les dernières publications du ministère et les communiqués
                                        officiels.
                                    </ADSLead>
                                    <ADSNewsList
                                        horizontal
                                        items={[
                                            {
                                                "href": "#",
                                                "date": "12 janv. 2026",
                                                "title": "Rapport annuel 2026 publié",
                                                "description": "Le rapport annuel du ministère est en ligne."
                                            },
                                            {
                                                "href": "#",
                                                "date": "10 janv. 2026",
                                                "title": "Nouvelle base de données",
                                                "description": "Accès aux données ouvertes de la défense."
                                            },
                                            {
                                                "href": "#",
                                                "date": "8 janv. 2026",
                                                "title": "Campagne de recrutement",
                                                "description": "Le ministère recrute des ingénieurs."
                                            }
                                        ]}
                                    />
                                </ADSSection>

                                <ADSSection title="Documents & publications">
                                    <ADSGrid columns={{ "mobile": 1, "desktop": 2 }} gap="5">
                                        <ADSDocument
                                            href="#"
                                            title="Rapport annuel 2026"
                                            fileType="PDF"
                                            fileSize="1,2 Mo"
                                            date="janv. 2026"
                                        />
                                        <ADSDownload
                                            href="#"
                                            label="Télécharger le formulaire de demande"
                                            fileType="PDF"
                                            fileSize="850 Ko"
                                        />
                                    </ADSGrid>
                                </ADSSection>

                                <ADSSection title="Agenda">
                                    <ADSGrid columns={{ "mobile": 1, "desktop": 2 }} gap="5">
                                        <ADSEvent
                                            href="#"
                                            date="2026-02-12"
                                            title="Conférence cybersécurité"
                                            time="14h00"
                                            location="Paris"
                                        />
                                        <ADSEvent
                                            href="#"
                                            date="2026-03-01"
                                            title="Comité d'orientation"
                                            time="10h00"
                                            location="En ligne"
                                        />
                                    </ADSGrid>
                                </ADSSection>

                                <ADSSection title="Liens utiles">
                                    <ADSLinkList
                                        items={[
                                            { "label": "Formulaires", "href": "#" },
                                            { "label": "Contacts", "href": "#" },
                                            { "label": "Partenaires", "href": "#" }
                                        ]}
                                    />
                                </ADSSection>

                                <ADSPagination currentPage={5} pageCount={12} />
                            </ADSStack>
                        </ADSContainer>
                    </ADSMain>
                </ADSPage>

                <ADSGovernmentFooter
                    organization="Ministère de la Défense"
                    columns={[
                        {
                            "title": "Le ministère",
                            "links": [
                                { "label": "Présentation", "href": "#" },
                                { "label": "Organisation", "href": "#" },
                                { "label": "Budget", "href": "#" }
                            ]
                        },
                        {
                            "title": "Démarches",
                            "links": [
                                { "label": "Formulaires", "href": "#" },
                                { "label": "Recrutement", "href": "#" }
                            ]
                        },
                        {
                            "title": "Contact",
                            "links": [
                                { "label": "Nous contacter", "href": "#" },
                                { "label": "Presse", "href": "#" }
                            ]
                        }
                    ]}
                    bottomLinks={[
                        { "label": "Mentions légales", "href": "#" },
                        { "label": "Confidentialité", "href": "#" },
                        { "label": "Accessibilité", "href": "#" }
                    ]}
                />
            </>
        )
    },
    {
        "description":
            "Page complète de portail gouvernemental composée exclusivement de composants ADS — aucun CSS local, aucune propriété de style inline : l'application décrit le contenu, ADS gère la présentation."
    }
);