/**
 * Embeds ADS — mise en forme des notifications Discord selon l'identité numérique
 * de la République d'Astoria. Les embeds sont construits comme des objets simples,
 * sérialisables, transmis à discord.js par le client.
 */
import { ADSDiscordEmbedColor } from "./types";
import type {
    ADSDiscordNotifyParams,
    ADSDiscordNotificationType,
    ADSDiscordField
} from "./types";

export type ADSDiscordEmbed = {
    title: string;
    description?: string;
    url?: string;
    color: number;
    author?: { name: string; icon_url?: string };
    fields?: ADSDiscordField[];
    timestamp: string;
};

const TYPE_EMOJI: Record<ADSDiscordNotificationType, string> = {
    publication: "📄",
    incident: "🚨",
    maintenance: "🛠️",
    event: "📅",
    announcement: "📣",
    status: "ℹ️"
};

/** Libellé lisible du type de notification. */
export function adsDiscordTypeLabel(type: ADSDiscordNotificationType): string {
    switch (type) {
        case "publication":
            return "Nouvelle publication";
        case "incident":
            return "Incident";
        case "maintenance":
            return "Maintenance";
        case "event":
            return "Événement";
        case "announcement":
            return "Annonce";
        case "status":
            return "État du service";
    }
}

/**
 * Construit l'embed d'une notification conforme à l'identité Astoria.
 */
export function buildNotificationEmbed(
    params: ADSDiscordNotifyParams,
    defaultAuthor = "République d'Astoria",
    avatarUrl?: string
): ADSDiscordEmbed {
    const { type, organization, title, description, url, fields, timestamp } = params;

    return {
        title: `${TYPE_EMOJI[type]} ${title}`,
        description,
        url,
        color: ADSDiscordEmbedColor[type],
        author: {
            name: organization ?? defaultAuthor,
            ...(avatarUrl ? { icon_url: avatarUrl } : {})
        },
        fields,
        timestamp: timestamp instanceof Date ? timestamp.toISOString() : new Date(timestamp ?? Date.now()).toISOString()
    };
}

/** Émoji associé à un type (utile pour un message texte simple). */
export { TYPE_EMOJI };