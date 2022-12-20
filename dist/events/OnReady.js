"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OnBotReadyEvent = void 0;
const main_1 = require("../main");
const OnBotReadyEvent = async (BotStatus, BotActivity, ConnectedMessage) => {
    await main_1.client.on('ready', () => {
        const dateInformation = new Date();
        main_1.client.user?.setStatus(BotStatus);
        main_1.client.user?.setActivity(BotActivity);
        console.log(`[${dateInformation.getMonth() + 1}/${dateInformation.getDate()}/${dateInformation.getFullYear()}] London Channels Connection Created.`);
        console.log(`[${dateInformation.getMonth() + 1}/${dateInformation.getDate()}/${dateInformation.getFullYear()}] ${ConnectedMessage + main_1.client.user?.tag}!`);
    });
    setInterval(async () => {
        main_1.client.guilds.cache.get('1042879508493127721')?.members.fetch({ force: true }).then((fetched) => {
            let i = 0;
            fetched.forEach((user) => {
                i++;
                if (user.user.username.includes('Ln') || user.user.username.includes('ln ') || user.user.username.includes('LN ')) {
                    if (!user.roles.cache.get('1042893279286546524')) {
                        console.log('--------------------------------------------');
                        console.log(user.user.tag);
                        user.roles.add('1042893279286546524');
                    }
                }
                else {
                    if (user.roles.cache.get('1042893279286546524')) {
                        user.roles.remove('1042893279286546524');
                    }
                }
            });
        });
    }, 6048);
};
exports.OnBotReadyEvent = OnBotReadyEvent;
