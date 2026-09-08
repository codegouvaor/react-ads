/**
 * ADS Native — official React Native implementation of the Astoria Design System.
 *
 * ```ts
 * import { Button, Card, Heading, Text } from "@codegouvaor/react-ads/native";
 * ```
 *
 * This entry is React Native / Expo only. It shares the ADS semantic tokens and
 * conventions with the web implementation (`@codegouvaor/react-ads`) but uses
 * native primitives (`View`, `Text`, `Pressable`, `TextInput`, …). It never
 * imports the web/DOM layer, and the web bundle never imports this entry.
 *
 * This is the **ADS Native Foundation** (1.0.7): the first official layer of
 * native support. Components are graphical primitives; routing, data and
 * business logic stay in the host application.
 */

// Tokens
export {
    adsTokens,
    adsColors,
    adsDarkColors,
    adsTypography,
    adsSpacing,
    adsRadius,
    adsElevation,
    adsDimensions,
    adsMotion
} from "./tokens";
export type {
    ADSTokens,
    ADSColorTokens,
    ADSColorToken,
    ADSTypographyTokens,
    ADSFontWeight,
    ADSSpacingTokens,
    ADSRadiusTokens,
    ADSElevation,
    ADSElevationTokens,
    ADSDimensionTokens,
    ADSMotionTokens
} from "./tokens";

// Theme
export { ADSProvider, useADSTheme, defaultADSTokens, ADSThemeContext } from "./theme";
export type { ADSTheme, ADSColorScheme, ADSProviderProps } from "./theme";

// Primitives
export {
    Text,
    Heading,
    Icon,
    Divider,
    Stack,
    Container
} from "./primitives";
export type {
    TextProps,
    TextVariant,
    HeadingProps,
    HeadingLevel,
    IconProps,
    DividerProps,
    StackProps,
    ContainerProps
} from "./primitives";

// Hooks
export { useADSTheme as useADS } from "./hooks";
export type { ADSTheme as ADS } from "./hooks";

// Components — foundations & layout
export { Card, List, ListItem, Section, Avatar } from "./components";
export type {
    CardProps,
    ListProps,
    ListItemProps,
    SectionProps,
    AvatarProps,
    AvatarSize
} from "./components";

// Components — actions
export { Button, IconButton, Link } from "./components";
export type { ButtonProps, ButtonPriority, ButtonSize, IconButtonProps, LinkProps } from "./components";

// Components — forms
export { Input, TextArea, Checkbox, Radio, RadioGroup, Switch, Select } from "./components";
export type {
    InputProps,
    TextAreaProps,
    CheckboxProps,
    RadioProps,
    RadioGroupProps,
    RadioOption,
    SwitchProps,
    SelectProps,
    SelectOption
} from "./components";

// Components — feedback
export { Alert, Badge, Status, Progress, Loading } from "./components";
export type {
    AlertProps,
    AlertSeverity,
    BadgeProps,
    BadgeTone,
    StatusProps,
    StatusTone,
    ProgressProps,
    LoadingProps
} from "./components";

// Components — navigation primitives (graphical only)
export { Header, TabBar, NavItem } from "./components";
export type { HeaderProps, TabBarProps, Tab, NavItemProps } from "./components";

// Components — government
export {
    ServiceCard,
    ProcedureCard,
    DocumentCard,
    NotificationCard,
    IdentityBadge,
    StatusBadge,
    GovernmentBanner
} from "./components";
export type {
    ServiceCardProps,
    ProcedureCardProps,
    DocumentCardProps,
    NotificationCardProps,
    IdentityBadgeProps,
    StatusBadgeProps,
    StatusKey,
    GovernmentBannerProps
} from "./components";