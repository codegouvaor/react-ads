/**
 * Notifications — envoi d'embeds dans un canal d'un bot gateway.
 */
import { buildNotificationEmbed } from "./embeds";
import type { ADSDiscordNotifyParams } from "./types";

/**
 * Envoie une notification dans le canal donné via le client gateway fourni.
 * `client` est l'instance discord.js brute (accessible via `ADSDiscordClient.raw`).
 */
export async function sendNotificationToChannel(
    client: any,
    channelId: string,
    params: ADSDiscordNotifyParams
): Promise<unknown> {
    const channel = await client.channels.fetch(channelId);

    if (channel == null) {
        throw new Error(`[react-ads/discord] Canal introuvable : ${channelId}`);
    }

    const embed = buildNotificationEmbed(params);

    return channel.send({ embeds: [embed] });
}