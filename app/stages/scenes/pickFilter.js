import {
    Markup, Scenes
} from "telegraf"

export const pickFilter = new Scenes.BaseScene('pickFilter')

//обработчик ввода фильтров
pickFilter.enter((ctx) => {
    ctx.session.newFilter = ctx.session.newFilter || {}

    ctx.reply('Please select a filter', Markup.inlineKeyboard([
        [Markup.button.callback('Ключевое слово', 'text'),
        Markup.button.callback('Код региона', 'regionCode')],
        [Markup.button.callback("Готово", "done")]
    ]))
})

//обработчик ввода ключевого слова
pickFilter.action('text', (ctx) => {
    ctx.deleteMessage()
    ctx.scene.enter("setText")
})

//обработчик ввода кода региона
pickFilter.action('regionCode', (ctx) => {
    ctx.deleteMessage()
    ctx.scene.enter("setRegionCode")
})

//обработчик нажатия на кнопку "Готово"
pickFilter.action('done', (ctx) => {
    if (Object.keys(ctx.session.newFilter).length) {
        ctx.session.filter = { ...ctx.session.filter, ...ctx.session.newFilter }
        ctx.session.newFilter = {}

        return ctx.editMessageText("Фильтры обновлены")
    } else {
        return ctx.deleteMessage()
    }
})