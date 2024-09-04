const { Telegraf } = require("telegraf");
const { message } = require("telegraf/filters");

const bot = new Telegraf("7538734070:AAHyqf1ejhzLwvIZe7QcLdRDRK4mNLoNuRg");
bot.start((ctx) => ctx.reply("t.me/fallingcoins_bot/flyingcoins"));

bot.launch();
