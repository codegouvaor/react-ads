import type { RegisteredLinkProps } from "../link";
import type { HeaderProps } from "../Header/Header";

let wrap:
    | {
          identity: HeaderProps.Identity;
          homeLinkProps: RegisteredLinkProps & { title: string };
      }
    | undefined = undefined;

/**
 * Set by the Header on every render so that the Footer (which might be rendered
 * separately, e.g. server side) can display the same institutional identity.
 * NOTE: Only reliable when the Header is rendered server side (or client side on
 * the same page, before the Footer).
 */
export function setIdentityAndHomeLinkProps(params: {
    identity: HeaderProps.Identity;
    homeLinkProps: RegisteredLinkProps & { title: string };
}) {
    wrap = params;
}

export function getIdentityAndHomeLinkProps() {
    return wrap;
}
