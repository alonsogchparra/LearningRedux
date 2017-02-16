var redux = require('redux');

console.log('Starting redux example');

// Pure function
function add(a, b) {
    return a + b;
}

function changeProp(obj) {
    return {
        ...obj,
        name: 'Jen'
    };
    // obj.name = 'Jen';
    // return obj;
}

var startingValue = {
    name:'Alonso',
    age: '27'
};

var res = changeProp(startingValue);
console.log(startingValue);
console.log(res);