"use client";

import * as React from "react";
import { cx } from "../../tools/cx";
import { symToStr } from "tsafe/symToStr";
import "../../styles/components/ads-layout.css";

export type ADSSpacingStep = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

export type ADSStackAlign = "start" | "center" | "end" | "stretch";

export type ADSStackProps = {
    className?: string;
    style?: React.CSSProperties;
    /** Vertical gap between children, as a spacing token step (1–12). */
    gap?: ADSSpacingStep;
    /** Cross-axis (horizontal) alignment. */
    align?: ADSStackAlign;
    /** Wraps children in a semantic `list` / `ul` when set to `"list"`. */
    as?: "div" | "section" | "aside";
    children: React.ReactNode;
};

/**
 * A vertical flex stack with a consistent spacing gap — the default way to lay out
 * blocks of content one under another.
 *
 * ```tsx
 * <ADSStack gap="8">
 *     <ADSHeading level={1}>…</ADSHeading>
 *     <ADSGrid …>…</ADSGrid>
 * </ADSStack>
 * ```
 */
export const ADSStack = (props: ADSStackProps) => {
    const { className, style, gap, align = "stretch", as = "div", children } = props;

    const Tag = as as "div";

    return (
        <Tag
            className={cx("ads-stack", className)}
            data-gap={gap}
            data-align={align}
            style={style}
        >
            {children}
        </Tag>
    );
};

ADSStack.displayName = symToStr({ ADSStack });

export default ADSStack;