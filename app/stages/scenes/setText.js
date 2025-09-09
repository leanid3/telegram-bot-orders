import { Scenes } from "telegraf";

export const setText = new Scenes.BaseScene('setText')

setText.enter(ctx => ctx.reply('Введите ключевое слово'))

setText.on('message', (ctx)=>{
    ctx.session.newFilter.text = ctx.message.text

    ctx.reply(`Ключевое слово установлено - ${ctx.message.text}`)
})