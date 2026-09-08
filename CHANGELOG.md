# Changelog

All notable changes to `@codegouvaor/react-ads` are documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/), and this
project adheres to [Semantic Versioning](https://semver.org).

> Note: the Git history before this release line belongs to the upstream
> `codegouvfr/react-dsfr` project (see [PROVENANCE.md](PROVENANCE.md)). From `0.1.0`
> onwards this changelog tracks the independent Astoria Design System release line.

## [Unreleased]

### Added

- **ADS Native Foundation — official React Native / Expo support.** New public
  entry `@codegouvaor/react-ads/native` (`src/native/`) implementing the Astoria
  Design System on React Native primitives (`View`, `Text`, `Pressable`,
  `TextInput`, `Modal`, `FlatList`, …). The native layer shares the ADS tokens
  and conventions with the web implementation, never imports the DOM/CSS stack,
  and is never pulled into the web bundle.
  - **Native tokens** — colors (light + dark), typography, spacing (`xs`–`xl`),
    radius (`sm`–`lg`/`full`), elevation (iOS shadow + Android elevation),
    dimensions (touch targets ≥ 44 pt, control heights, gutters), motion.
  - **Theme** — `ADSProvider`, `useADSTheme` with `light`/`dark`/`system` color
    scheme, token overrides and an overridable icon renderer.
  - **Primitives** — `Text`, `Heading`, `Icon`, `Divider`, `Stack`, `Container`.
  - **Actions** — `Button`, `IconButton`, `Link`.
  - **Forms** — `Input`, `TextArea`, `Checkbox`, `Radio`, `RadioGroup`,
    `Switch`, `Select`.
  - **Feedback** — `Alert`, `Badge`, `Status`, `Progress`, `Loading`.
  - **Layout / content** — `Card`, `List`, `ListItem`, `Section`, `Avatar`.
  - **Navigation primitives (graphical only, no router)** — `Header`, `TabBar`,
    `NavItem`.
  - **Government components** — `ServiceCard`, `ProcedureCard`, `DocumentCard`,
    `NotificationCard`, `IdentityBadge`, `StatusBadge`, `GovernmentBanner`
    (generic across applications).
  - **Accessibility & touch** — `accessibilityLabel`/`Hint`/`Role`/`State`,
    disabled and loading states announced to assistive technologies, thumb-sized
    touch targets.
- Runtime tests for the native layer (tokens, component rendering with a mocked
  React Native, exports, module resolution/isolation) — see
  `test/runtime/native/`.
- `examples/native/ExampleScreen.tsx` — a minimal Expo consumption example
  (demonstration only, no MyGouv logic).
- `react-native` registered as an optional peer dependency (web consumers are
  unaffected).

### Changed

- Package version bumped to `1.0.7`.
- The component CSS optimizer module map now treats `native` and `styles` as
  non-DSFR modules (neither renders DSFR component markup).
- **Breaking — `Header` reworked into the institutional header of the Republic of
  Astoria.** The `brandTop` and `operatorLogo` props are replaced by a single `identity`
  prop describing the national identity (official flag/emblem lockup as an image, with
  `alt`) and the administrative authority hosting the site (`institution`, e.g.
  `"Gouvernement"` or `"Ministère de l'Économie"`). The identity block links to the home
  page; `navigation`, `quickAccessItems` and the search props are unchanged and remain
  strictly separated from the identity. The product/portal name still lives in the
  optional `serviceTitle` / `serviceTagline` zone.
- **Breaking — `Footer`** mirrors the same institutional identity: the `brandTop` prop is
  replaced by an optional `identity` prop that falls back to the one of the `<Header />`
  when the Footer is rendered after it.
- The Header/Footer brand zone no longer renders the legacy DSFR tricolor block
  (`.fr-logo`): it displays the Astoria lockup via the new companion stylesheet
  `src/assets/astoria-identity.css` (provisional until the ADS stylesheet lands —
  [MIGRATION.md](MIGRATION.md)).
- Rebranded the package as `@codegouvaor/react-ads` (Astoria Design System — React),
  with its own version line starting at `0.1.0`.
- New root entry: generic components (`Button`, `Alert`, `Card`, …) can now be imported
  from the package root; per-component subpath imports remain available and recommended
  for granular bundles.
- CLI renamed: `react-dsfr` → `react-ads` (`react-ads optimize-css`, …).
- Repository migrated from Yarn to pnpm (`pnpm-lock.yaml`).
- Documentation (README, Storybook, publiccode.yml, contribution and governance docs)
  rewritten for the Astoria Design System.

### Added

- `src/assets/astoria-gouv.png` — official Government of Astoria identity lockup (flag/
  emblem + "République d'Astoria"), used by the Header/Footer stories and demo apps. A
  web-optimized SVG should eventually replace the raster in production.
- `src/assets/astoria-identity.css` — companion stylesheet of the Header and Footer
  institutional brand zone.
- `src/global.d.ts` now declares `*.css` modules (side-effect stylesheet imports).
- `src/ads/` — ADS design-token contracts (colors, typography, spacing, radius, elevation,
  motion, breakpoints) exposed as typed constants and CSS custom properties
  (`--ads-*`). Values are placeholders pending the official Astoria identity.
- Security policy, governance, provenance and migration documentation.
- CI: pnpm-based pipeline with lint, typecheck (build), tests, package validation,
  dependency auditing and provenance-ready publishing.

### Removed

- France-specific components and modules (MIGRATION Stage 2): `FranceConnectButton`,
  `AgentConnectButton`, `ProConnectButton`, `MonCompteProButton`, `eulerianAnalytics`, their
  dedicated assets (`agentconnect*`, `proconnect-btn.css`, `moncomptepro.css`) and their
  Storybook stories. The `react-ads optimize-css` module map and the Storybook navigation
  were updated accordingly.

### Changed

- The `Footer` no longer ships French default content: the `domains` prop defaults to an
  empty list (previously French government domains) and no licence mention is rendered when
  the `license` prop is not provided (previously an Etalab licence-ouverte notice).
  Consumers migrating from the fork must provide these props explicitly.
- Removed French demo/DSFR doc URLs and references from Storybook stories, code comments
  and default copy (consent management is now phrased around a generic data-protection
  policy).

### Deprecated

- The legacy DSFR layer (`dsfr/` assets, `fr-*` class names, `fr` namespace, `Dsfr*`
  helpers) is kept as an isolated, documented implementation layer. It will be removed in
  a single coordinated breaking release — see [MIGRATION.md](MIGRATION.md).
