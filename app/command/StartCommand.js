class StartCommand {
    constructor(bot) {
        this.bot = bot
    }

    start(ctx) {
        ctx.reply("Start App")
    }

    exec() {
        this.bot.command('start', async (ctx) => {
            await ctx.setMyCommands([
                {command: 'start', description: 'Start App'},
                {command: 'help', description: 'this is help message bot'}
            ])
            await ctx.reply(`Hello ${ctx.from.first_name} ${ctx.from.last_name}`)
        })
    }

    help(ctx) {
        ctx.reply("this is help message bot")
    }
}
export default StartCommand