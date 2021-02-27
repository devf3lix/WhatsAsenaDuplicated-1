/* Copyright (C) 2020 Yusuf Usta.

Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.

WhatsAsena - Yusuf Usta
Developer & Co-Founder - Phaticusthiccy
*/

const Asena = require('../events');
const {MessageType, Mimetype, MessageOptions} = require('@adiwajshing/baileys');
const {spawnSync} = require('child_process');
const Config = require('../config');
const chalk = require('chalk');
const fs = require('fs');

const Language = require('../language');
const Lang = Language.getString('system_stats');

Asena.addCommand({pattern: 'alive', fromMe: true, desc: Lang.ALIVE_DESC}, (async (message, match) => {
    if (Config.ALIVEMSG == 'default') {

        await message.client.sendMessage(
            message.jid, 
            fs.readFileSync("/root/WhatsAsenaDuplicated/media/gif/20210209-WA0058.mp4"),
            MessageType.video, 
            { mimetype: Mimetype.gif, caption: "```WhatsAsena Founder Thiccy İçin Çalışıyor!```\n\n*Version:* ```0.22.7 - Dev```\n*Grade:* ```Founder```\n*AI Packages:* ```Xteam / Eva / DeepAI / WhatsAsena / RTDA```\n*Node Version:* ```1.2.7```" }
        )
    }
    else {
        await message.client.sendMessage(message.jid,Config.ALIVEMSG + '\n*Powered by WhatsAsena*', MessageType.text);
    }
}));

Asena.addCommand({pattern: 'sysd', fromMe: true, desc: Lang.SYSD_DESC}, (async (message, match) => {
    const child = spawnSync('neofetch', ['--stdout']).stdout.toString('utf-8')
    await message.sendMessage(
        '```' + child + '```', MessageType.text
    );
}));
