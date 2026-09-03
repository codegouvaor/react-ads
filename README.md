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

> **ADS is the official design system for the digital ecosystem of the Republic of Astoria.**

`@codegouvaor/react-ads` is its official React implementation: accessible, typed,
tree-shakable React components for the web services, portals and applications of the
Astoria government.

> **Status:** public preview — `0.1.0`. The project is a fork of the French `react-dsfr`
> library and is being transformed into an independent design system. The migration state,
> what still comes from the upstream DSFR stylesheet, and the roadmap are documented in
> [AUDIT.md](AUDIT.md), [MIGRATION.md](MIGRATION.md) and [PROVENANCE.md](PROVENANCE.md).

## Table of contents

-   [What is ADS?](#what-is-ads)
-   [Installation](#installation)
-   [Quick start](#quick-start)
-   [Components](#components)
-   [SSR / Next.js / Server Components](#ssr--nextjs--server-components)
-   [Design tokens](#design-tokens)
-   [Theming](#theming)
-   [Accessibility](#accessibility)
-   [Internationalization](#internationalization)
-   [Contributing & development](#contributing--development)
-   [Architecture & package layout](#architecture--package-layout)
-   [Provenance & licensing](#provenance--licensing)
-   [Governance](#governance)
-   [Releases & versioning](#releases--versioning)

---

## What is ADS?

The **Astoria Design System** (ADS) is the reference design system for the digital public
services of the Republic of Astoria. It defines the visual identity, components, tokens and
accessibility rules that make Astorian government websites recognizable, consistent and
accessible.

**ADS React** (`@codegouvaor/react-ads`) is the official React implementation of that system.
It is designed for the modern React ecosystem:

-   **Next.js** — Pages Router and App Router, with full SSR support.
-   **Vite / Create React App / bundler-agnostic** SPA usage.
-   **React Server Components** — components are server-component safe where relevant.
-   **TypeScript** — fully typed, documented API.
-   **Tree-shaking** — cherry-pick the components you import (subpath imports), no monolithic bundle.
-   **Accessibility** — WCAG-oriented implementation and interactive docs with a11y stories.

The toolkit also ships SSR helpers (no white flash on reload, color scheme persistence),
an optional MUI adaptation layer, i18n, and opt-in CSS/asset optimization tools.

## Installation

```bash
npm install @codegouvaor/react-ads
# or
pnpm add @codegouvaor/react-ads
```

Peer requirements: `react` ≥ 18 (and `react-dom` for the DOM entry points). No other
runtime dependency is required for the core components.

> The package currently bundles its stylesheet assets inside the package (see
> [Quick start](#quick-start)). During the transition the stylesheet is the legacy DSFR CSS
> layer — see [Design tokens](#design-tokens) and [MIGRATION.md](MIGRATION.md).

## Quick start

```tsx
import { Button, Alert, Card } from "@codegouvaor/react-ads";
```

Wait — components are exported from dedicated **subpaths** so that bundlers only ship what
you import (the package root exports the token helpers, see below):

```tsx
import { Button } from "@codegouvaor/react-ads/Button";
import { Alert } from "@codegouvaor/react-ads/Alert";
import { Card } from "@codegouvaor/react-ads/Card";
```

### 1. Load the stylesheet

The stylesheet is shipped with the package. Import it once, from your app entry point:

```tsx
import "@codegouvaor/react-ads/dsfr/dsfr.min.css";
```

### 2. Initialize the runtime (SPA, Vite, CRA…)

The runtime handles color scheme (light/dark/system), the no-flash SSR logic and the
accessibility behaviors of the components:

```tsx
import { startReactDsfr } from "@codegouvaor/react-ads/spa";

startReactDsfr({
    defaultColorScheme: "system"
});
```

### 3. Use the components

```tsx
import { Button } from "@codegouvaor/react-ads/Button";

export function Example() {
    return (
        <Button iconId="ri-add-line" onClick={() => alert("Hello Astoria!")}>
            New record
        </Button>
    );
}
```

See the [interactive documentation](https://codegouvaor.github.io/react-ads) (Storybook)
for every component, its variants, states and code samples.

## Components

The library implements generic, accessible components, among which:

`Accordion` · `Alert` · `Badge` · `Breadcrumb` · `Button` · `ButtonsGroup` · `CallOut` ·
`Card` · `Checkbox` · `ConsentManagement` · `Download` · `Follow` · `Footer` · `Header` ·
`Highlight` · `Input` · `LanguageSelect` · `MainNavigation` · `Modal` · `Notice` ·
`Pagination` · `Quote` · `RadioButtons` · `Range` · `SearchBar` · `SegmentedControl` ·
`Select` · `SideMenu` · `SkipLinks` · `Stepper` · `Summary` · `Table` · `Tabs` · `Tag` ·
`TagsGroup` · `Tile` · `ToggleSwitch` · `Tooltip` · `Upload` · plus `blocks/` composites and
the legacy chart components (`Chart/*`, optional `@gouvfr/dsfr-chart` peer).

> **Transition note:** a few components are France-specific leftovers from the fork
> (`FranceConnectButton`, `AgentConnectButton`, `ProConnectButton`, `MonCompteProButton`,
> `eulerianAnalytics`). They are scheduled for removal — see [AUDIT.md](AUDIT.md) §6.

## SSR / Next.js / Server Components

The package does not require Next.js. SSR helpers are provided as separate subpath modules.

### Next.js App Router

```tsx
// app/layout.tsx
import { DsfrHead } from "@codegouvaor/react-ads/next-appdir/DsfrHead";
import { DsfrProvider } from "@codegouvaor/react-ads/next-appdir/DsfrProvider";
```

`DsfrProvider` renders the runtime for client components and `DsfrHead` handles fonts,
favicon and color-scheme on the server without white flash on hydration. See the
`test/integration/next-appdir` demo app for a full setup (fonts preloading, nonce, CSP).

### Next.js Pages Router

```tsx
import { createNextDsfrIntegrationApi } from "@codegouvaor/react-ads/next-pagesdir";
```

See `test/integration/next-pagesdir`.

### React Server Components

Most components are server-component safe. Components that need browser APIs are labeled
`"use client"` and are imported through client entry points, keeping the server bundle clean.

## Design tokens

ADS foundations are being introduced as an independent layer so components can be themed
without hard-coded values:

```css
:root {
    --ads-color-primary: …;
    --ads-color-background: …;
    --ads-radius-medium: …;
    --ads-space-4: …;
    --ads-font-family-base: …;
}
```

See `src/ads/` for the token contract (colors, typography, spacing, radius, elevation,
motion, breakpoints) exposed both as CSS custom properties and as typed constants.

> ⚠️ The **official Astoria identity** (exact colors, fonts, logos, icons) is not defined
> yet and must come from the Astoria brand owners. Token values in this repository are
> **placeholders** — see [MIGRATION.md](MIGRATION.md) step "ADS foundations". Meanwhile the
> components still render with the legacy stylesheet bundled in the package; the `fr-*`
> class names and the `fr` token namespace remain as an implementation layer and will be
> renamed in a single coordinated breaking release.

## Theming

Two mechanisms:

-   **CSS variables**: override `--ads-*` custom properties (once shipped) or the underlying
    stylesheet variables to restyle globally without touching components.
-   **Dark mode**: components adapt to the active color scheme (`light` / `dark` / `system`)
    through the runtime initialization and the `useIsDark` helpers.

## Accessibility

Accessibility is a first-class requirement (target: WCAG 2.2 AA):

-   keyboard navigation, visible focus, ARIA patterns, form errors, skip links;
-   reduced motion support;
-   every component story documents its accessibility properties;
-   the Storybook runs with the `@storybook/addon-a11y` checks.

Automated a11y checks and visual regression are on the CI roadmap — see
[.github/workflows/ci.yaml](.github/workflows/ci.yaml) and [MIGRATION.md](MIGRATION.md).

## Internationalization

Built-in texts (Header, Footer, consent management, Display, …) are translated with an
opt-in i18n mechanism: provide translations for the languages you support and override any
string. See `src/i18n.ts` and the stories of the `Display` component.

## Contributing & development

See [CONTRIBUTING.md](CONTRIBUTING.md) — and [AUDIT.md](AUDIT.md) if you want the state of
the codebase before making structural changes.

```bash
git clone https://github.com/codegouvaor/react-ads.git
cd react-ads
pnpm install
```

| Command                                 | Purpose                                                 |
| --------------------------------------- | ------------------------------------------------------- |
| `pnpm build`                            | Generate assets/types and compile the library (`dist/`) |
| `pnpm storybook`                        | Interactive documentation (dev server on `:6006`)       |
| `pnpm test`                             | Unit tests (vitest)                                     |
| `pnpm lint:check` / `pnpm format:check` | ESLint and Prettier checks                              |
| `pnpm start-next-appdir`                | Run the Next.js App Router demo app (linked to `dist/`) |

> ⚠️ The legacy CSS generation step (`scripts/build/*`, `src/bin/*`) consumes
> `@gouvfr/dsfr` **at build time only**. Consumers never install it.

## Architecture & package layout

```
src/
├── fr/                # token helpers (legacy namespace, renamed with the CSS layer)
├── ads/               # ADS foundations: token contracts (colors, type, space, …)
├── <Component>.tsx    # one module per component — subpath imports, tree-shakable
├── next-app-router/   # Next.js App Router helpers (server + client)
├── next-pagesdir.tsx  # Next.js Pages Router helpers
├── mui/               # optional MUI adaptation layer
├── bin/               # CLI tools (react-ads optimize-css, copy-static-assets, …)
└── assets/            # static assets shipped with the package
```

Component usage follows `import { X } from "@codegouvaor/react-ads/X"` — bundlers then
only include the modules you import.

## Provenance & licensing

This project started as a fork of [`codegouvfr/react-dsfr`](https://github.com/codegouvfr/react-dsfr)
(MIT), itself the React integration of the French government's DSFR. The fork retains the
upstream Git history. It is being transformed — step by step, without rewriting what is
technically sound — into the official React library of the **Astoria Design System**.

Read [PROVENANCE.md](PROVENANCE.md) for the honest account of this lineage and the
attribution obligations that follow. The code is MIT licensed (see [LICENSE](LICENSE)).

## Governance

This module is developed and maintained in the open by the digital services of the Republic
of Astoria, under the governance described in [GOVERNANCE.md](GOVERNANCE.md). Security
matters: see [SECURITY.md](SECURITY.md).

## Releases & versioning

The package follows [Semantic Versioning](https://semver.org). Releases are cut from the
`main` branch and published to npm — see [GOVERNANCE.md](GOVERNANCE.md) and
`.github/workflows/ci.yaml`. Changes are tracked in [CHANGELOG.md](CHANGELOG.md).
