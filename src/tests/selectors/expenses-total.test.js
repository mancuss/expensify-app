import selectExpensesTotal from '../../selectors/expenses-total'
import expenses from '../fixtures/expenses'

test('should return 0 if no expesnes', () => {
    const result = selectExpensesTotal([])    
    expect(result).toBe(0)
})

test('should return correct value for multiple expenses', () => {
    const result = selectExpensesTotal(expenses)    
    expect(result).toBe(114195)
})

test('should return correct value for single expesne', () => {
    const result = selectExpensesTotal([expenses[0]])    
    expect(result).toBe(expenses[0].amount)
})
