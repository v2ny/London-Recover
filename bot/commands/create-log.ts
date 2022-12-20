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
		.setName('createlog')
		.setDescription('ADMINISTRATIVE COMMAND!'),
	async execute(interaction: CommandInteraction) {
        if(interaction.guild?.members.cache.get(interaction.user.id)?.permissions.has('Administrator'))
        {
            const gc = interaction.guild.channels;
            const gccs = [
                '★・voice・log',
                '★・server・log',
                '★・messages・log',
                '★・role・log',
            ]
            gccs.forEach(async (gcc) => {
                const c: TextChannel = await gc.create({
                    name: gcc,
                    type: ChannelType.GuildText,
                })
                c.setParent('1042897379931721739');
                interaction.channel?.send({
                    content: `Created ${gcc} text channel!`
                })
            })
        }
    }
};