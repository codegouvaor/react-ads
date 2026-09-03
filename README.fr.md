<p align="center">
    <i>Astoria Design System — React</i>
    <br>
    <b>ADS React</b>
    <br>
    <br>
    <a href="https://github.com/codegouvaor/react-ads/actions">
      <img src="https://github.com/codegouvaor/react-ads/actions/workflows/ci.yaml/badge.svg">
    </a>
    <a href="https://www.npmjs.com/package/@codegouvaor/react-ads">
      <img src="https://img.shields.io/npm/v/@codegouvaor/react-ads?logo=npm">
    </a>
    <a href="https://bundlephobia.com/package/@codegouvaor/react-ads">
      <img src="https://img.shields.io/bundlephobia/minzip/@codegouvaor/react-ads">
    </a>
    <a href="https://github.com/codegouvaor/react-ads/blob/main/LICENSE">
      <img src="https://img.shields.io/npm/l/@codegouvaor/react-ads">
    </a>
</p>

> **ADS est le design system officiel de l'écosystème numérique de la République d'Astoria.**

`@codegouvaor/react-ads` est son implémentation React officielle : des composants React
accessibles, typés et « tree-shakable », destinés aux sites, portails et applications des
services numériques du gouvernement astorien.

> **Statut :** avant-première publique — `0.1.0`. Ce projet est un fork de la bibliothèque
> française `react-dsfr`, en cours de transformation en design system indépendant. L'état de
> la migration, ce qui provient encore du DSFR et la feuille de route sont documentés dans
> [AUDIT.md](AUDIT.md), [MIGRATION.md](MIGRATION.md) et [PROVENANCE.md](PROVENANCE.md).

## Sommaire

