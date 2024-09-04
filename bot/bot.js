const { Telegraf } = require("telegraf");
const bot = new Telegraf("YOUR_BOT_TOKEN");

bot.start((ctx) => {
  ctx.reply(
    "Welcome to your Telegram bot! Use /help to see available commands."
  );
});

bot.launch();

// Markup.inlineKeyboard([
//       Markup.button.url("Launch", "https://falling-coins.vercel.app/"),
//     ])
