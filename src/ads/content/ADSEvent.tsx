"use client";

import * as React from "react";
import { cx } from "../../tools/cx";
import { symToStr } from "tsafe/symToStr";
import "../../styles/components/ads-card.css";

const MONTHS_FR = [
    "janv.",
    "févr.",
    "mars",
    "avr.",
    "mai",
    "juin",
    "juil.",
    "août",
    "sept.",
    "oct.",
    "nov.",
    "déc."
];

function formatDate(date: string | Date): { day: string; month: string; full: string } {
    const d = typeof date === "string" ? new Date(date) : date;
    const day = String(d.getDate()).padStart(2, "0");
    const month = MONTHS_FR[d.getMonth()];
    const full = `${day} ${month} ${d.getFullYear()}`;
    return { day, month, full };
}

export type ADSEventProps = {
    className?: string;
    style?: React.CSSProperties;
    href?: string;
    title?: React.ReactNode;
    /** Start date (Date or ISO string). */
    date: string | Date;
    time?: string;
    location?: string;
};

/**
 * An agenda event — a day/month date block on the left and the event title,
 * time and location on the right.
 */
export const ADSEvent = (props: ADSEventProps) => {
    const { className, style, href, title, date, time, location } = props;

    const { day, month, full } = formatDate(date);

    const titleNode =
        href !== undefined && title !== undefined ? <a href={href}>{title}</a> : title;

    return (
        <article className={cx("ads-event", className)} style={style}>
            <span className="ads-event__date" aria-hidden="true">
                <span className="ads-event__date-day">{day}</span>
                <span className="ads-event__date-month">{month}</span>
            </span>
            <div className="ads-event__body">
                {title !== undefined && <h3 className="ads-event__title">{titleNode}</h3>}
                {(time !== undefined || location !== undefined) && (
                    <div className="ads-event__meta">
                        <time dateTime={full}>{time ?? full}</time>
                        {location !== undefined && (
                            <span>
                                <i className="fr-icon-map-pin-2-line" aria-hidden="true" />
                                {location}
                            </span>
                        )}
                    </div>
                )}
            </div>
        </article>
    );
};

ADSEvent.displayName = symToStr({ ADSEvent });

export default ADSEvent;