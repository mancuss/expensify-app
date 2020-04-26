import filtersReducers from '../../reducers/filters'
import moment from 'moment'

test('should setup default filter values', () => {
    const state = filtersReducers(undefined, {type: '@@INIT'})
    expect(state).toEqual({
        text:'',
        sortBy:'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    })
    
})

test('should set sortby to amount', () => {
    const state = filtersReducers(undefined, { type: 'SORT_BY_AMOUNT'})
    expect(state.sortBy).toBe('amount')
})

test('should set sortby to date', () => {
    const currentState = {
        text: '',
        startDate: undefined,
        endDate:undefined,
        sortBy: 'amount'
    }
    const action ={ type: 'SORT_BY_DATE'}
    const state = filtersReducers(currentState, action)
    expect(state.sortBy).toBe("date")
})

