import {createStore, combineReducers} from 'redux'
import { v4 as uuid } from 'uuid'
import { StaticRouter } from 'react-router-dom'
console.log("Redux expensify")

//ADD_EXPENSE
const addExpense = ({ description = '', note ='', amount = 0, createdAt = 0} = {}) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        description,
        note,
        amount,
        createdAt
    }
})

//REMOVE_EXPENSE
const removeExpense = ({ id } = {}) => ({
    type: "REMOVE_EXPENSE",
    id
})

//EDIT_EXPENSE
const editExpense = ({id}, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
})
//SET_TEXT_FILTER
const setTextFilter = ({text = ""} = {}) => ({
    type: 'SET_TEXT_FILTER',
    text
})

//SORT_BY_DATE

const sortByDate = () => ({
    type: 'SORT_BY_DATE'
})
//SORT_BY_AMOUNT

const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT'
})
//SET_START_DATE
const setStartDate = (startDate) => ({
    type: 'SET_START_DATE',
    startDate
})
//SET_END_DATE
const setEndDate = (endDate) => ({
    type: 'SET_END_DATE',
    endDate
})
// EXPENSES REDUCER

const expensesReducerDefaultState = []
const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch (action.type){
        case 'ADD_EXPENSE':
            return [
                ...state,
                action.expense
            ];
        case 'REMOVE_EXPENSE':
            return state.filter((expense) => expense.id !== action.id)
        case 'EDIT_EXPENSE':
            return state.map((expense) =>{
                if(expense.id === action.id) { //find the corrent expense
                    return {
                        ...expense, //spread it 
                        ...action.updates //spread updates, so new values will override the values from "above"
                    }
                } else {
                    expense
                }
            })
        default:
            return state
    }
}

const filtersReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
}
const filtersReducer = (state = filtersReducerDefaultState, action) => {
    switch (action.type){
        case 'SET_TEXT_FILTER':
            return {
                ...state,
                text: action.text
            }
        case 'SORT_BY_AMOUNT':
            return {
                ...state,
                sortBy: "amount"
            }
        case 'SORT_BY_DATE':
            return {
                ...state,
                sortBy: "date"
            }
        case 'SET_START_DATE':
            return {
                ...state,
                startDate: action.startDate
            }
        case 'SET_END_DATE':
            return {
                ...state,
                endDate: action.endDate
            }
        default:
            return state
    }

}

// get visable expenses

const getVisableExpenses = (expenses, {text, sortBy, startDate, endDate}) => {
    return expenses.filter((expense) => {
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate
        const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate // this is wrong, cause if someone put a string as this it will be true
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

//store creation 

const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filtersReducer
    })
    )

store.subscribe(() => {
    const state = store.getState()
    const visableExpenses = getVisableExpenses(state.expenses, state.filters)
    console.log(visableExpenses)
})

const expenseOne = store.dispatch(addExpense(
    {
        description: "Rent",
        amount: 100,
        createdAt: 1000
    }
))

const expenseTwo = store.dispatch(addExpense(
    {
        description: "Coffee",
        amount: 1000,
        createdAt: 11000
    }
))

// store.dispatch(removeExpense({id: expenseOne.expense.id}))
// store.dispatch(editExpense({id:expenseTwo.expense.id }, { amount: 500 }))
// store.dispatch(setTextFilter({ text: "rent"}))
// store.dispatch(setTextFilter())
store.dispatch(sortByAmount())
store.dispatch(sortByDate())
//store.dispatch(setStartDate(125))
// store.dispatch(setStartDate())
// store.dispatch(setEndDate(1250))
// store.dispatch(setEndDate())

const demoState = {
    expenses: [
        {
            id: 'random',
            description: 'rent',
            note: 'can be something longer than description',
            amount: 54500, // representing in pennies... without decimal point
            createdAt: 0
        }
    ],
    filters: {
        text: 'rent',
        sortBy: 'amount', //date or ammout 
        startDate: undefined,
        endDate: undefined
    }
};