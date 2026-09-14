"use client";

import * as React from "react";
import { cx } from "../../tools/cx";
import { symToStr } from "tsafe/symToStr";
import "../../styles/components/ads-card.css";

export type ADSDocumentProps = {
    className?: string;
    style?: React.CSSProperties;
    href?: string;
    title?: React.ReactNode;
    /** File extension label shown in the meta line (e.g. `"PDF"`). */
    fileType?: string;
    /** Human file size (e.g. `"1,2 Mo"`). */
    fileSize?: string;
    /** Optional publication date. */
    date?: string;
    /** Icon id for the file (default `fr-icon-file-pdf-line`). */
    iconId?: string;
};

/**
 * A document reference block — an icon, a title, a file meta line and a download
 * action. Used for reports, forms, directives, etc.
 */
export const ADSDocument = (props: ADSDocumentProps) => {
    const {
        className,
        style,
        href,
        title,
        fileType,
        fileSize,
        date,
        iconId = "fr-icon-file-pdf-line"
    } = props;

    const titleNode =
        href !== undefined && title !== undefined ? <a href={href}>{title}</a> : title;

    return (
        <article className={cx("ads-document", className)} style={style}>
            <span className="ads-document__icon" aria-hidden="true">
                <i className={iconId} />
            </span>
            <div className="ads-document__body">
                {title !== undefined && <h3 className="ads-document__title">{titleNode}</h3>}
                {(fileType !== undefined || fileSize !== undefined || date !== undefined) && (
                    <span className="ads-document__meta">
                        {[fileType, fileSize, date].filter(Boolean).join(" · ")}
                    </span>
                )}
            </div>
            {href !== undefined && (
                <span className="ads-document__action">
                    <i className="fr-icon-download-line" aria-hidden="true" />
                </span>
            )}
        </article>
    );
};

ADSDocument.displayName = symToStr({ ADSDocument });

export default ADSDocument;