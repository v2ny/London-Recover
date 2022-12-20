import { Collection, GuildMember } from 'discord.js';
import { REST } from '@discordjs/rest';
import { Routes } from 'discord-api-types/v10';
import { client } from '../main';

import path from 'path';
import fs from 'fs';

setTimeout(() => {
    client.commands = new Collection()
}, 1024);
const commands: string[] = [];
const dateInformation: Date = new Date();

type states = 'production' | 'dev';

const CommandsRegister = async ( ) => {
    const dir = fs.readdirSync(path.join(__dirname.replace('events', ''), '/commands/')).filter(files => files.endsWith('.ts'));
    dir.forEach((file) => {
        const command = require('../commands/' + file);
        commands.push(command.data.toJSON());
        client.commands.set(command.data.name, command);
        console.log(`[${dateInformation.getMonth() + 1}/${dateInformation.getDate()}/${dateInformation.getFullYear()}] Added '${command.data.name}' into client.commands collection!`)
    });
};

const RESTApiCommandsRegisterer = async ( REST_Type: states, BOT_TOKEN: string, CLIENT_ID: any ) => {
    const rest: REST = new REST({
        version: '10'
    }).setToken(BOT_TOKEN);

    try {
        if(REST_Type === 'production')
        {
            await rest.put(Routes.applicationCommands(CLIENT_ID), {
                body: commands
            });
            console.log(`[${dateInformation.getMonth() + 1}/${dateInformation.getDate()}/${dateInformation.getFullYear()}] Registered commands globaly!`)
        }
        else
        {
            client.guilds.cache.forEach(async (guild) => {
                await rest.put(Routes.applicationGuildCommands(CLIENT_ID, guild.id), {
                    body: commands
                });
            });
            console.log(`[${dateInformation.getMonth() + 1}/${dateInformation.getDate()}/${dateInformation.getFullYear()}] Registered commands locally!`)
        }
    } catch (err) {
        if(err) console.error(err);
    }

    client.on('interactionCreate', async (interaction) => {
        if(!interaction.isChatInputCommand() || interaction.user.bot) return;
        
        const command = client.commands.get(interaction.isCommand() ? interaction.commandName : '');

        if(!command) return;

        try {
            await command.execute(interaction);
        } catch (err) {
            if(err) console.log('An error was sent, Skipped because was forced to, See CommandsRegisterer.ts line 63 to edit this message!');
        }
    })
};

export {
    CommandsRegister,
    RESTApiCommandsRegisterer
};