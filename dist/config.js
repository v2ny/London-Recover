"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.botToken = void 0;
const jml_format_1 = require("jml-format");
const path_1 = __importDefault(require("path"));
let botToken;
exports.botToken = botToken;
const configFilePath = path_1.default.join(__dirname, '/config.jml');
(async () => {
    let global;
    await (0, jml_format_1.initJMLFile)(configFilePath).then(() => global = (0, jml_format_1.indexJMLFile)());
    exports.botToken = botToken = (0, jml_format_1.getFromJML)(global.list.items, "Bot Token");
})();
