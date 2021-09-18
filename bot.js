const { Telegraf }  = require('telegraf');
const axios = require('axios');

const bot = new Telegraf('2022897128:AAEt7h3d5aFPsxOFqngIHdu9s_XTJmBaUqc');

bot.start(ctx => {
    ctx.reply('Welcome');
})
bot.help(ctx => ctx.reply('Send me a sticker'))
bot.on('sticker', (ctx) => {
    
    ctx.reply('👍')
    console.log(ctx.chat.id);
})
bot.hears('hi', ctx => ctx.reply('Hey there'))
bot.launch()

// bot.command('test', ctx => {
//     bot.telegram.sendMessage(ctx.chat.id, 'Welcome',
//     {
//         reply_markup: {
//             inline_keyboard: [
//                 [
//                     { text: 'one', call_back: 'one' }
//                 ]
//             ]
//         }
//     });
//     console.log(ctx.chat.id);
// });

// bot.launch();