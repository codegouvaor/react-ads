"use client";

import * as React from "react";
import { cx } from "../../tools/cx";
import { symToStr } from "tsafe/symToStr";
import "../../styles/components/ads-portal.css";

export type ADSBreadcrumbItem = {
    label: string;
    href?: string;
};

export type ADSBreadcrumbProps = {
    className?: string;
    style?: React.CSSProperties;
    items: ADSBreadcrumbItem[];
};

/**
 * A semantic breadcrumb navigation. The last item is the current page and is marked
 * with `aria-current="page"`.
 */
export const ADSBreadcrumb = (props: ADSBreadcrumbProps) => {
    const { className, style, items } = props;

    return (
        <nav className={cx("ads-breadcrumb", className)} style={style} aria-label="Fil d'Ariane">
            <ol className="ads-breadcrumb__list">
                {items.map((item, index) => {
                    const isLast = index === items.length - 1;

                    return (
                        <li
                            key={index}
                            className="ads-breadcrumb__item"
                            aria-current={isLast ? "page" : undefined}
                        >
                            {!isLast && item.href !== undefined ? (
                                <a href={item.href} className="ads-breadcrumb__link">
                                    {item.label}
                                </a>
                            ) : (
                                <span>{item.label}</span>
                            )}
                        </li>
                    );
                })}
            </ol>
        </nav>
    );
};

ADSBreadcrumb.displayName = symToStr({ ADSBreadcrumb });

export default ADSBreadcrumb;