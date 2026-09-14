"use client";

import * as React from "react";
import { cx } from "../../tools/cx";
import { symToStr } from "tsafe/symToStr";
import "../../styles/components/ads-portal.css";
import { ADSPortalProvider } from "./context";

export type ADSPortalProps = {
    className?: string;
    style?: React.CSSProperties;
    /** Name of the institution / ministry (used by header, footer and metadata). */
    organization: string;
    /** Optional short name (e.g. acronym) for compact contexts. */
    organizationShort?: string;
    /** Default link target of the brand / home links. */
    homeHref?: string;
    /** Document language (default `"fr"`). */
    lang?: string;
    children: React.ReactNode;
};

/**
 * The government portal shell. It provides the institutional identity (organization
 * name, home link, language) to the header, footer and hero children through context,
 * and renders a full-height portal wrapper.
 *
 * ```tsx
 * <ADSPortal organization="Ministère de la Défense">
 *     <ADSGovernmentHeader />
 *     <ADSPage>…</ADSPage>
 *     <ADSGovernmentFooter />
 * </ADSPortal>
 * ```
 */
export const ADSPortal = (props: ADSPortalProps) => {
    const {
        className,
        style,
        organization,
        organizationShort,
        homeHref = "/",
        lang = "fr",
        children
    } = props;

    return (
        <ADSPortalProvider value={{ organization, organizationShort, homeHref }}>
            <div className={cx("ads-portal", className)} lang={lang} style={style}>
                {children}
            </div>
        </ADSPortalProvider>
    );
};

ADSPortal.displayName = symToStr({ ADSPortal });

export default ADSPortal;