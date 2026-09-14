"use client";

import * as React from "react";
import { cx } from "../../tools/cx";
import { symToStr } from "tsafe/symToStr";
import "../../styles/components/ads-layout.css";
import type { ADSSpacingStep } from "./ADSStack";

export type ADSGridColumns = {
    /** Column count on mobile (< 36rem). Default `1`. */
    mobile?: number;
    /** Column count on tablet (≥ 36rem). */
    tablet?: number;
    /** Column count on desktop (≥ 62rem). */
    desktop?: number;
};

export type ADSGridProps = {
    className?: string;
    style?: React.CSSProperties;
    /** Responsive column counts. */
    columns?: ADSGridColumns;
    /** Gap between cells, as a spacing token step (1–12). */
    gap?: ADSSpacingStep;
    children: React.ReactNode;
};

/**
 * A responsive CSS grid. Column counts are set per breakpoint and cascade upward
 * (mobile < tablet < desktop).
 *
 * ```tsx
 * <ADSGrid columns={{ mobile: 1, tablet: 2, desktop: 3 }} gap="6">
 *     <ADSCard /> <ADSCard /> <ADSCard />
 * </ADSGrid>
 * ```
 */
export const ADSGrid = (props: ADSGridProps) => {
    const { className, style, columns, gap, children } = props;

    const mobile = columns?.mobile ?? 1;
    const tablet = columns?.tablet ?? mobile;
    const desktop = columns?.desktop ?? tablet;

    return (
        <div
            className={cx("ads-grid", className)}
            data-cols-sm={mobile}
            data-cols-md={tablet}
            data-cols-lg={desktop}
            data-gap={gap}
            style={style}
        >
            {children}
        </div>
    );
};

ADSGrid.displayName = symToStr({ ADSGrid });

export default ADSGrid;