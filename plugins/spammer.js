/* Codded by @phaticusthiccy
Telegram: t.me/phaticusthiccy
Instagram: www.instagram.com/kyrie.baran
*/

const Asena = require('../events');
const {MessageType, Mimetype} = require('@adiwajshing/baileys');
const Language = require('../language');
const Lang = Language.getString('spammer');

let totalMaxSpamCount = 5000


Asena.addCommand({ pattern: 'spam ?(.*)', fromMe: true, desc: Lang.SPAM_DESC }, (async (message, match) => {

    if (match[1] === '') {
        return await message.client.sendMessage(message.jid,Lang.NEED_WORD, MessageType.text);
    }


    if (totalMaxSpamCount !== 0) {
        for (let index = 0; index < totalMaxSpamCount; index++) {
            await message.client.sendMessage(message.jid, `${match[1]}`, MessageType.text)
        }
    }


}));

Asena.addCommand({ pattern: 'killspam', fromMe: true, desc: Lang.STOP_SPAMDESC }, (async (message, match) => {

    totalMaxSpamCount = 0
    return await message.client.sendMessage(message.jid,Lang.STOP_SPAM, MessageType.text);

}));
