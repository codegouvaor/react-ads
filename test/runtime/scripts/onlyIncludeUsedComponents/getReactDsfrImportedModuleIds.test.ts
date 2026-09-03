import { it, expect, describe } from "vitest";
import {
    getReactDsfrImportedModuleIds,
    ROOT_IMPORT_MODULE_ID
} from "../../../../src/bin/only-include-css-of-used-components";

describe("getReactDsfrImportedModuleIds", () => {
    it("detects default and named imports from a component subpath", () => {
        const rawFileContent = `
            import { Button } from "@codegouvaor/react-ads/Button";
            import Badge from "@codegouvaor/react-ads/Badge";
        `;

        expect(getReactDsfrImportedModuleIds({ rawFileContent }).sort()).toStrictEqual([
            "Badge",
            "Button"
        ]);
    });

    it("flags imports of the package root (main entry), whatever the import form", () => {
        const rawFileContent = `
            import { fr } from "@codegouvaor/react-ads";
            import { Button, Alert } from "@codegouvaor/react-ads";
            const { Card } = await import("@codegouvaor/react-ads");
            const { Header } = require("@codegouvaor/react-ads");
        `;

        // A root import can pull any component: it must be reported (so that the caller
        // can fall back to including every component), not silently dropped.
        expect(getReactDsfrImportedModuleIds({ rawFileContent })).toStrictEqual([
            ROOT_IMPORT_MODULE_ID
        ]);
    });

    it("detects deep imports and normalizes them to their module", () => {
        const rawFileContent = `
            import { useIsModalOpen } from "@codegouvaor/react-ads/Modal/useIsModalOpen";
            import { createModal } from "@codegouvaor/react-ads/Modal";
            const { Header } = await import("@codegouvaor/react-ads/Header/index");
            const x = require("@codegouvaor/react-ads/Tabs.js");
        `;

        expect(getReactDsfrImportedModuleIds({ rawFileContent }).sort()).toStrictEqual([
            "Header",
            "Modal",
            "Tabs"
        ]);
    });

    it("keeps two segments for blocks and three for dsfr asset paths", () => {
        const rawFileContent = `
            import { PasswordInput } from "@codegouvaor/react-ads/blocks/PasswordInput";
            import "@codegouvaor/react-ads/dsfr/component/table/table.min.css";
            import "@codegouvaor/react-ads/dsfr/utility/colors/colors.min.css";
        `;

        expect(getReactDsfrImportedModuleIds({ rawFileContent }).sort()).toStrictEqual([
            "blocks/PasswordInput",
            "dsfr/component/table",
            "dsfr/utility/colors"
        ]);
    });

    it("returns no module for files that do not use react-ads", () => {
        const rawFileContent = `
            import { useState } from "react";
            import { z } from "zod";
        `;

        expect(getReactDsfrImportedModuleIds({ rawFileContent })).toStrictEqual([]);
    });
});

describe("getReactDsfrImportedModuleIds, non import occurrences", () => {
    it("ignores urls and comments that merely mention the package", () => {
        const rawFileContent = `
            // see https://www.npmjs.com/package/@codegouvaor/react-ads/v/1.32.5
            <link rel="stylesheet" href="https://unpkg.com/@codegouvaor/react-ads/dist/dsfr/dsfr.min.css" />
            /* @codegouvaor/react-ads/Header is not imported here */
        `;

        expect(getReactDsfrImportedModuleIds({ rawFileContent })).toStrictEqual([]);
    });

    it("still detects the import when it sits next to a mention", () => {
        const rawFileContent = `
            // https://www.npmjs.com/package/@codegouvaor/react-ads/v/1.32.5
            import { Button } from "@codegouvaor/react-ads/Button";
        `;

        expect(getReactDsfrImportedModuleIds({ rawFileContent })).toStrictEqual(["Button"]);
    });

    it("detects @import of a stylesheet", () => {
        expect(
            getReactDsfrImportedModuleIds({
                "rawFileContent": `@import "@codegouvaor/react-ads/dsfr/component/table/table.min.css";`
            })
        ).toStrictEqual(["dsfr/component/table"]);
    });
});
