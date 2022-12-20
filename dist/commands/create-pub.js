"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const builders_1 = require("@discordjs/builders");
module.exports = {
    data: new builders_1.SlashCommandBuilder()
        .setName('createpublic')
        .setDescription('ADMINISTRATIVE COMMAND!'),
    async execute(interaction) {
        if (interaction.guild?.members.cache.get(interaction.user.id)?.permissions.has('Administrator')) {
            const gc = interaction.guild.channels;
            const gccs = [
                '★・هدايا・الشات',
                '★・الـشات・الـعام',
                '★・أوامر・البوت',
                '★・xo・',
            ];
            gccs.forEach(async (gcc) => {
                const c = await gc.create({
                    name: gcc,
                    type: discord_js_1.ChannelType.GuildText,
                });
                c.setParent('1042897377238982817');
                interaction.channel?.send({
                    content: `Created ${gcc} text channel!`
                });
            });
        }
    }
};
