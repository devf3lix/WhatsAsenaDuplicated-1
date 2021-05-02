const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const Axios = require('axios');
const Config = require('../config');
const pmpermit = require('./plugins/pmpermit');
const ds = "PM Permit iznini açar."
const dds = "PM Permit iznini kapatır."
Asena.addCommand({pattern: 'approve$', desc: ds, onlyPm: true}, (async (message, match) => { 
    pmpermit.permitacton(message.jid.split("@")[0])
    await message.client.sendMessage(message.jid,'PM İzni Verildi!', MessageType.text);
}));
Asena.addCommand({pattern: 'disapprove$', desc: dss, onlyPm: true}, (async (message, match) => { 
    pmpermit.nopermitacton(message.jid.split("@")[0])
    await message.client.sendMessage(message.jid,'PM İzni Kaldırıldı!', MessageType.text);
}));
