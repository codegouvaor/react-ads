"use client";

import * as React from "react";
import { cx } from "../../tools/cx";
import { symToStr } from "tsafe/symToStr";
import "../../styles/components/ads-layout.css";

export type ADSColumnsProps = {
    className?: string;
    style?: React.CSSProperties;
    /** Number of equal columns (2, 3 or 4). */
    cols?: 2 | 3 | 4;
    /** Gap between columns, as a spacing token step. */
    gap?: 2 | 3 | 4 | 5 | 6 | 8 | 10 | 12;
    children: React.ReactNode;
};

/**
 * A simple equal-width multi-column layout. Each child becomes one column that
 * wraps to full width on small screens. Prefer <ADSGrid /> for per-breakpoint counts;
 * use <ADSColumns /> for a fixed number of side-by-side blocks.
 */
export const ADSColumns = (props: ADSColumnsProps) => {
    const { className, style, cols, gap, children } = props;

    return (
        <div className={cx("ads-columns", className)} data-cols={cols} data-gap={gap} style={style}>
            {React.Children.map(children, (child, index) => (
                <div key={index} className="ads-columns__item">
                    {child}
                </div>
            ))}
        </div>
    );
};

ADSColumns.displayName = symToStr({ ADSColumns });

export default ADSColumns;