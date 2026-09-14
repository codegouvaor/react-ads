/**
 * ADS government portal components.
 *
 * ```tsx
 * import {
 *   ADSPortal, ADSGovernmentHeader, ADSMinistryHeader, ADSGovernmentFooter,
 *   ADSHero, ADSServiceBanner, ADSOfficialNotice, ADSBreadcrumb,
 *   ADSNavigation, ADSMegaMenu, ADSSearch, ADSPagination
 * } from "@codegouvaor/react-ads";
 * ```
 */
export { ADSPortal } from "./ADSPortal";
export type { ADSPortalProps } from "./ADSPortal";
export { useADSPortal, useOptionalADSPortal } from "./context";
export { ADSGovernmentHeader } from "./ADSGovernmentHeader";
export type { ADSGovernmentHeaderProps } from "./ADSGovernmentHeader";
export { ADSMinistryHeader } from "./ADSMinistryHeader";
export type { ADSMinistryHeaderProps } from "./ADSMinistryHeader";
export { ADSGovernmentFooter } from "./ADSGovernmentFooter";
export type { ADSGovernmentFooterProps, ADSFooterColumn } from "./ADSGovernmentFooter";
export { ADSHero } from "./ADSHero";
export type { ADSHeroProps } from "./ADSHero";
export { ADSServiceBanner } from "./ADSServiceBanner";
export type { ADSServiceBannerProps, ADSServiceBannerTone } from "./ADSServiceBanner";
export { ADSOfficialNotice } from "./ADSOfficialNotice";
export type { ADSOfficialNoticeProps } from "./ADSOfficialNotice";
export { ADSBreadcrumb } from "./ADSBreadcrumb";
export type { ADSBreadcrumbProps, ADSBreadcrumbItem } from "./ADSBreadcrumb";
export { ADSNavigation } from "./ADSNavigation";
export type { ADSNavigationProps, ADSNavigationItem } from "./ADSNavigation";
export { ADSMegaMenu } from "./ADSMegaMenu";
export type { ADSMegaMenuProps, ADSMegaMenuColumn } from "./ADSMegaMenu";
export { ADSSearch } from "./ADSSearch";
export type { ADSSearchProps } from "./ADSSearch";
export { ADSPagination } from "./ADSPagination";
export type { ADSPaginationProps } from "./ADSPagination";