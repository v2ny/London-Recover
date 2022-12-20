import { Client } from 'discord.js';
import { botToken } from '../config';

let FbotToken: string;

const OnBotTokenGotten = async (client: Client) => {
    setTimeout(async ( ) => {
        FbotToken = (await botToken)
        client.login(FbotToken);
    }, 1024);
};

export {
    OnBotTokenGotten,
    FbotToken
};