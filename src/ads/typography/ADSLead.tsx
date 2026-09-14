"use client";

import * as React from "react";
import { cx } from "../../tools/cx";
import { symToStr } from "tsafe/symToStr";
import "../../styles/components/ads-typography.css";

export type ADSLeadProps = {
    className?: string;
    style?: React.CSSProperties;
    children: React.ReactNode;
};

/**
 * A section introduction paragraph — larger, muted and width-capped for readability.
 */
export const ADSLead = (props: ADSLeadProps) => {
    const { className, style, children } = props;

    return (
        <p className={cx("ads-lead", className)} style={style}>
            {children}
        </p>
    );
};

ADSLead.displayName = symToStr({ ADSLead });

export default ADSLead;