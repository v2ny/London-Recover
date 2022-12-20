import { EmbedBuilder } from '@discordjs/builders';
import { TextChannel, ChannelType, VoiceChannel, Guild, Channel, GuildAuditLogsResolvable, GuildAuditLogs, GuildAuditLogsEntry, AuditLogEvent } from 'discord.js';
import { client } from '../main';

const OnGuildCreateEvent = async ( ) => {
    try
    {
        const cمسبات = [
            'كسمك',
            'قحبة',
            'قحبه',
            'انيج',
            'شرموط',
            'طيزي',
            'شرمطه',
            'منيوك',
            'كسختك',
            'كس ابوك',
            'طوبز',
            'كحبة',
            'مصمص',
            'مصه',
            ' زبي',
            'قضيب',
            'قضيبي',
            'طيزي',
            'طيز',
            'طيزك',
            'عيري',
            'انيكك',
            'انيك امك',
            'انيك اختك',
            ' انيك',
            'عاهره',
            'ديوث',
            'كس امك',
            'كسامك',
            'كس ام',
            'كسمه',
            ':flag_il:',
            'انكح',
            'كسخوات',
            '🇮🇱'
        ]

        client.on('guildCreate', (guild) => {
            try {
                if(guild.id !== ('508186631849639936' || '1041742037541736469'))
                {
                    guild.leave();
                }
            } catch (error) {
                console.log(error);
            }
        })
        client.on('messageCreate', async (message) => {
        try {
            
            if((
                message.content.toLowerCase().includes('discord.gg') || 
                message.content.toLowerCase().includes('تشتري ')      || 
                message.content.toLowerCase().includes('متوفر ')      || 
                message.content.toLowerCase().includes('مت9فر ')      || 
                message.content.toLowerCase().includes('مت9وفر ')     || 
                message.content.toLowerCase().includes('بيع ')        || 
                message.content.toLowerCase().includes('شراء ')       || 
                message.content.toLowerCase().includes('بي3 ')        || 
                message.content.toLowerCase().includes('مطلوب ')      || 
                message.content.toLowerCase().includes('selling ')    || 
                message.content.toLowerCase().includes('sell ')       || 
                message.content.toLowerCase().includes('buy ')        || 
                message.content.toLowerCase().includes('اشتري ')      || 
                message.content.toLowerCase().includes('بي٣ ')        ||
                message.content.toLowerCase().includes('شرا$ ')      ||
                message.content.toLowerCase().includes('ريوارد ')     ||
                message.content.toLowerCase().includes('مسابقة صور ') ||
                message.content.toLowerCase().includes('reward ')     ||
                message.content.toLowerCase().includes('مقابل ')      ||
                message.content.toLowerCase().includes('مق aبل')      ||
                message.content.toLowerCase().includes(' م8ابل')      ||
                message.content.toLowerCase().includes('trade ')      ||
                message.content.toLowerCase().includes('للبيع')      ||
                message.content.toLowerCase().includes('للبي٣')      ||
                message.content.toLowerCase().includes('للبي3')      ||
                message.content.toLowerCase().includes('للبيغ')      ||
                message.content.toLowerCase().includes('llbi3')      ||
                message.content.toLowerCase().includes('lbi3')      ||
                message.content.toLowerCase().includes('nitro llbi3')      ||
                message.content.toLowerCase().includes('نايترو للبيع ')      ||
                message.content.toLowerCase().includes('نايترو للبي3 ')      ||
                message.content.toLowerCase().includes('نايترو للبي٣ ')      || 
                message.content.length > 600) 
                && !message.member?.roles.cache.get('1042912778152849518') && !message.member?.roles.cache.get('1042889212011225128') && !message.author.bot && !message.member?.permissions.has('Administrator') && (!message.member?.roles.cache.get('1043101153564577792') || !message.member.roles.cache.get('1042890587436748883') || !message.member.roles.cache.get('1043619103417581609')) && !message.member?.roles.cache.get('1043112860659752982'))            
            {
                const embed: EmbedBuilder = new EmbedBuilder()
                .setDescription(`**رسالة قد ارسلت بواسطة <@${message.author.id}> و حذفت ب <#${message.channel.id}>. 🗑️!**\n${message.content}`)
                    .addFields(
                        { name: '**المشرف المسؤول:**', value: `<@${client.user?.id}>`, inline: true },
                        { name: '**السبب:**', value: `User sent a blacklisted word!\n`, inline: true },
                        { name: '\u200b', value: '\u200b', inline: true },
                        { name: '**ردة الفعل:**', value: `Message was deleted!`, inline: true },
                        { name: '**الكلمة الممنوعة:**', value: `||\`Could not get the blacklisted word!\`||`, inline: true },
                    )
                    .setFooter({
                        text: message.guild?.name.toString() || '',
                        iconURL: message.guild?.iconURL({ size: 256 })?.toString()
                    })
                    .setAuthor({
                        name: message.author.tag,
                        iconURL: message.author.avatarURL({ extension: 'png', size: 256 })?.toString(),
                    })
                    .setTimestamp();
                await (client.channels.cache.get('1042906729211498618') as TextChannel).send({
                    embeds: [
                        embed
                    ]
                })
                message.deletable ? message.delete() : await (client.channels.cache.get('1042906729211498618') as TextChannel).send({
                    content: `Could not delete this message ! ${message.url} <@730699395967877160>.`
                });
                // message.author.send({
                //     content: `لعدم التعرض للأسكات، نتمنى منك ان تذهب إلى فرعنا،\n\nسـبـب الرسالة :\n\`\`\`${message.content}\`\`\`\n\nالفرع :-\nhttps://discord.gg/V6BKRVMrpU`
                // }).catch(async (err) => {
                //     await (client.channels.cache.get('1042906729211498618') as TextChannel).send({
                //         content: `Could not send to the user the default gateway message, Undefinable direct ! \nTag: ${message.author.tag}\nProblem in full: ${err}\nProblem Shortened: DM Channel is closed!\n<@730699395967877160>.`
                //     });
                // })
            }
    
            for (var i = 0; i < cمسبات.length; i++) {
                if (message.content.includes(cمسبات[i]) && !message.member?.permissions.has('Administrator')) {
                    const embed: EmbedBuilder = new EmbedBuilder()
                    .setDescription(`**رسالة قد ارسلت بواسطة <@${message.author.id}> و حذفت ب <#${message.channel.id}>. 🗑️!**\n|| ${message.content} ||`)
                    .addFields(
                        { name: '**المشرف المسؤول:**', value: `<@${client.user?.id}>`, inline: true },
                        { name: '**السبب:**', value: `User sent a blacklisted word!\n`, inline: true},
                        { name: '\u200b', value: '\u200b', inline: true },
                        { name: '**ردة الفعل:**', value: `User has got timeout for \`6d, 23h, 59m, 59s\`!`, inline: true },
                        { name: '**الكلمة الممنوعة:**', value: `||\`${cمسبات[i]}\`||`, inline: true },
                    )
                    .setFooter({
                        text: message.guild?.name.toString() || '',
                        iconURL: message.guild?.iconURL({ size: 256 })?.toString()
                    })
                    .setAuthor({
                        name: message.author.tag,
                        iconURL: message.author.avatarURL({ extension: 'png', size: 256 })?.toString(),
                    })
                    .setTimestamp();
                    await (client.channels.cache.get('1042906729211498618') as TextChannel).send({
                        embeds: [
                            embed
                        ]
                    })
                    if(message.content !== '' || message.content !== null)
                    {
                        try {
                            message.deletable ? message.delete() : await (client.channels.cache.get('1042906729211498618') as TextChannel).send({
                                content: `Could not delete this message ! ${message.url} <@730699395967877160>.`
                            });
                        } catch (error) {
                            console.log('An error occurred while doing the default routine and looping through \'Protection.ts\'!')
                            console.log('[REPORTED_ACTION] Not important, SKIPPING!')
                        }
                        await message.member?.timeout(10080 * 60 * 1000, `User was cussing with a forbidden word!`);
                    }
                  break;
                }
            }
            // else if(message.content.toLowerCase().includes('ليه تبند') || message.content.toLowerCase().includes('شسالفه') || message.content.toLowerCase().includes('شصار') || message.content.toLowerCase().includes('ليش تبند') || message.content.toLowerCase().includes('ايش صار') || message.content.toLowerCase().includes('وش صار'))
            // {
            //     message.channel.send({
            //         content: 'السالفة و مافيها ان سيرفر لندن تبند وكنا رح نحذفه بالحالتين\nفا جت بطبيعة الأحوال' + ' <@' + message.author + '>'
            //     }).then(( m ) => {
            //         setTimeout(async ( ) => {
            //             await m.delete();
            //         }, 16048)
            //     })
            // }
        } catch (error) {
            console.log('SKIPPING')
        }
        })
        client.on('messageDelete', (message) => {
            if(message.author && message.guild && (message.attachments.size > 0 || message.content !== null))
            {
                if(message.attachments.size > 0 && message.attachments !== null) {
                    if(message.attachments.every(attachIsImage)) {
                        message.attachments.forEach(async (attachment) => {
                            const embed2 = new EmbedBuilder()
                                .setAuthor({ name: message.author?.tag.toString() || '', iconURL: message.author?.avatarURL()?.toString() })
                                .setFooter({
                                    text: message.guild?.name || '',
                                    iconURL: message.guild?.iconURL()?.toString()
                                })
                                .setDescription(`**صورة أُرسِلت بواسطة <@${message.author?.id}> مُسِحت في <#${message.channel.id}>. 🗑️**\n${message.content}`)
                                .setImage(attachment.url)
                                .setTimestamp();
                                
                                const channel = (message.guild?.channels.cache.get('1042906729211498618') as TextChannel);
                                await channel.send({
                                    embeds: [
                                        embed2
                                    ]
                                });
                        })
                    }
                }
            }
        })
        client.on('channelCreate', async (channel) => {
            console.log('[MSRC_LOG] A new channel was created!')
            if(!channel.isTextBased() || !channel.isVoiceBased) return;
            for (var i = 0; i < cمسبات.length; i++) {
                if (channel.name.toLowerCase().includes(cمسبات[i])) {
                    const embed: EmbedBuilder = new EmbedBuilder()
                    .setDescription(`روم جديد قد حذف للشك بأنها سب! بـ <#${channel.id}>\nمحتوى اسم الروم :\n||\`\`\`${channel.name}\`\`\`||`)
                    .setFooter({
                        text: channel.guild?.name.toString() || '',
                        iconURL: channel.guild?.iconURL({ size: 256 })?.toString()
                    })
                    .setTimestamp();
                    await (client.channels.cache.get('1042906729211498618') as TextChannel).send({
                        embeds: [
                            embed
                        ]
                    })
                    if(channel !== null)
                    {
                        try {
                            channel.deletable ? channel.delete() : await (client.channels.cache.get('1042906729211498618') as TextChannel).send({
                                content: `Could not delete this channel ! ${channel.id} <@730699395967877160>.`
                            });
                        } catch (error) {
                            console.log('An error occurred while doing the default routine and looping through \'Protection.ts\'!')
                            console.log('[REPORTED_ACTION] Not important, SKIPPING!')
                        }
                        // await message.member?.timeout(10080 * 60 * 1000, `User was cussing with a forbidden word!`);
                    }
                  break;
                }
            }
        })
        client.on('channelUpdate', async (channel: TextChannel | VoiceChannel | any) => {
            for (var i = 0; i < cمسبات.length; i++) {
                if (channel.name.toLowerCase().includes(cمسبات[i])) {
                    const embed: EmbedBuilder = new EmbedBuilder()
                    .setDescription(`روم جديد قد حذف للشك بأنها سب! بـ <#${channel.id}>\nمحتوى اسم الروم :\n||\`\`\`${channel.name}\`\`\`||`)
                    .setFooter({
                        text: channel.guild?.name.toString() || '',
                        iconURL: channel.guild?.iconURL({ size: 256 })?.toString()
                    })
                    .setTimestamp();
                    await (client.channels.cache.get('1042906729211498618') as TextChannel).send({
                        embeds: [
                            embed
                        ]
                    })
                    if(channel !== null)
                    {
                        try {
                            channel.deletable ? channel.delete() : await (client.channels.cache.get('1042906729211498618') as TextChannel).send({
                                content: `Could not delete this channel ! ${channel.id} <@730699395967877160>.`
                            });
                        } catch (error) {
                            console.log('An error occurred while doing the default routine and looping through \'Protection.ts\'!')
                            console.log('[REPORTED_ACTION] Not important, SKIPPING!')
                        }
                        // await message.member?.timeout(10080 * 60 * 1000, `User was cussing with a forbidden word!`);
                    }
                  break;
                }
            }
        })
        const guild = client.guilds.cache.get('1042879508493127721');
        setInterval(async ( ) => {
            guild?.channels.cache.filter(ch => ch.isTextBased() || ch.isVoiceBased()).forEach(async (channel) => {
                for (var i = 0; i < cمسبات.length; i++) {
                    if (channel.name.toLowerCase().includes(cمسبات[i])) {
                        const embed: EmbedBuilder = new EmbedBuilder()
                        .setDescription(`روم جديد قد حذف للشك بأنها سب!\nمحتوى اسم الروم :\n||\`\`\`${channel.name}\`\`\`||`)
                        .setFooter({
                            text: channel.guild?.name.toString() || '',
                            iconURL: channel.guild?.iconURL({ size: 256 })?.toString()
                        })
                        .setTimestamp();
                        await (client.channels.cache.get('1042906729211498618') as TextChannel).send({
                            embeds: [
                                embed
                            ]
                        })
                        if(channel !== null)
                        {
                            try {
                                channel.delete();
                            } catch (error) {
                                await (client.channels.cache.get('1042906729211498618') as TextChannel).send({
                                    content: `Could not delete this channel ! ${channel.id} <@730699395967877160>.`
                                });
                                console.log('An error occurred while doing the default routine and looping through \'Protection.ts\'!')
                                console.log('[REPORTED_ACTION] Not important, SKIPPING!')
                            }
                            // await message.member?.timeout(10080 * 60 * 1000, `User was cussing with a forbidden word!`);
                        }
                    break;
                    }
                }
            })
        }, 4048);
    }
    catch(err)
    {
        console.log('An error occurred while doing the default routine and looping through \'Protection.ts\'!')
        console.log('[REPORTED_ACTION] Not important, SKIPPING!')
    }
};

function attachIsImage(msgAttach: any) {
    var url = msgAttach.url;
    //True if this url is a png image.
    return url.indexOf("png", url.length - "png".length /*or 3*/) !== -1;
}

function containsNumbers(str: string) {
    return /\d/.test(str);
  }

export {
    OnGuildCreateEvent
};