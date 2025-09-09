class HelpCommand {
    constructor(bot){
        this.bot = bot
    }

    exec(){
        this.bot.command('help', async (ctx) =>{
            const commands = await ctx.getMyCommands()
            const info = commands.reduce(
                (acc,val)=> `${acc}\n${val.command} - ${val.description}`
                )
            await ctx.reply(info)
        })
    }
}
export default HelpCommand