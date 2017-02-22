var redux = require('redux');

console.log('Starting redux example');

// Name reducer and action generators
// ----------------------

var nameReducer = (state = 'Anonymous', action) => {
    switch (action.type) {
        case 'CHANGE_NAME':
            return action.name;
        default:
            return state;
    }
};

var changeName = (name) => {
    return {
        type: 'CHANGE_NAME',
        name
    }
};

// Hobbies reducer and action generators
// ----------------------

var nextHobbyId = 1;
var hobbiesReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_HOBBY':
            return [
                ...state,
                {
                    id: nextHobbyId++,
                    hobby: action.hobby
                }
            ];
        case 'REMOVE_HOBBY':
            return state.filter((hobby) => hobby.id !== action.id);
        default:
            return state;
    }
};


var addHobby = (hobby) => {
    return {
        type: 'ADD_HOBBY',
        hobby
    };
};

var removeHobby = (id) => {
    return {
        type: 'REMOVE_HOBBY',
        id
    };
};

// Movies reducer and action generators
// ----------------------

var nextMovieId = 1;
var moviesReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_MOVIE':
            return [
                ...state,
                {
                    id: nextMovieId,
                    movie: action.movie
                }

            ];
        case 'REMOVE_MOVIE':
            return state.filter((movie) => movie.id !== action.id);
        default:
            return state;


    }
};

var addMovie = (title, genre) => {
    return {
        type: 'ADD_MOVIE',
        title,
        genre
    };
};

var removeMovie = (id) => {
    return {
        type: 'REMOVE_MOVIE',
        id
    };
};

var reducer = redux.combineReducers({
    name: nameReducer,
    hobbies: hobbiesReducer,
    movies: moviesReducer
});

var store = redux.createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// Subsribe to changes
var unsubscribe = store.subscribe(() => {
    var state = store.getState();

    console.log('Name is ', state.name);
    document.getElementById('app').innerHTML = state.name;

    console.log('New State ', store.getState());
});
// unsubscribe();

var currentSate = store.getState();
console.log('currentState', currentSate);

store.dispatch(changeName('Andrew'));
store.dispatch(addHobby('Running'));
store.dispatch(addHobby('Walking'));
store.dispatch(removeHobby(2));

store.dispatch(changeName('Emily'));

store.dispatch(addMovie('Rocky', 'Drama'));
store.dispatch(addMovie('Rambo', 'Action'));
store.dispatch(removeMovie(1));


