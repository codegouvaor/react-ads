"use client";

import * as React from "react";
import { cx } from "../../tools/cx";
import { symToStr } from "tsafe/symToStr";
import "../../styles/components/ads-search.css";

export type ADSSearchProps = {
    className?: string;
    style?: React.CSSProperties;
    name?: string;
    placeholder?: string;
    buttonLabel?: string;
    defaultValue?: string;
    onSubmit?: (query: string) => void;
    disabled?: boolean;
};

/**
 * A labelled search form (input + submit button). Submits the current query to
 * `onSubmit`. The input has an accessible label and a visible focus ring.
 */
export const ADSSearch = (props: ADSSearchProps) => {
    const {
        className,
        style,
        name = "query",
        placeholder = "Rechercher",
        buttonLabel = "Rechercher",
        defaultValue = "",
        onSubmit,
        disabled
    } = props;

    const inputId = React.useId();
    const [value, setValue] = React.useState(defaultValue);

    const onFormSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        onSubmit?.(value.trim());
    };

    return (
        <form
            className={cx("ads-search", className)}
            style={style}
            role="search"
            onSubmit={onFormSubmit}
        >
            <label htmlFor={inputId} className="ads-search__label">
                {placeholder}
            </label>
            <input
                id={inputId}
                type="search"
                name={name}
                className="ads-search__input"
                placeholder={placeholder}
                value={value}
                onChange={event => setValue(event.target.value)}
                disabled={disabled}
                autoComplete="off"
            />
            <button type="submit" className="ads-search__button" disabled={disabled}>
                {buttonLabel}
                <i className="fr-icon-search-line" aria-hidden="true" />
            </button>
        </form>
    );
};

ADSSearch.displayName = symToStr({ ADSSearch });

export default ADSSearch;