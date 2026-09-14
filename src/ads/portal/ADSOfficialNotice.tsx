"use client";

import * as React from "react";
import { cx } from "../../tools/cx";
import { symToStr } from "tsafe/symToStr";
import "../../styles/components/ads-portal.css";

export type ADSOfficialNoticeProps = {
    className?: string;
    style?: React.CSSProperties;
    children: React.ReactNode;
};

/**
 * The official notice strip shown at the very top of a government page (a legal /
 * identity disclaimer). Use it outside the header.
 */
export const ADSOfficialNotice = (props: ADSOfficialNoticeProps) => {
    const { className, style, children } = props;

    return (
        <p className={cx("ads-official-notice", className)} style={style}>
            {children}
        </p>
    );
};

ADSOfficialNotice.displayName = symToStr({ ADSOfficialNotice });

export default ADSOfficialNotice;