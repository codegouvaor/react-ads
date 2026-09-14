"use client";

import * as React from "react";
import { cx } from "../../tools/cx";
import { symToStr } from "tsafe/symToStr";
import "../../styles/components/ads-portal.css";
import { useOptionalADSPortal } from "./context";

export type ADSGovernmentHeaderProps = {
    className?: string;
    style?: React.CSSProperties;
    /** Overrides the organization name from <ADSPortal /> when used standalone. */
    organization?: string;
    /** Optional logo element (image). */
    logo?: React.ReactNode;
    /** Link target of the brand / home link. */
    homeHref?: string;
    /** Navigation slot (e.g. <ADSNavigation />). */
    children?: React.ReactNode;
};

/**
 * The institutional government header — a sticky bar with the organization brand
 * (logo + name + tagline) and an optional navigation slot. Reads its identity from
 * <ADSPortal /> when wrapped by it.
 */
export const ADSGovernmentHeader = (props: ADSGovernmentHeaderProps) => {
    const { className, style, organization, logo, homeHref, children } = props;

    const portal = useOptionalADSPortal();
    const effectiveOrg = organization ?? portal?.organization ?? "";
    const effectiveHref = homeHref ?? portal?.homeHref ?? "/";

    return (
        <header className={cx("ads-gov-header", className)} style={style}>
            <div className="ads-gov-header__inner ads-container">
                <a className="ads-gov-header__brand" href={effectiveHref}>
                    {logo !== undefined && (
                        <span className="ads-gov-header__logo">{logo}</span>
                    )}
                    <span className="ads-gov-header__title">
                        <span className="ads-gov-header__name">{effectiveOrg}</span>
                        {portal?.organizationShort !== undefined && (
                            <span className="ads-gov-header__tagline">
                                {portal.organizationShort}
                            </span>
                        )}
                    </span>
                </a>
                {children !== undefined && (
                    <nav className="ads-gov-header__nav" aria-label="Navigation principale">
                        {children}
                    </nav>
                )}
            </div>
        </header>
    );
};

ADSGovernmentHeader.displayName = symToStr({ ADSGovernmentHeader });

export default ADSGovernmentHeader;