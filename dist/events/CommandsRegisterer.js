"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RESTApiCommandsRegisterer = exports.CommandsRegister = void 0;
const discord_js_1 = require("discord.js");
const rest_1 = require("@discordjs/rest");
const v10_1 = require("discord-api-types/v10");
const main_1 = require("../main");
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
setTimeout(() => {
    main_1.client.commands = new discord_js_1.Collection();
}, 1024);
const commands = [];
const dateInformation = new Date();
const CommandsRegister = async () => {
    const dir = fs_1.default.readdirSync(path_1.default.join(__dirname.replace('events', ''), '/commands/')).filter(files => files.endsWith('.ts'));
    dir.forEach((file) => {
        const command = require('../commands/' + file);
        commands.push(command.data.toJSON());
        main_1.client.commands.set(command.data.name, command);
        console.log(`[${dateInformation.getMonth() + 1}/${dateInformation.getDate()}/${dateInformation.getFullYear()}] Added '${command.data.name}' into client.commands collection!`);
    });
};
exports.CommandsRegister = CommandsRegister;
const RESTApiCommandsRegisterer = async (REST_Type, BOT_TOKEN, CLIENT_ID) => {
    const rest = new rest_1.REST({
        version: '10'
    }).setToken(BOT_TOKEN);
    try {
        if (REST_Type === 'production') {
            await rest.put(v10_1.Routes.applicationCommands(CLIENT_ID), {
                body: commands
            });
            console.log(`[${dateInformation.getMonth() + 1}/${dateInformation.getDate()}/${dateInformation.getFullYear()}] Registered commands globaly!`);
        }
        else {
            main_1.client.guilds.cache.forEach(async (guild) => {
                await rest.put(v10_1.Routes.applicationGuildCommands(CLIENT_ID, guild.id), {
                    body: commands
                });
            });
            console.log(`[${dateInformation.getMonth() + 1}/${dateInformation.getDate()}/${dateInformation.getFullYear()}] Registered commands locally!`);
        }
    }
    catch (err) {
        if (err)
            console.error(err);
    }
    main_1.client.on('interactionCreate', async (interaction) => {
        if (!interaction.isChatInputCommand() || interaction.user.bot)
            return;
        const command = main_1.client.commands.get(interaction.isCommand() ? interaction.commandName : '');
        if (!command)
            return;
        try {
            await command.execute(interaction);
        }
        catch (err) {
            if (err)
                console.log('An error was sent, Skipped because was forced to, See CommandsRegisterer.ts line 63 to edit this message!');
        }
    });
};
exports.RESTApiCommandsRegisterer = RESTApiCommandsRegisterer;
