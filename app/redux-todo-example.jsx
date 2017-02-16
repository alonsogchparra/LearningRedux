var redux = require('redux');

console.log('Starting todo redux example');

var stateDefault = {
    searchText: '',
    showCompleted: false,
    todos: []
};
var reducer = (state = stateDefault, action) => {
    return state;
};

var store = redux.createStore(reducer);

console.log('currentState', store.getState());

