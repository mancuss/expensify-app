import { addExpense, editExpense, removeExpense } from "../../actions/expenses";


test("Should setup remove expense ACTION object", ()=> {
    const action = removeExpense({id: "123abc" })
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE', 
        id: '123abc'
    })
})

test("Should setup edit expense ACTION object", () => {
    const action = editExpense('123abc', {note: "New Note Value"})
    expect(action).toEqual({
        type: 'EDIT_EXPENSE', 
        id: '123abc',
        updates: {note: "New Note Value"}
    })
})

test("Should setup add expense ACTION object with provided values", ()=> {
    const expenseData = {
        description: 'desc',
        note: 'note',
        amount: 123,
        createdAt: 123
      }
    const action = addExpense(expenseData)
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    })
})

test("Should setup add expense ACTION object with default values", ()=> {
    const action = addExpense()
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            id: expect.any(String),
            description: '',
            note:'',
            amount: 0,
            createdAt: 0
        }
    })
})