"use client";

import * as React from "react";
import { cx } from "../../tools/cx";
import { symToStr } from "tsafe/symToStr";
import "../../styles/components/ads-portal.css";
import { useOptionalADSPortal } from "./context";

export type ADSFooterColumn = {
    title: string;
    links: { label: string; href: string }[];
};

export type ADSGovernmentFooterProps = {
    className?: string;
    style?: React.CSSProperties;
    organization?: string;
    /** Link columns of the footer. */
    columns?: ADSFooterColumn[];
    /** Bottom (secondary) links. */
    bottomLinks?: { label: string; href: string }[];
    /** Bottom copyright text. Defaults to the organization name. */
    copyright?: string;
};

/**
 * The institutional government footer — a set of link columns plus a bottom bar
 * (copyright + secondary links). Reads the organization from <ADSPortal /> when
 * wrapped by it.
 */
export const ADSGovernmentFooter = (props: ADSGovernmentFooterProps) => {
    const {
        className,
        style,
        organization,
        columns = [],
        bottomLinks = [],
        copyright
    } = props;

    const portal = useOptionalADSPortal();
    const effectiveOrg = organization ?? portal?.organization ?? "";

    return (
        <footer className={cx("ads-gov-footer", className)} style={style}>
            <div className="ads-container">
                {columns.length > 0 && (
                    <div className="ads-gov-footer__cols">
                        {columns.map((col, index) => (
                            <div key={index}>
                                <h2 className="ads-gov-footer__col-title">{col.title}</h2>
                                <ul className="ads-gov-footer__col">
                                    {col.links.map((link, j) => (
                                        <li key={j}>
                                            <a href={link.href}>{link.label}</a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                )}
                <div className="ads-gov-footer__bottom">
                    <span>{copyright ?? `© ${effectiveOrg}`}</span>
                    {bottomLinks.length > 0 && (
                        <ul className="ads-gov-footer__bottom-links">
                            {bottomLinks.map((link, index) => (
                                <li key={index}>
                                    <a href={link.href}>{link.label}</a>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
        </footer>
    );
};

ADSGovernmentFooter.displayName = symToStr({ ADSGovernmentFooter });

export default ADSGovernmentFooter;