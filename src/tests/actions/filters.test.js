import moment from 'moment'
import { sortByAmount, sortByDate, setEndDate, setStartDate,  setTextFilter } from '../../actions/filters'


test('should generate sortByAmount action object', () => {
    const action = sortByAmount()
    expect(action).toEqual({
        type: 'SORT_BY_AMOUNT'
    })
    
})

test('should generate sortByDate action object', () => {
    const action = sortByDate()
    expect(action).toEqual({
        type: 'SORT_BY_DATE'
    })
    
})

test('should generate setEndDate action object', () => {
    const action = setEndDate(moment(0))
    expect(action).toEqual({
        type: 'SET_END_DATE',
        endDate: moment(0)

    })
})

test('should generate setStartDate action object', () => {
    const action = setStartDate(moment(0))
    expect(action).toEqual({
        type: 'SET_START_DATE',
        startDate: moment(0)

    })
})

test('should generate setTExtFilter action for set value', () => {
    const text = 'Amount'
    const action = setTextFilter(text)
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: text
    })
    
})

test('should generate setTExtFilter action for default value', () => {
    const action = setTextFilter()
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: ''
    })
    
})





