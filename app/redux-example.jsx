var redux = require('redux');

console.log('Starting redux example');

// // Pure function
// function add(a, b) {
//     return a + b;
// }

// function changeProp(obj) {
//     return {
//         ...obj,
//         name: 'Jen'
//     };
//     // obj.name = 'Jen';
//     // return obj;
// }

// var startingValue = {
//     name:'Alonso',
//     age: '27'
// };
//
// var res = changeProp(startingValue);
// console.log(startingValue);
// console.log(res);


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
var store = redux.createStore(reducer);

var currentSate = store.getState();
console.log('currentState', currentSate);

store.dispatch({
    type: 'CHANGE_NAME',
    name: 'Andrew'
});
console.log('Name should be Andrew', store.getState());


