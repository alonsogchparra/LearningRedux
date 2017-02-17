var redux = require('redux');

console.log('Starting redux example');

var reducer = (state = {name: 'Anonymous'}, action) => {
    // state = state || {name: 'Anonymous'};

    switch (action.type) {
        case 'CHANGE_NAME':
            return {
                ...state,
                name: action.name
            };
        default:
            return state;
    }
};
var store = redux.createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// Subsribe to changes
var unsubscribe = store.subscribe(() => {
   var state = store.getState();

    console.log('Name is ', state.name);
    document.getElementById('app').innerHTML = state.name;
});
// unsubscribe();

var currentSate = store.getState();
console.log('currentState', currentSate);

store.dispatch({
    type: 'CHANGE_NAME',
    name: 'Andrew'
});



store.dispatch({
   type: 'CHANGE_NAME',
    name: 'Emily'
});


