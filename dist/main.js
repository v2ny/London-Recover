"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.client = void 0;
const discord_js_1 = require("discord.js");
const OnReady_1 = require("./events/OnReady");
const BotToken_1 = require("./events/BotToken");
const CommandsRegisterer_1 = require("./events/CommandsRegisterer");
// import { ConnectToMongoDB } from './events/ConnectDatabase';
const Protection_1 = require("./events/Protection");
// import { CheckChannels } from './events/ChannelsChecker';
const client = new discord_js_1.Client({
    intents: [
        discord_js_1.IntentsBitField.Flags.Guilds,
        discord_js_1.IntentsBitField.Flags.GuildMessages,
        discord_js_1.IntentsBitField.Flags.GuildMembers,
        discord_js_1.IntentsBitField.Flags.MessageContent,
        discord_js_1.IntentsBitField.Flags.DirectMessages,
    ],
});
exports.client = client;
(async () => {
    (0, BotToken_1.OnBotTokenGotten)(client);
    (0, OnReady_1.OnBotReadyEvent)('dnd', 'London Community.', 'Successfully connected with ');
    (0, Protection_1.OnGuildCreateEvent)();
    setTimeout(() => {
        (0, CommandsRegisterer_1.CommandsRegister)();
        (0, CommandsRegisterer_1.RESTApiCommandsRegisterer)('production', BotToken_1.FbotToken, '1042889212011225128');
    }, 1024);
})();
setInterval(() => {
    console.log(`[BPS] HEART BEAT SENT TO -> London-Recover | DISCOVERED!\n[NOPM2] WAKED UP PM2!`);
}, 152000);
