"use client";

import * as React from "react";
import { cx } from "../../tools/cx";
import { symToStr } from "tsafe/symToStr";
import "../../styles/components/ads-card.css";

export type ADSLinkListItem = {
    label: string;
    href: string;
    description?: string;
};

export type ADSLinkListProps = {
    className?: string;
    style?: React.CSSProperties;
    /** Optional heading rendered above the list. */
    title?: React.ReactNode;
    items: ADSLinkListItem[];
};

/**
 * A bordered list of links, each with an optional description and a trailing arrow —
 * the classic "related links / practical info" block of a government page.
 */
export const ADSLinkList = (props: ADSLinkListProps) => {
    const { className, style, title, items } = props;

    return (
        <div className={cx("ads-link-list-wrap", className)} style={style}>
            {title !== undefined && (
                <h2 className="ads-link-list__title">{title}</h2>
            )}
            <ul className="ads-link-list">
                {items.map((item, index) => (
                    <li key={index} className="ads-link-list__item">
                        <a href={item.href} className="ads-link-list__link">
                            <span>
                                {item.label}
                                {item.description !== undefined && (
                                    <span className="ads-link-list__description">
                                        {item.description}
                                    </span>
                                )}
                            </span>
                            <i className="fr-icon-arrow-right-line" aria-hidden="true" />
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

ADSLinkList.displayName = symToStr({ ADSLinkList });

export default ADSLinkList;