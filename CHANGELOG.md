# Changelog

All notable changes to `@codegouvaor/react-ads` are documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/), and this
project adheres to [Semantic Versioning](https://semver.org).

> Note: the Git history before this release line belongs to the upstream
> `codegouvfr/react-dsfr` project (see [PROVENANCE.md](PROVENANCE.md)). From `0.1.0`
> onwards this changelog tracks the independent Astoria Design System release line.

## [Unreleased]

### Changed

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
