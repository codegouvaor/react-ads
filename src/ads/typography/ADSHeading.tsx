"use client";

import * as React from "react";
import { cx } from "../../tools/cx";
import { symToStr } from "tsafe/symToStr";
import "../../styles/components/ads-typography.css";

export type ADSHeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;

export type ADSHeadingProps = {
    className?: string;
    style?: React.CSSProperties;
    /** Semantic heading level (1–6), drives the tag and the default size. */
    level: ADSHeadingLevel;
    /** Optional explicit size override (heading scale 1–6). */
    size?: ADSHeadingLevel;
    children: React.ReactNode;
};

/**
 * A semantic heading. The tag (`h1`…`h6`) and the default font size follow `level`,
 * keeping the page hierarchy correct for assistive technologies without any styling
 * code in the application.
 *
 * ```tsx
 * <ADSHeading level={1}>Ministère de la Défense</ADSHeading>
 * ```
 */
export const ADSHeading = (props: ADSHeadingProps) => {
    const { className, style, level, size, children } = props;

    const Tag = `h${level}` as "h1";
    const effectiveSize = size ?? level;

    return (
        <Tag className={cx("ads-heading", className)} data-level={level} data-size={effectiveSize} style={style}>
            {children}
        </Tag>
    );
};

ADSHeading.displayName = symToStr({ ADSHeading });

export default ADSHeading;