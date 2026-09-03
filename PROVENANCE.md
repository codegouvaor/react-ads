# Provenance

This section explains, honestly, where this project comes from and what has been changed.
Open-source history is not rewritten or falsified here.

## Lineage

`@codegouvaor/react-ads` is a fork of
[`codegouvfr/react-dsfr`](https://github.com/codegouvfr/react-dsfr) — the React integration
of the **DSFR** (French government's "Système de Design de l'État"). The fork keeps the full
upstream Git history (over 2,000 commits, 225+ merged PRs) up to react-dsfr v1.34.0.

-   Upstream author & main maintainer: Joseph Garrone (and the French react-dsfr community).
-   Upstream license: MIT — `Copyright (c) 2020 GitHub user u/garronej`.
-   The DSFR stylesheet itself (`@gouvfr/dsfr`, build-time dependency) is the work of the
    French government's design system team (SIG / DINUM) and is licensed MIT.

## What "fork" means here

The purpose of this repository is not to fork the DSFR _brand_, it is to reuse proven
technical work (React components, TypeScript types, SSR helpers, tests, tooling) as the
starting point of an **independent** design system for the Republic of Astoria.

The transformation is staged and documented in [AUDIT.md](AUDIT.md) (state of play) and
[MIGRATION.md](MIGRATION.md) (roadmap):

1. **Rebranding of the surface** — package name, documentation, repository metadata, CLI,
   Storybook branding (this release, `0.1.0`).
2. **Isolation of the DSFR layer** — the CSS layer (`@gouvfr/dsfr` at build time, bundled
   `dsfr/` assets, `fr-*` class names) is a documented implementation layer, consumed at
   build time only, and scheduled to be replaced by ADS-generated stylesheets.
3. **ADS foundations** — design token contracts (`src/ads/`, `--ads-*` CSS variables).
4. **Independent releases** — semantic versioning starting at `0.1.0`; no functional
   requirement on the French government's system remains at the end of the roadmap.

Nothing French was silently relabeled: any component, asset or string that still refers to
the French ecosystem (e.g. `FranceConnectButton`, French identity-provider buttons, the
Marianne font, `fr-` classes) is either (a) explicitly documented as part of the legacy
layer to be replaced, or (b) listed in [AUDIT.md](AUDIT.md) §6 as scheduled for removal.

## Attribution and license obligations

-   The MIT license of the upstream project is preserved: see [LICENSE](LICENSE) and the
    `@gouvfr/dsfr` license text shipped with the generated assets
    (`node_modules/@gouvfr/dsfr/LICENSE.md` at build time, copied into `dsfr/`).
-   Contributors to upstream react-dsfr keep authorship of their commits in the Git history.
-   When significant portions of upstream code are rewritten, the new code remains MIT and is
    credited to this repository's contributors.

## Timeline

| Date      | Event                                                                                 |
| --------- | ------------------------------------------------------------------------------------- |
| 2022–2025 | Upstream `codegouvfr/react-dsfr` development (MIT, French DSFR)                       |
| 2025–2026 | Fork created under `codegouvaor/react-ads`; pnpm migration and package rename started |
| 2026      | Rebranding, audit, ADS foundations and first independent release `0.1.0`              |

_This document will be kept up to date as the migration progresses._
