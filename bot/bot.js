const { Telegraf } = require("telegraf");
const bot = new Telegraf("7538734070:AAHyqf1ejhzLwvIZe7QcLdRDRK4mNLoNuRg");

bot.start((ctx) => {
  ctx.reply(
    "Welcome to your Telegram bot! Use /help to see available commands."
  );
});

bot.launch();
