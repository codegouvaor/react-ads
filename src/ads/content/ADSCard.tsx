"use client";

import * as React from "react";
import { cx } from "../../tools/cx";
import { symToStr } from "tsafe/symToStr";
import "../../styles/components/ads-card.css";

export type ADSCardVariant = "default" | "flat";
export type ADSCardTone = "default" | "subtle";

export type ADSCardProps = {
    className?: string;
    style?: React.CSSProperties;
    /** Renders the title as a link when provided. */
    href?: string;
    title?: React.ReactNode;
    description?: React.ReactNode;
    /** Optional media rendered above the card body (image / figure). */
    media?: React.ReactNode;
    /** Optional tag/kicker shown above the title. */
    tag?: React.ReactNode;
    /** Slot rendered below the description (e.g. an action link). */
    footer?: React.ReactNode;
    variant?: ADSCardVariant;
    tone?: ADSCardTone;
    children?: React.ReactNode;
};

/**
 * The base government card — a surfaced block with an optional title, description,
 * media, tag and footer. The whole card receives focus styling when its link is
 * focused (focus-within).
 */
export const ADSCard = (props: ADSCardProps) => {
    const {
        className,
        style,
        href,
        title,
        description,
        media,
        tag,
        footer,
        variant = "default",
        tone = "default",
        children
    } = props;

    const titleNode =
        href !== undefined && title !== undefined ? (
            <a href={href}>{title}</a>
        ) : (
            title
        );

    return (
        <article
            className={cx("ads-card", className)}
            data-variant={variant}
            data-tone={tone}
            style={style}
        >
            {media !== undefined && <div className="ads-card__media">{media}</div>}
            {tag !== undefined && <span className="ads-card__tag">{tag}</span>}
            {title !== undefined && <h3 className="ads-card__title">{titleNode}</h3>}
            {description !== undefined && (
                <p className="ads-card__description">{description}</p>
            )}
            {children}
            {footer !== undefined && <div className="ads-card__footer">{footer}</div>}
        </article>
    );
};

ADSCard.displayName = symToStr({ ADSCard });

export default ADSCard;