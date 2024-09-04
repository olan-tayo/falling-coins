const { Telegraf } = require("telegraf");
const bot = new Telegraf("7538734070:AAHyqf1ejhzLwvIZe7QcLdRDRK4mNLoNuRg");

bot.start((ctx) => {
  ctx.reply("Welcome! Click the button below:");
});

bot.launch();
