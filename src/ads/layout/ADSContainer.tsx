"use client";

import * as React from "react";
import { cx } from "../../tools/cx";
import { symToStr } from "tsafe/symToStr";
import "../../styles/components/ads-layout.css";

export type ADSContainerSize = "default" | "wide" | "narrow";

export type ADSContainerProps = {
    className?: string;
    style?: React.CSSProperties;
    /**
     * Max content width.
     * - `default`: 75rem (coherent with the ADS xl breakpoint)
     * - `wide`: 80rem
     * - `narrow`: 52rem (editorial reading width)
     */
    size?: ADSContainerSize;
    children: React.ReactNode;
};

/**
 * The centered, width-capped column that most page content lives in. Use it to wrap
 * a page section, a hero, a grid, etc.
 *
 * ```tsx
 * <ADSContainer size="wide">…</ADSContainer>
 * ```
 */
export const ADSContainer = (props: ADSContainerProps) => {
    const { className, style, size = "default", children } = props;

    return (
        <div className={cx("ads-container", className)} data-size={size} style={style}>
            {children}
        </div>
    );
};

ADSContainer.displayName = symToStr({ ADSContainer });

export default ADSContainer;