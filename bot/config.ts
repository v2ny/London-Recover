import { initJMLFile, indexJMLFile, getFromJML } from 'jml-format';
import path from 'path';

let botToken: string | any;

const configFilePath = path.join(__dirname, '/config.jml');

(async () => {
    let global: any | undefined;

    await initJMLFile(configFilePath).then( ( ) => global = indexJMLFile() );

    botToken = getFromJML(global.list.items, "Bot Token");
})();

export { botToken }