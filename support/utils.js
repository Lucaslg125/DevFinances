export const format = (value) => {
    let formattedValue

    formattedValue = value.replace(',', '.')
    formattedValue = Number(formattedValue.split('$')[1].trim())

    formattedValue = String(value).includes('-') ? - formattedValue : formattedValue

    return formattedValue
}

export const randomNumber = () => {
    return Math.floor(Math.random() * 101)
}

export const prepareLocalStorage = (Win) => {

    window.localStorage.setItem('dev.finances:transactions', JSON.stringify({
        {
            description: "Entrada",
            amount: randomNumber() * 100,
            date: "23/10/2022"
        },

        {
            descripton: 'Suco Kapo',
            amount: - (randomNumber() * 100),
            date: "12/03/2021"
        }
    })

    )

}