"use client";

import * as React from "react";
import { cx } from "../../tools/cx";
import { symToStr } from "tsafe/symToStr";
import "../../styles/components/ads-portal.css";

export type ADSNavigationItem = {
    label: string;
    href: string;
    active?: boolean;
};

export type ADSNavigationProps = {
    className?: string;
    style?: React.CSSProperties;
    items: ADSNavigationItem[];
    /** Accessible label of the navigation. */
    label?: string;
};

/**
 * A horizontal top-level navigation bar. Active items are marked with
 * `aria-current="page"` and a primary underline.
 */
export const ADSNavigation = (props: ADSNavigationProps) => {
    const { className, style, items, label = "Navigation principale" } = props;

    return (
        <nav className={cx("ads-nav", className)} style={style} aria-label={label}>
            <ul className="ads-nav__list">
                {items.map((item, index) => (
                    <li key={index}>
                        <a
                            href={item.href}
                            className="ads-nav__link"
                            aria-current={item.active ? "page" : undefined}
                        >
                            {item.label}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

ADSNavigation.displayName = symToStr({ ADSNavigation });

export default ADSNavigation;