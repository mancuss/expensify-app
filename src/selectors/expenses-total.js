const selectExpensesTotal = (expenses = []) => {
    return expenses
        .map((expense) => expense.amount)
        .reduce((acc, amount) => acc+amount, 0)
}


export default selectExpensesTotal