-   [Qu'est-ce qu'ADS ?](#quest-ce-quads-)
-   [Installation](#installation)
-   [Démarrage rapide](#démarrage-rapide)
-   [Composants](#composants)
-   [SSR / Next.js / Server Components](#ssr--nextjs--server-components)
-   [Design tokens](#design-tokens)
-   [Thème](#thème)
-   [Accessibilité](#accessibilité)
-   [Internationalisation](#internationalisation)
-   [Contribuer & développement](#contribuer--développement)
-   [Architecture du paquet](#architecture-du-paquet)
-   [Provenance & licence](#provenance--licence)
-   [Gouvernance](#gouvernance)
-   [Versions & publication](#versions--publication)

---

## Qu'est-ce qu'ADS ?

L'**Astoria Design System** (ADS) est le design system de référence des services numériques
publics de la République d'Astoria. Il définit l'identité visuelle, les composants, les
tokens et les règles d'accessibilité qui rendent les sites gouvernementaux astoriens
reconnaissables, cohérents et accessibles.

**ADS React** (`@codegouvaor/react-ads`) en est l'implémentation React officielle, pensée
pour l'écosystème React moderne :

-   **Next.js** — Pages Router et App Router, avec support SSR complet.
-   **Vite / Create React App / agnostique bundler** — usage SPA.
-   **React Server Components** — composants compatibles serveur lorsque pertinent.
-   **TypeScript** — API entièrement typée et documentée.
-   **Tree-shaking** — n'importez que ce dont vous avez besoin (imports par sous-chemin).
-   **Accessibilité** — implémentation orientée WCAG et documentation interactive.

La boîte à outils embarque aussi des helpers SSR (pas de flash blanc au rechargement),
un mode sombre persistant, une couche d'adaptation MUI optionnelle, de l'i18n et des outils
d'optimisation CSS/icônes.

## Installation

```bash
npm install @codegouvaor/react-ads
# ou
pnpm add @codegouvaor/react-ads
```

Prérequis : `react` ≥ 18. Aucune autre dépendance runtime n'est requise pour les composants
du cœur.

## Démarrage rapide

Les composants sont exportés depuis des **sous-chemins dédiés**, pour que le bundler
n'embarque que ce que vous importez (la racine du paquet exporte les helpers de tokens) :

```tsx
import { Button } from "@codegouvaor/react-ads/Button";
import { Alert } from "@codegouvaor/react-ads/Alert";
import { Card } from "@codegouvaor/react-ads/Card";
```

### 1. Charger la feuille de style

La feuille de style est livrée avec le paquet. Importez-la une seule fois depuis le point
d'entrée de votre application :

```tsx
import "@codegouvaor/react-ads/dsfr/dsfr.min.css";
```

### 2. Initialiser le runtime (SPA, Vite, CRA…)

```tsx
import { startReactDsfr } from "@codegouvaor/react-ads/spa";

startReactDsfr({
    defaultColorScheme: "system"
});
```

### 3. Utiliser les composants

```tsx
import { Button } from "@codegouvaor/react-ads/Button";

export function Example() {
    return (
        <Button iconId="ri-add-line" onClick={() => alert("Bonjour Astoria !")}>
            Nouvel enregistrement
        </Button>
    );
}
```

La [documentation interactive](https://codegouvaor.github.io/react-ads) (Storybook)
présente chaque composant, ses variantes, états et exemples de code.

## Composants

Composants génériques et accessibles, parmi lesquels :

`Accordion` · `Alert` · `Badge` · `Breadcrumb` · `Button` · `ButtonsGroup` · `CallOut` ·
`Card` · `Checkbox` · `ConsentManagement` · `Download` · `Follow` · `Footer` · `Header` ·
`Highlight` · `Input` · `LanguageSelect` · `MainNavigation` · `Modal` · `Notice` ·
`Pagination` · `Quote` · `RadioButtons` · `Range` · `SearchBar` · `SegmentedControl` ·
`Select` · `SideMenu` · `SkipLinks` · `Stepper` · `Summary` · `Table` · `Tabs` · `Tag` ·
`TagsGroup` · `Tile` · `ToggleSwitch` · `Tooltip` · `Upload` · ainsi que les composites
`blocks/` et l'ancien module de graphiques (`Chart/*`, pair optionnel
`@gouvfr/dsfr-chart`).

> Les reliquats spécifiques à la France issus du fork (`FranceConnectButton`,
> `AgentConnectButton`, `ProConnectButton`, `MonCompteProButton`, `eulerianAnalytics`) ont été
> supprimés — voir [CHANGELOG.md](CHANGELOG.md) et [MIGRATION.md](MIGRATION.md) étape 2.

## SSR / Next.js / Server Components

Le paquet n'impose pas Next.js. Les helpers SSR sont fournis dans des modules séparés.

### Next.js App Router

```tsx
// app/layout.tsx
import { DsfrHead } from "@codegouvaor/react-ads/next-appdir/DsfrHead";
import { DsfrProvider } from "@codegouvaor/react-ads/next-appdir/DsfrProvider";
```

Voir l'application de démonstration `test/integration/next-appdir` pour une configuration
complète (préchargement des polices, nonce, CSP).

### Next.js Pages Router

```tsx
import { createNextDsfrIntegrationApi } from "@codegouvaor/react-ads/next-pagesdir";
```

Voir `test/integration/next-pagesdir`.

### React Server Components

La plupart des composants sont compatibles serveur. Ceux qui nécessitent des APIs navigateur
sont marqués `"use client"` et importés via des points d'entrée client.

## Design tokens

Les fondations ADS sont introduites comme une couche indépendante afin de pouvoir thèmer
les composants sans valeurs en dur :

```css
:root {
    --ads-color-primary: …;
    --ads-color-background: …;
    --ads-radius-medium: …;
    --ads-space-4: …;
    --ads-font-family-base: …;
}
```

Voir `src/ads/` pour le contrat de tokens (couleurs, typographie, espacements, rayons,
élévations, motion, breakpoints), exposé en propriétés CSS et en constantes typées.

> ⚠️ **L'identité officielle astorienne** (couleurs, polices, logos, icônes exacts) n'est
> pas encore définie et doit venir des instances de la marque Astoria. Les valeurs de tokens
> de ce dépôt sont des **placeholders** — voir [MIGRATION.md](MIGRATION.md). En attendant,
> les composants s'affichent avec la feuille de style historique embarquée dans le paquet ;
> les classes `fr-*` et l'espace de noms `fr` restent une couche d'implémentation, renommée
> lors d'une release breaking coordonnée.

## Thème

Deux mécanismes : surcharge des variables CSS `--ads-*` (une fois livrées), et mode sombre
(`light` / `dark` / `system`) via l'initialisation du runtime et les helpers `useIsDark`.

## Accessibilité

Exigence de premier rang (cible : WCAG 2.2 AA) : navigation clavier, focus visible, motifs
ARIA, erreurs de formulaire, skip links, reduced motion. Chaque composant documente son
accessibilité dans Storybook, qui embarque les vérifications `@storybook/addon-a11y`.

## Internationalisation

Les textes intégrés (Header, Footer, consentement, Display, …) passent par un mécanisme
i18n opt-in : fournissez les traductions des langues que vous supportez et surchargez
n'importe quelle chaîne. Voir `src/i18n.ts`.

## Contribuer & développement

Voir [CONTRIBUTING.md](CONTRIBUTING.md) — et [AUDIT.md](AUDIT.md) pour l'état du code avant
toute modification structurelle.

```bash
git clone https://github.com/codegouvaor/react-ads.git
cd react-ads
pnpm install
```

| Commande                                | Rôle                                                         |
| --------------------------------------- | ------------------------------------------------------------ |
| `pnpm build`                            | Génère les assets/types et compile la bibliothèque (`dist/`) |
| `pnpm storybook`                        | Documentation interactive (serveur dev sur `:6006`)          |
| `pnpm test`                             | Tests unitaires (vitest)                                     |
| `pnpm lint:check` / `pnpm format:check` | Vérifications ESLint et Prettier                             |
| `pnpm start-next-appdir`                | Application de démo Next.js App Router (liée à `dist/`)      |

> ⚠️ La génération CSS historique (`scripts/build/*`, `src/bin/*`) consomme `@gouvfr/dsfr` > **uniquement à la compilation**. Les consommateurs du paquet ne l'installent jamais.

## Architecture du paquet

```
src/
├── fr/                # helpers de tokens (espace de noms historique, renommé avec le CSS)
├── ads/               # fondations ADS : contrats de tokens (couleurs, type, espace…)
├── <Composant>.tsx    # un module par composant — imports par sous-chemin, tree-shakable
├── next-app-router/   # helpers Next.js App Router (serveur + client)
├── next-pagesdir.tsx  # helpers Next.js Pages Router
├── mui/               # couche d'adaptation MUI optionnelle
├── bin/               # outils CLI (react-ads optimize-css, copy-static-assets, …)
└── assets/            # assets statiques livrés avec le paquet
```

## Provenance & licence

Ce projet est issu d'un fork de [`codegouvfr/react-dsfr`](https://github.com/codegouvfr/react-dsfr)
(MIT), lui-même l'intégration React du DSFR du gouvernement français. Le fork conserve
l'historique Git amont. Il est transformé — étape par étape, sans réécrire ce qui est
techniquement sain — en bibliothèque React officielle de l'**Astoria Design System**.

Lire [PROVENANCE.md](PROVENANCE.md) pour le récit honnête de cette filiation et les
obligations d'attribution. Le code est sous licence MIT (voir [LICENSE](LICENSE)).

## Gouvernance

Ce module est développé et maintenu en open source par les services numériques de la
République d'Astoria, selon la gouvernance décrite dans [GOVERNANCE.md](GOVERNANCE.md).
Pour la sécurité : [SECURITY.md](SECURITY.md).

## Versions & publication

Le paquet suit la [Semantic Versioning](https://semver.org). Les releases sont publiées
depuis `main` sur npm — voir [GOVERNANCE.md](GOVERNANCE.md) et
`.github/workflows/ci.yaml`. Les changements sont suivis dans [CHANGELOG.md](CHANGELOG.md).
