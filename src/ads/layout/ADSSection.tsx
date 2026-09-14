"use client";

import * as React from "react";
import { cx } from "../../tools/cx";
import { symToStr } from "tsafe/symToStr";
import "../../styles/components/ads-layout.css";

export type ADSSectionTone = "default" | "subtle";

export type ADSSectionProps = {
    className?: string;
    style?: React.CSSProperties;
    /** Optional background tone. `subtle` uses the muted surface. */
    tone?: ADSSectionTone;
    /** Optional section title rendered as a heading above the content. */
    title?: React.ReactNode;
    /** Optional short description under the title. */
    subtitle?: React.ReactNode;
    /** Optional action slot on the right of the section header. */
    action?: React.ReactNode;
    /** Heading level used for `title` (default `2`). */
    titleLevel?: 1 | 2 | 3 | 4 | 5 | 6;
    children: React.ReactNode;
};

/**
 * A vertical rhythm section of the page, optionally with a header (title + subtitle +
 * action) and a subtle background.
 */
export const ADSSection = (props: ADSSectionProps) => {
    const { className, style, tone = "default", title, subtitle, action, titleLevel = 2, children } =
        props;

    const HeadingTag = `h${titleLevel}` as "h2";

    return (
        <section className={cx("ads-section", className)} data-tone={tone} style={style}>
            {(title !== undefined || action !== undefined) && (
                <div className="ads-section__header">
                    <div>
                        {title !== undefined && (
                            <HeadingTag className="ads-section__title">{title}</HeadingTag>
                        )}
                        {subtitle !== undefined && (
                            <p className="ads-section__subtitle">{subtitle}</p>
                        )}
                    </div>
                    {action !== undefined && <div>{action}</div>}
                </div>
            )}
            {children}
        </section>
    );
};

ADSSection.displayName = symToStr({ ADSSection });

export default ADSSection;