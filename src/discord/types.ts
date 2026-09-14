/**
 * Types partagés de l'intégration Discord ADS.
 */

/** Types de notifications institutionnelles supportés par `notify()`. */
export type ADSDiscordNotificationType =
    | "publication"
    | "incident"
    | "maintenance"
    | "event"
    | "announcement"
    | "status";

export type ADSDiscordField = {
    name: string;
    value: string;
    inline?: boolean;
};

export type ADSDiscordNotifyParams = {
    type: ADSDiscordNotificationType;
    /** Institution émettrice (ex. "Ministère de la Défense"). */
    organization?: string;
    title: string;
    description?: string;
    url?: string;
    fields?: ADSDiscordField[];
    /** Horodatage de l'événement (défaut: maintenant). */
    timestamp?: Date | string;
    /** Canal cible (webhook : surcharge le canal par défaut si fourni). */
    channelId?: string;
};

export type ADSDiscordClientOptions = {
    /** Token du bot gateway. Requis si `webhookUrl` est absent. */
    token?: string;
    /** URL de webhook — mode léger sans connexion gateway. */
    webhookUrl?: string;
    /** Canal par défaut utilisé en mode gateway. */
    defaultChannelId?: string;
    /** Nom d'auteur par défaut des embeds (défaut: "République d'Astoria"). */
    defaultAuthor?: string;
    /** URL du logo/icône affichée sur les embeds. */
    avatarUrl?: string;
};

/** Couleurs des embeds par type (identité Astoria, en décimal pour discord.js). */
export const ADSDiscordEmbedColor: Record<ADSDiscordNotificationType, number> = {
    publication: 0x1e3a8a, // --ads-color-primary
    incident: 0xb34000, // warning
    maintenance: 0x0063cb, // info
    event: 0x18753c, // success
    announcement: 0x4f46e5,
    status: 0x6b7280
};