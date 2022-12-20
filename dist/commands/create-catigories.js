"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const builders_1 = require("@discordjs/builders");
module.exports = {
    data: new builders_1.SlashCommandBuilder()
        .setName('createcat')
        .setDescription('ADMINISTRATIVE COMMAND!'),
    async execute(interaction) {
        if (interaction.guild?.members.cache.get(interaction.user.id)?.permissions.has('Administrator')) {
            const gc = interaction.guild.channels;
            const gccs = [
                '╭── • قسم ◈ الادارة  • ──╮',
                '╭── • القـسـم ◈ العام  • ──╮',
                '╭── • لقـسـم ◈ الاعلانات ◈ • ──╮',
                '╭── • اللوق • ──╮',
            ];
            const evRole = interaction.guild.roles.everyone;
            gccs.forEach((gcc) => {
                gc.create({
                    name: gcc,
                    type: discord_js_1.ChannelType.GuildCategory,
                    permissionOverwrites: [
                        {
                            id: evRole.id,
                            deny: 'ViewChannel',
                        }
                    ]
                });
                interaction.channel?.send({
                    content: `Created ${gcc} Category!`
                });
            });
        }
    }
};
