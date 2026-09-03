# Migration roadmap — from react-dsfr fork to independent ADS

This document is the strategy for decoupling `@codegouvaor/react-ads` from the French DSFR
ecosystem. It complements [AUDIT.md](AUDIT.md) (the state of play) and
[PROVENANCE.md](PROVENANCE.md) (the honest lineage).

## The core problem: the stylesheet

Components emit class names (`fr-btn`, `fr-table`, …) that only exist because the build
compiles the `@gouvfr/dsfr` stylesheet and bundles it in the package (`dsfr/` assets,
`src/fr/generatedFromCss` types, `window.dsfr` runtime, `data-fr-*` hooks, Marianne fonts).
**That stylesheet is the DSFR.** Everything above it (components, SSR, tests, tooling) is
generic engineering worth keeping.

Removing `@gouvfr/dsfr` therefore means **producing an ADS stylesheet**: same class-name
architecture (or a renamed one), driven by Astoria tokens. That is the long pole of the
migration and it needs input from the Astoria brand/design owners (colors, typography,
icons). Until then, the DSFR layer is _isolated_:

-   `@gouvfr/dsfr` is a **devDependency only** (build time). Consumers never install it.
-   The bundled assets live in a dedicated, generated, clearly-labeled folder (`dsfr/`).
-   `patches/@gouvfr+dsfr+1.14.2.patch` documents the exact upstream patch applied.
-   The DSFR-origin code is not mixed into the ADS foundations (`src/ads/`).

## Target state

```text
@codegouvaor/react-ads  →  Astoria Design System  →  ADS tokens/CSS/icons/fonts/components
```

not:

```text
@codegouvaor/react-ads  →  @gouvfr/dsfr  →  French State Design System
```

## Stages

### ✅ Stage 0 — Audited (done)

[AUDIT.md](AUDIT.md): KEEP / MIGRATE / REMOVE / REFACTOR / CREATE inventory.

### ✅ Stage 1 — Surface rebranding (done, release 0.1.0)

Package name, description, repository metadata, READMEs, Storybook branding, CLI
(`react-ads`), docblocks, test fixtures, workflows. No functional change. The `fr-*` class
names and the `fr` namespace remain, documented as the legacy layer.

### 🔜 Stage 2 — France-specific removal (next release)

Remove (with their stories and assets):

-   `FranceConnectButton`, `AgentConnectButton`, `ProConnectButton`, `MonCompteProButton`
    (+ `src/assets/agentconnect*`, `proconnect*`, `moncomptepro*`, `agentconnect.css`,
    `proconnect-btn.css`, `moncomptepro.css`)
-   `src/eulerianAnalytics.ts` (French analytics vendor)

Decide separately:

-   Chart components (`src/Chart/*`, optional peer `@gouvfr/dsfr-chart`): keep only if Astoria
    needs charts backed by the legacy chart CSS, else remove.

### 🔜 Stage 3 — Consent management content

`src/consentManagement/*` logic is generic and kept. The default strings and examples are
RGPD-flavored: make the copy neutral/Astoria and keep everything i18n-able (it already is).

### 🔜 Stage 4 — ADS stylesheet (the big one, requires Astoria design input)

1. Astoria design owners produce the official tokens (colors, type, spacing, radius,
   elevation, motion, breakpoints) and identity assets (logo, favicon, fonts, icons).
2. A new stylesheet is generated from those tokens exposing `ads-*` class names (the
   build pipeline in `scripts/build/` is adapted; `@gouvfr/dsfr` is dropped from
   devDependencies; `patches/` and `dsfr/` are removed).
3. **Single coordinated breaking release** that renames, together:
    - CSS class names `fr-*` → `ads-*` (generated types + components + tools update with it);
    - the `fr` namespace (`import { fr } from "@codegouvaor/react-ads"`) → `ads`;
    - the `dsfr/` import subpaths for CSS assets → `ads/` (or package-owned paths);
    - `src/fr/` → `src/ads/` internals; `window.dsfr` runtime; `data-fr-*` DOM hooks;
    - provider/entry names (`startReactDsfr`, `DsfrProvider`, `DsfrHead`,
      `MuiDsfrThemeProvider`, `createNextDsfrIntegrationApi`, `AppWithDsfr`, …);
    - the trusted-types policy default `"react-dsfr"` → `"react-ads"` (apps must update
      their CSP headers accordingly);
    - the consent storage key prefix `"@codegouvfr/react-dsfr finalityConsent"`.
      A codemod/alias table should ship with the release notes to automate the mechanical part
      for adopters.
4. Delete the legacy layer: `@gouvfr/dsfr`, `dsfr/`, Marianne/Spectral fonts, French
   favicons, `fr.cx`, generatedFromCss rewiring.

### 🔜 Stage 5 — ADS foundations completion

`src/ads/` currently declares the token _contract_ (see below). Once official values exist,
fill them in — components consume tokens through CSS custom properties and typed constants,
never hard-coded values.

## Decisions already taken (keep these consistent)

| Topic                      | Decision                                                                                                                          |
| -------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| Package manager            | pnpm (repo + CI); integration demo apps under `test/integration/*` still install with yarn (dev only) — migrate them when touched |
| Package version line       | independent, starts at `0.1.0`                                                                                                    |
| Root entry                 | `@codegouvaor/react-ads` root exports the generic components + `fr` helpers; subpath imports remain the granular path             |
| Public API                 | no gratuitous breaking changes; the `fr`/`Dsfr*` symbol renames are grouped in the Stage-4 breaking release                       |
| CLI                        | `react-ads` (main), `copy-dsfr-to-public`, `only-include-used-icons` kept as legacy asset tools until Stage 4                     |
| Storybook docs URL         | GitHub Pages default (`codegouvaor.github.io/react-ads`), no invented domain                                                      |
| France-specific components | kept in this release, removal scheduled (Stage 2)                                                                                 |

## Guardrails

-   No telemetry, no mandatory CDN, no required SaaS.
-   No invented identity: token values stay placeholders until Astoria brand owners decide.
-   Do not silently rebrand French content — remove it or document it.
-   Validate before deleting anything: build? Storybook? tests? published package? (checklist
    in AUDIT.md §26 of the mission).
