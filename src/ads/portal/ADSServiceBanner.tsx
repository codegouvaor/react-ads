"use client";

import * as React from "react";
import { cx } from "../../tools/cx";
import { symToStr } from "tsafe/symToStr";
import "../../styles/components/ads-portal.css";

export type ADSServiceBannerTone = "info" | "success" | "warning" | "danger";

export type ADSServiceBannerProps = {
    className?: string;
    style?: React.CSSProperties;
    tone?: ADSServiceBannerTone;
    title?: React.ReactNode;
    children: React.ReactNode;
};

const ICON_BY_TONE: Record<ADSServiceBannerTone, string> = {
    info: "fr-icon-information-line",
    success: "fr-icon-checkbox-circle-line",
    warning: "fr-icon-alarm-warning-line",
    danger: "fr-icon-error-warning-line"
};

/**
 * A service status banner (operational / incident / maintenance) with a tone icon.
 */
export const ADSServiceBanner = (props: ADSServiceBannerProps) => {
    const { className, style, tone = "info", title, children } = props;

    return (
        <div className={cx("ads-service-banner", className)} data-tone={tone} style={style} role="status">
            <i className={cx(ICON_BY_TONE[tone], "ads-service-banner__icon")} aria-hidden="true" />
            <div>
                {title !== undefined && <p className="ads-service-banner__title">{title}</p>}
                <div className="ads-service-banner__body">{children}</div>
            </div>
        </div>
    );
};

ADSServiceBanner.displayName = symToStr({ ADSServiceBanner });

export default ADSServiceBanner;