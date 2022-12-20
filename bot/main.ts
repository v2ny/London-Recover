import { Client, IntentsBitField } from 'discord.js';

import { OnBotReadyEvent } from './events/OnReady';
import { FbotToken, OnBotTokenGotten } from './events/BotToken';
import { CommandsRegister, RESTApiCommandsRegisterer } from './events/CommandsRegisterer';
// import { ConnectToMongoDB } from './events/ConnectDatabase';
import { OnGuildCreateEvent } from './events/Protection';
// import { CheckChannels } from './events/ChannelsChecker';

const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.MessageContent,
        IntentsBitField.Flags.DirectMessages,
    ],
});

(async ( ) => {
    OnBotTokenGotten(client);
    OnBotReadyEvent('dnd', 'London Community.', 'Successfully connected with ');
    OnGuildCreateEvent();
    setTimeout(() => {
        CommandsRegister();
        RESTApiCommandsRegisterer('production', FbotToken, '1042889212011225128');
    }, 1024);
})();

setInterval(( ) => {
    console.log(`[BPS] HEART BEAT SENT TO -> London-Recover | DISCOVERED!\n[NOPM2] WAKED UP PM2!`);
}, 152000);

export { 
    client 
};