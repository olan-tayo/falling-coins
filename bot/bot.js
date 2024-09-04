const { Telegraf, Markup } = require("telegraf");

const bot = new Telegraf("7538734070:AAHyqf1ejhzLwvIZe7QcLdRDRK4mNLoNuRg");
bot.command("start", (ctx) => {
  ctx.reply(
    "Welcome! Click the button below:",
    Markup.inlineKeyboard([
      Markup.button.url("Launch", "https://falling-coins.vercel.app/"),
    ])
  );
});
bot.command("quit", async (ctx) => {
  // Explicit usage
  await ctx.telegram.leaveChat(ctx.message.chat.id);

  // Using context shortcut
  await ctx.leaveChat();
});

bot.launch();
