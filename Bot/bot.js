const { Telegraf } = require("telegraf");
const bot = new Telegraf("7538734070:AAHyqf1ejhzLwvIZe7QcLdRDRK4mNLoNuRg");

console.log(bot);
// bot.start((ctx) => {
//   ctx.reply("t.me/fallingcoins_bot/flyingcoins.");
// });

// bot.help((ctx) => {
//   ctx.reply("Available commands:\n/newarticle - Create a new article");
// });

bot.launch();
