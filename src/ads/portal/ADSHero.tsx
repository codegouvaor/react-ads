"use client";

import * as React from "react";
import { cx } from "../../tools/cx";
import { symToStr } from "tsafe/symToStr";
import "../../styles/components/ads-portal.css";

export type ADSHeroProps = {
    className?: string;
    style?: React.CSSProperties;
    /** Optional kicker (small uppercase label above the title). */
    kicker?: React.ReactNode;
    title?: React.ReactNode;
    subtitle?: React.ReactNode;
    /** Actions slot (buttons / links) below the subtitle. */
    actions?: React.ReactNode;
    tone?: "primary" | "subtle";
};

/**
 * The hero banner of a page — an eye-catching headline block with a kicker, a title,
 * a subtitle and optional action buttons.
 */
export const ADSHero = (props: ADSHeroProps) => {
    const { className, style, kicker, title, subtitle, actions, tone = "primary" } = props;

    return (
        <section
            className={cx("ads-hero", tone === "subtle" && "ads-hero--subtle", className)}
            data-tone={tone}
            style={style}
        >
            <div className="ads-container">
                {kicker !== undefined && <p className="ads-hero__kicker">{kicker}</p>}
                {title !== undefined && <h1 className="ads-hero__title">{title}</h1>}
                {subtitle !== undefined && <p className="ads-hero__subtitle">{subtitle}</p>}
                {actions !== undefined && <div className="ads-hero__actions">{actions}</div>}
            </div>
        </section>
    );
};

ADSHero.displayName = symToStr({ ADSHero });

export default ADSHero;