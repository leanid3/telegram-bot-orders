import HelpCommand from '../command/HelpCommand.js'
import StartCommand from '../command/StartCommand.js'

import { Telegraf, session } from 'telegraf'
import { SetupStage } from '../stages/setup/index.js'
import SetupCommand from '../command/setup.js'
import SearchCommand from '../command/search.js'
class BotTelegraf {
    constructor(token) {
        this.bot = new Telegraf(token)
        this.bot.use(session())
        this.bot.use(SetupStage.middleware())
        this.bot.catch((err, ctx) => {
            console.error("Error: ", err)
        })
    }


    launch() {
        this.commands = [new StartCommand(this.bot), new HelpCommand(this.bot), new SetupCommand(this.bot, new SearchCommand(this.bot))]
        this.commands.forEach(command => command.exec())
        this.bot.launch()
    }
}
export default BotTelegraf