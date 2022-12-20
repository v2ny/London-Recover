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
		.setName('createcat')
		.setDescription('ADMINISTRATIVE COMMAND!'),
	async execute(interaction: CommandInteraction) {
        if(interaction.guild?.members.cache.get(interaction.user.id)?.permissions.has('Administrator'))
        {
            const gc = interaction.guild.channels;
            const gccs = [
                '╭── • قسم ◈ الادارة  • ──╮',
                '╭── • القـسـم ◈ العام  • ──╮',
                '╭── • لقـسـم ◈ الاعلانات ◈ • ──╮',
                '╭── • اللوق • ──╮',
            ]
            const evRole = interaction.guild.roles.everyone;
            gccs.forEach((gcc) => {
                gc.create({
                    name: gcc,
                    type: ChannelType.GuildCategory,
                    permissionOverwrites: [
                        {
                            id: evRole.id,
                            deny: 'ViewChannel',
                        }
                    ]
                })
                interaction.channel?.send({
                    content: `Created ${gcc} Category!`
                })
            })
        }
    }
};