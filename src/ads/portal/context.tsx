"use client";

import * as React from "react";

export type ADSPortalContextValue = {
    organization: string;
    organizationShort?: string;
    homeHref?: string;
};

const ADSPortalContext = React.createContext<ADSPortalContextValue | null>(null);

export const ADSPortalProvider = ADSPortalContext.Provider;

export function useADSPortal(): ADSPortalContextValue {
    const value = React.useContext(ADSPortalContext);

    if (value === null) {
        throw new Error(
            "[react-ads] useADSPortal must be used inside an <ADSPortal>. Wrap your page with <ADSPortal>."
        );
    }

    return value;
}

export function useOptionalADSPortal(): ADSPortalContextValue | null {
    return React.useContext(ADSPortalContext);
}