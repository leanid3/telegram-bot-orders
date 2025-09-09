import { Scenes } from "telegraf";

export const setRegionCode = new Scenes.BaseScene('setRegionCode')

setRegionCode.enter(ctx => ctx.reply('Введите код региона'))

setRegionCode.on('message', (ctx)=>{
    ctx.session.newFilter.regionCode = ctx.message.text

    ctx.reply(`Код региона установлен - ${ctx.message.text}`)
})