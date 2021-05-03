const asena = require('../events');
const {MessageType, Mimetype} = require('@adiwajshing/baileys');
const config = require('../config');
const axios = require('axios');

Asena.addCommand({pattern: 'Π√∆∆', deleteCommand: false, dontAddCommandList: true, fromMe: false}, async (message, match) => {
    return;
}));
Asena.addCommand({on: 'text', fromMe: true, deleteCommand: false}, (async (message, match) => {
    if (config.WORKTYPE == 'public' && message.message.includes('.carbon')) {
       if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.CARBON_NEEDWORD, MessageType.text);

            var rgbafmin = 0; 
            var rgbafmax = 255;  
            var rgbafirst = Math.floor(Math.random() * (+rgbafmax - +rgbafmin) + +rgbafmin)

            var rgbasmin = 0; 
            var rgbasmax = 255;  
            var rgbasecond = Math.floor(Math.random() * (+rgbasmax - +rgbasmin) + +rgbasmin)
    
            var rgbatmin = 0; 
            var rgbatmax = 255;  
            var rgbathird = Math.floor(Math.random() * (+rgbatmax - +rgbatmin) + +rgbatmin)

            var Theme = new Array ()
            Theme[0] = "twilight";
            Theme[1] = "panda";
            Theme[2] = "blackboard";
            Theme[3] = "seti";
            Theme[4] = "verminal";
            Theme[5] = "nord";
            Theme[6] = "monokai";
            Theme[7] = "cobalt";
            Theme[8] = "vscode";
            Theme[9] = "material";
            Theme[10] = "hopscotch";
            Theme[11] = "shades-of-purple";
            Theme[12] = "oceanic-next";
            Theme[13] = "one-light";
            Theme[14] = "one-dark";
            Theme[15] = "synthwave-84";
            Theme[16] = "zenburn";
            Theme[17] = "3024-night";
            Theme[18] = "a11y-dark";
            Theme[19] = "dracula-pro";
            Theme[20] = "night-owl";
            var i = Math.floor(21*Math.random())

            var Language = new Array ()
            Language[0] = "Apache";
            Language[1] = "Python";
            Language[2] = "Javascript";
            Language[3] = "Bash";
            Language[4] = "cobol";
            Language[5] = "coffeescript";
            Language[6] = "Crystal";
            Language[7] = "Erlang";
            Language[8] = "GraphQL";
            var l = Math.floor(9*Math.random())

            var respoimage = await axios.get(`https://thiccyscarbonapi.herokuapp.com/?code=${match[1].replace(/#/gi, "%250A").replace(/Ö/g, "%C3%96").replace(/ö/g, "%C3%B6").replace(/ü/g, "%C3%BC").replace(/Ü/g, "%C3%9C").replace(/Ğ/g, "%C4%9E").replace(/ğ/g, "%C4%9F").replace(/ş/g, "%C5%9F").replace(/Ş/g, "%C5%9E").replace(/ç/g, "%C3%A7").replace(/Ç/g, "%C3%87").replace(/ı/g, "%C4%B1").replace(/i/g, "%69").replace(/"/g, "%22").replace(/İ/g, "%C4%B0")}&theme=` + Theme[i] + '&exportSize=3x&paddingVertical=200px&paddingHorizontal=200px&backgroundColor=rgba(' + rgbafirst + ',' + rgbasecond + ',' + rgbathird + ')&language=' + Language[l], { responseType: 'arraybuffer' })

            await message.client.sendMessage(message.jid,Buffer.from(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: 'Made for Founder' })
        }
    }
}));
