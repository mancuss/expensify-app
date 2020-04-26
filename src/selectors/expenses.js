import moment from 'moment'

const getVisableExpenses = (expenses, {text, sortBy, startDate, endDate}) => {
    return expenses.filter((expense) => {
        const createdAtMoment = moment(expense.createdAt)
        const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment, 'day') : true
        const endDateMatch = endDate ? endDate.isSameOrAfter(createdAtMoment, 'day') : true
        //const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate // this is wrong, cause if someone put a string as this it will be true
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase())



        return startDateMatch && endDateMatch && textMatch
    }).sort((a, b) => {
        if (sortBy === 'date'){
            return a.createdAt < b.createdAt ? 1 : -1 // if you want to a as "winning argument -1, if b, use 1"
        } else if (sortBy === 'amount') {
            return a.amount < b.amount ? 1 : -1
        }

    })
}

export default getVisableExpenses