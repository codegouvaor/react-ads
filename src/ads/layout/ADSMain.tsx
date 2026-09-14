"use client";

import * as React from "react";
import { cx } from "../../tools/cx";
import { symToStr } from "tsafe/symToStr";
import "../../styles/components/ads-layout.css";

export type ADSMainProps = {
    className?: string;
    style?: React.CSSProperties;
    /** Sets the skip-link target id (`id`). Default: `"contenu"`. */
    id?: string;
    children: React.ReactNode;
};

/**
 * The semantic `<main>` landmark of a page. It grows to push the footer down and
 * carries the default `id="contenu"` that the skip-link points to.
 */
export const ADSMain = (props: ADSMainProps) => {
    const { className, style, id = "contenu", children } = props;

    return (
        <main id={id} className={cx("ads-main", className)} style={style}>
            {children}
        </main>
    );
};

ADSMain.displayName = symToStr({ ADSMain });

export default ADSMain;