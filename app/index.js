import dotenv from 'dotenv'
import BotTelegraf from './object/BotTelegraf.js'
dotenv.config()

const bot = new BotTelegraf(process.env.TELEGRAM_BOT_TOKEN)

// bot.start((ctx) => ctx.reply("Start App"))
// bot.help((ctx) => ctx.reply("this is help message bot"))

bot.launch()