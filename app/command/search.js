import { getVacanciesByRegion, getVacancies } from "../api/vacancies.js"

export default class SearchCommand {
    constructor(bot) {
        this.bot = bot
    }

    exec() {
        try {
            this.bot.command('search', async (ctx) => {
                const {regionCode, ...query} = ctx.session.filter || {}

                const {vacancies} = regionCode 
                ? await getVacanciesByRegion(regionCode, query) 
                : await getVacancies(query)
                if(!vacancies.length){
                    return ctx.reply('No vacancies found')
                }
                ctx.reply(vacancies)
                vacancies.forEach(vacancy => {
                    ctx.replyWitchMarkdown(buildMessage(vacancy.name))
                });
            })
            
        } catch (error) {
            console.error(error)
        }
    }
}

const buildMessage = (vacancy) => {
    return `
    ${vacancy["job-name"]}\\n
    ${vacancy.salary || 'Не указана'}\\n
    ${vacancy.company.name || 'Не указана'}\\n
    ${vacancy.vac_url}\\n
    `
}