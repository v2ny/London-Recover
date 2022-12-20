import express, { Request, Response } from "express";
import path from "path";
import fs from "fs";

import { getFromJML, indexJMLFile, initJMLFile } from "jml-format";

const fpath = path.join(__dirname + "/srv.jml");

(async () => {
    let srv: any["list"] = [];

    await initJMLFile(fpath).then( ( ) => srv = indexJMLFile() );

    const serverPort = getFromJML(srv.list.items, "server public port") || 1559;

    const app = express();
    
    let app_state: string = "";
    if(process.env.NODE_ENV === "production") app_state = "Production@v1"; 
    if(process.env.NODE_ENV !== "production") app_state = "Development@v1"; 

    app.listen(serverPort, () => console.warn(`✅ | Successfully hosted a new web application! \n💾 | Platform: nexz-srv@Ubuntu-21.1 \n📦 | Local URL: http://192.168.1.51:${serverPort}\n🏗️  | Product State: ${app_state}`))
    app.use(express.json({ limit: "12kb" }));
    app.use(express.urlencoded({ extended: true }));
    app.use(express.static(path.join(__dirname, "/webview/")));

    app.set('view engine', 'ejs');

    app.get('/', ( req: Request, res: Response ) => {
        const unsimplifiedData = fs.readFileSync(path.join(__dirname.replace("web", "").replace("public", ""), "/nohup.out")).toString().split("\n");
        unsimplifiedData.reverse();
        unsimplifiedData.shift();
        unsimplifiedData.reverse();
        res.render(path.join(__dirname, "/webview/index"), { innerFile: unsimplifiedData });
    });
})();

setInterval(( ) => {
    console.log(`[BPS] HEART BEAT SENT TO -> SERVER SIDE DISCOVERED!\n[NOSSRS] WAKED UP SSR!`);
}, 152000);