import { createStore } from 'redux'; 


//action generators

// const increamentCount = (payload = {}) => (
//     {
//         type: 'INCREMENT',
//         incrementBy: typeof payload.incrementBy === 'number' ? payload.incrementBy : 1
//     });

const increamentCount = ({incrementBy = 1} = {}) => ({
    type: 'INCREMENT',
    incrementBy
})

const decrementCount = ({decrementBy = 1} = {}) => ({
    type: 'DECREMENT',
    decrementBy
})

const resetCount = () => ({
    type: 'RESET',
    count: 0
})

const setCount = ({count} = {}) => ({
    type: 'SET',
    count
})

const countReducer = (state = { count: 0 }, action) => {
    switch (action.type){
        case 'INCREMENT':
            return {
                count: state.count + action.incrementBy
            };
        
        case 'DECREMENT':
            return {
                count: state.count - action.decrementBy
            };
        case "SET":
            return {
                count : action.count
            }   
    
        case 'RESET':
            return {
                count: 0
            }
        default:
            return state
    }
    }

const store = createStore(countReducer);

store.subscribe(() => {
    console.log(store.getState());
})

store.dispatch(increamentCount());

store.dispatch(increamentCount({incrementBy: 5}));

store.dispatch(decrementCount());

store.dispatch(decrementCount({decrementBy: 10}));

store.dispatch(resetCount());

store.dispatch(setCount({count: 120}));

// // manual way below, about using generators
// store.dispatch({
//     type: 'INCREMENT'
// });

// decrement count ACTION


// reset count ACTION



