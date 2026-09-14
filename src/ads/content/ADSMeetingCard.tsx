"use client";

import * as React from "react";
import { cx } from "../../tools/cx";
import { symToStr } from "tsafe/symToStr";
import "../../styles/components/ads-card.css";
import { ADSEvent } from "./ADSEvent";

export type ADSMeetingCardProps = {
    className?: string;
    style?: React.CSSProperties;
    href?: string;
    title?: React.ReactNode;
    /** Start date (Date or ISO string). */
    date: string | Date;
    time?: string;
    location?: string;
    /** Number of attendees / registration info. */
    attendees?: string;
};

/**
 * A meeting / committee card, built on top of the event block with an optional
 * attendees line — used for council meetings, public consultations, etc.
 */
export const ADSMeetingCard = (props: ADSMeetingCardProps) => {
    const { className, style, attendees, ...eventProps } = props;

    return (
        <div className={cx("ads-meeting-card", className)} style={style}>
            <ADSEvent {...eventProps} />
            {attendees !== undefined && <p className="ads-meeting-card__attendees">{attendees}</p>}
        </div>
    );
};

ADSMeetingCard.displayName = symToStr({ ADSMeetingCard });

export default ADSMeetingCard;