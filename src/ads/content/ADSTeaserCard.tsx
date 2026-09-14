"use client";

import * as React from "react";
import { cx } from "../../tools/cx";
import { symToStr } from "tsafe/symToStr";
import "../../styles/components/ads-card.css";

export type ADSTeaserCardProps = {
    className?: string;
    style?: React.CSSProperties;
    href?: string;
    /** Small uppercase label above the title. */
    tag?: React.ReactNode;
    title?: React.ReactNode;
    description?: React.ReactNode;
    /** Label of the call-to-action link (default `"En savoir plus"`). */
    actionLabel?: string;
    /** Icon id shown in the call-to-action (default `fr-icon-arrow-right-line`). */
    actionIconId?: string;
};

/**
 * A compact teaser card used in link grids and "related" blocks — a tag, a title,
 * a short description and a call-to-action link.
 */
export const ADSTeaserCard = (props: ADSTeaserCardProps) => {
    const {
        className,
        style,
        href,
        tag,
        title,
        description,
        actionLabel = "En savoir plus",
        actionIconId = "fr-icon-arrow-right-line"
    } = props;

    const titleNode =
        href !== undefined && title !== undefined ? <a href={href}>{title}</a> : title;

    return (
        <article className={cx("ads-teaser-card", className)} style={style}>
            {tag !== undefined && <span className="ads-teaser-card__tag">{tag}</span>}
            {title !== undefined && <h3 className="ads-teaser-card__title">{titleNode}</h3>}
            {description !== undefined && (
                <p className="ads-teaser-card__description">{description}</p>
            )}
            {href !== undefined && (
                <a href={href} className="ads-teaser-card__action">
                    {actionLabel}
                    <i className={actionIconId} aria-hidden="true" />
                </a>
            )}
        </article>
    );
};

ADSTeaserCard.displayName = symToStr({ ADSTeaserCard });

export default ADSTeaserCard;