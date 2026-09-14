"use client";

import * as React from "react";
import { cx } from "../../tools/cx";
import { symToStr } from "tsafe/symToStr";
import "../../styles/components/ads-portal.css";

export type ADSMegaMenuColumn = {
    title: string;
    links: { label: string; href: string }[];
};

export type ADSMegaMenuProps = {
    className?: string;
    style?: React.CSSProperties;
    /** The trigger label shown in the nav bar. */
    label: string;
    /** Link target of the trigger (optional; when set the label is a link). */
    href?: string;
    columns: ADSMegaMenuColumn[];
};

/**
 * A mega menu: a trigger in the navigation that opens a wide panel of link columns.
 * Keyboard accessible (Enter / Space toggles, Escape closes, focus moves into the
 * panel) and collapses to a static block on small screens.
 */
export const ADSMegaMenu = (props: ADSMegaMenuProps) => {
    const { className, style, label, href, columns } = props;

    const [isOpen, setIsOpen] = React.useState(false);
    const panelId = React.useId();

    const onKeyDown = (event: React.KeyboardEvent) => {
        if (event.key === "Escape") {
            setIsOpen(false);
        }
    };

    return (
        <div className={cx("ads-mega-menu", className)} style={style} onKeyDown={onKeyDown}>
            <button
                type="button"
                className="ads-mega-menu__trigger"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setIsOpen(o => !o)}
            >
                {label}
                <i
                    className={cx("fr-icon-arrow-down-s-line", isOpen && "ads-mega-menu__chevron-open")}
                    aria-hidden="true"
                />
            </button>

            <div className="ads-mega-menu__panel" id={panelId} hidden={!isOpen}>
                <div className="ads-mega-menu__cols">
                    {columns.map((col, index) => (
                        <div key={index}>
                            <h3 className="ads-mega-menu__col-title">{col.title}</h3>
                            <ul className="ads-mega-menu__links">
                                {col.links.map((link, j) => (
                                    <li key={j}>
                                        <a href={link.href} onClick={() => setIsOpen(false)}>
                                            {link.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
                {href !== undefined && (
                    <p className="ads-mega-menu__more">
                        <a href={href}>{label} — voir tout</a>
                    </p>
                )}
            </div>
        </div>
    );
};

ADSMegaMenu.displayName = symToStr({ ADSMegaMenu });

export default ADSMegaMenu;