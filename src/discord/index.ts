/**
 * Intégration Discord officielle de @codegouvaor/react-ads.
 *
 * Cette intégration est **server-only** : elle charge `discord.js` dynamiquement et
 * n'est jamais exportée depuis l'entrée racine de la librairie. Importez-la depuis le
 * sous-chemin dédié, uniquement dans du code Node.js / serveur :
 *
 * ```ts
 * import { ADSDiscordClient } from "@codegouvaor/react-ads/discord";
 * ```
 *
 * Elle encapsule `discord.js` mais ne le cache pas : `client.raw` / `getRawClient()`
 * exposent le client brut pour les usages avancés.
 */
export { ADSDiscordClient } from "./client";
export { buildNotificationEmbed, adsDiscordTypeLabel, TYPE_EMOJI } from "./embeds";
export type { ADSDiscordEmbed } from "./embeds";
export { sendNotificationToChannel } from "./notifications";
export { createWebhook } from "./webhooks";
export type { ADSWebhookHandle } from "./webhooks";
export { registerSlashCommands } from "./commands";
export type { ADSSlashCommandDefinition } from "./commands";
export type {
    ADSDiscordClientOptions,
    ADSDiscordNotifyParams,
    ADSDiscordNotificationType,
    ADSDiscordField
} from "./types";
export { ADSDiscordEmbedColor } from "./types";