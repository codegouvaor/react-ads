import { useId } from "react";

/**
 * Event tracking and accessibility features require every element to have a unique ID.
 * This hook helps generate such an ID in case it is not explicitly provided.
 */
export function useAnalyticsId(params: { explicitlyProvidedId?: string; defaultIdPrefix: string }) {
    const { explicitlyProvidedId, defaultIdPrefix } = params;

    const id = useId();

    return explicitlyProvidedId ?? `${defaultIdPrefix}-${id}`;
}
