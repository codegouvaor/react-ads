"use client";

import * as React from "react";
import { cx } from "../../tools/cx";
import { symToStr } from "tsafe/symToStr";
import "../../styles/components/ads-card.css";

export type ADSDownloadProps = {
    className?: string;
    style?: React.CSSProperties;
    href: string;
    /** Link label. */
    label: string;
    /** File meta appended to the label (type + size). */
    fileType?: string;
    fileSize?: string;
};

/**
 * A download link with a leading download icon and an optional file meta line.
 */
export const ADSDownload = (props: ADSDownloadProps) => {
    const { className, style, href, label, fileType, fileSize } = props;

    const meta = [fileType, fileSize].filter(Boolean).join(" · ");

    return (
        <a
            href={href}
            download
            className={cx("ads-download", className)}
            style={style}
        >
            <i className="fr-icon-download-line" aria-hidden="true" />
            <span className="ads-download__body">
                <span className="ads-download__label">{label}</span>
                {meta !== "" && <span className="ads-download__meta">{meta}</span>}
            </span>
        </a>
    );
};

ADSDownload.displayName = symToStr({ ADSDownload });

export default ADSDownload;