"use client";

import * as React from "react";
import { cx } from "../../tools/cx";
import { symToStr } from "tsafe/symToStr";
import "../../styles/components/ads-card.css";
import { ADSArticleCard } from "./ADSArticleCard";
import type { ADSArticleCardProps } from "./ADSArticleCard";

export type ADSNewsListProps = {
    className?: string;
    style?: React.CSSProperties;
    items: ADSArticleCardProps[];
    /** Render the items as a horizontal 3-column grid instead of a vertical list. */
    horizontal?: boolean;
};

/**
 * A list of news / article cards.
 *
 * ```tsx
 * <ADSNewsList
 *   horizontal
 *   items={[
 *     { title: "…", description: "…", date: "12 janv. 2026", href: "/…" },
 *   ]}
 * />
 * ```
 */
export const ADSNewsList = (props: ADSNewsListProps) => {
    const { className, style, items, horizontal } = props;

    return (
        <ul
            className={cx("ads-news-list", horizontal && "ads-news-list--horizontal", className)}
            style={style}
        >
            {items.map((item, index) => (
                <li key={index}>
                    <ADSArticleCard {...item} />
                </li>
            ))}
        </ul>
    );
};

ADSNewsList.displayName = symToStr({ ADSNewsList });

export default ADSNewsList;