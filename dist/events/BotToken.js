"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FbotToken = exports.OnBotTokenGotten = void 0;
const config_1 = require("../config");
let FbotToken;
exports.FbotToken = FbotToken;
const OnBotTokenGotten = async (client) => {
    setTimeout(async () => {
        exports.FbotToken = FbotToken = (await config_1.botToken);
        client.login(FbotToken);
    }, 1024);
};
exports.OnBotTokenGotten = OnBotTokenGotten;
