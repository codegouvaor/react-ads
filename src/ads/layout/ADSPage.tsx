"use client";

import * as React from "react";
import { cx } from "../../tools/cx";
import { symToStr } from "tsafe/symToStr";
import "../../styles/components/ads-layout.css";

export type ADSPageProps = {
    className?: string;
    style?: React.CSSProperties;
    children: React.ReactNode;
};

/**
 * The page shell — a full-height flex column that keeps the main content growing
 * and the footer pinned to the bottom. Use it once at the root of a page.
 *
 * ```tsx
 * <ADSPage>
 *     <ADSGovernmentHeader organization="Ministère de la Défense" />
 *     <ADSMain>…</ADSMain>
 *     <ADSGovernmentFooter organization="Ministère de la Défense" />
 * </ADSPage>
 * ```
 */
export const ADSPage = (props: ADSPageProps) => {
    const { className, style, children } = props;

    return (
        <div className={cx("ads-page", className)} style={style}>
            {children}
        </div>
    );
};

ADSPage.displayName = symToStr({ ADSPage });

export default ADSPage;