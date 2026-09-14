"use client";

import * as React from "react";
import { cx } from "../../tools/cx";
import { symToStr } from "tsafe/symToStr";
import "../../styles/components/ads-portal.css";
import { useOptionalADSPortal } from "./context";

export type ADSMinistryHeaderProps = {
    className?: string;
    style?: React.CSSProperties;
    organization?: string;
    homeHref?: string;
    /** Right-hand actions slot (language switch, account, …). */
    actions?: React.ReactNode;
};

/**
 * A compact ministry header — a single-line institutional strip (name + optional
 * actions). Lighter than <ADSGovernmentHeader />, for interior ministry pages or
 * services.
 */
export const ADSMinistryHeader = (props: ADSMinistryHeaderProps) => {
    const { className, style, organization, homeHref, actions } = props;

    const portal = useOptionalADSPortal();
    const effectiveOrg = organization ?? portal?.organization ?? "";
    const effectiveHref = homeHref ?? portal?.homeHref ?? "/";

    return (
        <div className={cx("ads-ministry-header", className)} style={style}>
            <a className="ads-ministry-header__brand" href={effectiveHref}>
                <span className="ads-ministry-header__name">{effectiveOrg}</span>
            </a>
            {actions !== undefined && <div className="ads-ministry-header__actions">{actions}</div>}
        </div>
    );
};

ADSMinistryHeader.displayName = symToStr({ ADSMinistryHeader });

export default ADSMinistryHeader;