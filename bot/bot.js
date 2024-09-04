const { Telegraf } = require("telegraf");
const bot = new Telegraf("7538734070:AAHyqf1ejhzLwvIZe7QcLdRDRK4mNLoNuRg");

bot.start((ctx) => {
  ctx.reply("Welcome to Falling Coins :)");
});
bot.command("start", (ctx) => {
  // Create an inline keyboard with a button linking to a URL
  ctx.reply(
    "Welcome! Click the button below:",
    Markup.inlineKeyboard([
      Markup.button.url("Launch", "https://falling-coins.vercel.app/"),
    ])
  );
});

bot.launch();
