"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const builders_1 = require("@discordjs/builders");
module.exports = {
    data: new builders_1.SlashCommandBuilder()
        .setName('createpvch')
        .setDescription('ADMINISTRATIVE COMMAND!'),
    async execute(interaction) {
        if (interaction.guild?.members.cache.get(interaction.user.id)?.permissions.has('Administrator')) {
            const gc = interaction.guild.channels;
            const gccs = [
                '╭── • قـسـم ◈ الرومات ◈ الخاصة  • ──╮',
            ];
            const evRole = interaction.guild.roles.everyone;
            const gkc = interaction.guild.channels;
            const gkccs = [
                '★・قوانين・الرومات・الخاصة・',
                '★・إنشاء・روم・خاص',
            ];
            gccs.forEach((gcc) => {
                const cat = gc.create({
                    name: gcc,
                    type: discord_js_1.ChannelType.GuildCategory,
                    permissionOverwrites: [
                        {
                            id: evRole.id,
                            deny: 'ViewChannel',
                        }
                    ]
                });
                if (gcc.indexOf('الخاصة') !== -1) {
                    gkccs.forEach(async (gcc) => {
                        const c = await gc.create({
                            name: gcc,
                            type: discord_js_1.ChannelType.GuildText,
                        });
                        c.setParent((await cat).id);
                        interaction.channel?.send({
                            content: `Created ${gcc} text channel!`
                        });
                    });
                }
                interaction.channel?.send({
                    content: `Created ${gcc} Category!`
                });
            });
        }
    }
};
