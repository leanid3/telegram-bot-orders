class SetupCommand {
    constructor(bot){
        this.bot = bot
    }

    exec(){
        this.bot.command('setup', (ctx) => {
           return ctx.scene.enter('pickFilter')
        })
    }
}

export default SetupCommand