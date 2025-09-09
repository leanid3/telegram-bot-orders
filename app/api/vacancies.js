const getVacancies = async (filter) => {

    try {
        
        const query = new URLSearchParams(filter) ?? {limit: 10}
        
        const response = await fetch(`${process.env.API_URL}/vacancies?${query}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        console.log(response)
        return response.json()
    } catch (error) {
        console.error(error)
        return null
    }
}

const getVacanciesByRegion = async (regionCode, params) => {
    try {
        const query = new URLSearchParams(params) ?? {limit: 10}

        const response = await fetch(`${process.env.API_URL}/vacancies/region/${regionCode}?${query}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
        })
        console.log(response)
        return response.json()
    } catch (error) {
        console.error(error)
        return null
    }
}

export { getVacancies, getVacanciesByRegion }