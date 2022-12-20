import { 
    CommandInteraction, 
    PermissionFlagsBits,
    ActionRowBuilder,
    ButtonBuilder,
    ButtonStyle,
    EmbedBuilder,
    Collector,
    ChannelType,
    TextChannel,
    User } from 'discord.js';
import { SlashCommandBuilder } from '@discordjs/builders';
// import { informationCollection } from '../events/ConnectDatabase';
import { client } from '../main';
import { ParentCategoryId } from '../events/Channels';

module.exports = {
	data: new SlashCommandBuilder()
		.setName('createpvch')
		.setDescription('ADMINISTRATIVE COMMAND!'),
	async execute(interaction: CommandInteraction) {
        if(interaction.guild?.members.cache.get(interaction.user.id)?.permissions.has('Administrator'))
        {
            const gc = interaction.guild.channels;
            const gccs = [
                '╭── • قـسـم ◈ الرومات ◈ الخاصة  • ──╮',
            ]
            const evRole = interaction.guild.roles.everyone;
            const gkc = interaction.guild.channels;
            const gkccs = [
                '★・قوانين・الرومات・الخاصة・',
                '★・إنشاء・روم・خاص',
            ]
            gccs.forEach((gcc) => {
                const cat = gc.create({
                    name: gcc,
                    type: ChannelType.GuildCategory,
                    permissionOverwrites: [
                        {
                            id: evRole.id,
                            deny: 'ViewChannel',
                        }
                    ]
                })
                if(gcc.indexOf('الخاصة') !== -1)
                {
                    gkccs.forEach(async (gcc) => {
                        const c: TextChannel = await gc.create({
                            name: gcc,
                            type: ChannelType.GuildText,
                        })
                        c.setParent((await cat).id);
                        interaction.channel?.send({
                            content: `Created ${gcc} text channel!`
                        })
                    })
                }
                interaction.channel?.send({
                    content: `Created ${gcc} Category!`
                })
            })
        }
    }
};