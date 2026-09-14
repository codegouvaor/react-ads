"use client";

import * as React from "react";
import { cx } from "../../tools/cx";
import { symToStr } from "tsafe/symToStr";
import "../../styles/components/ads-typography.css";

export type ADSTextSize = "xs" | "sm" | "md" | "lg" | "xl";
export type ADSTextWeight = "regular" | "medium" | "semibold" | "bold";
export type ADSTextColor = "default" | "muted" | "primary";
export type ADSTextMargin = "none" | "top" | "bottom" | "both";
export type ADSTextAlign = "start" | "center" | "end";

export type ADSTextProps = {
    className?: string;
    style?: React.CSSProperties;
    /** HTML tag used to render the text. */
    as?: "p" | "span" | "div" | "small" | "strong" | "label";
    size?: ADSTextSize;
    weight?: ADSTextWeight;
    color?: ADSTextColor;
    margin?: ADSTextMargin;
    align?: ADSTextAlign;
    children: React.ReactNode;
};

/**
 * A typographically-controlled text element. Encapsulates font-size, line-height,
 * weight, color and margin so standard editorial text needs no inline styling.
 */
export const ADSText = (props: ADSTextProps) => {
    const {
        className,
        style,
        as = "p",
        size,
        weight,
        color = "default",
        margin = "none",
        align,
        children
    } = props;

    const Tag = as as "p";

    return (
        <Tag
            className={cx("ads-text", className)}
            data-size={size}
            data-weight={weight}
            data-color={color}
            data-margin={margin}
            data-align={align}
            style={style}
        >
            {children}
        </Tag>
    );
};

ADSText.displayName = symToStr({ ADSText });

export default ADSText;