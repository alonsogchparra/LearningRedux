var redux = require('redux');

console.log('Starting redux example');

var stateDefault = {
    name: 'Anonymous',
    hobbies: [],
    movies: []
};

var nextHobbyId = 1;
var nextMovieId = 1;

var reducer = (state = stateDefault, action) => {
    // state = state || {name: 'Anonymous'};

    switch (action.type) {
        case 'CHANGE_NAME':
            return {
                ...state,
                name: action.name
            };

        case 'ADD_HOBBY':
            return {
                ...state,
                hobbies: [
                    ...state.hobbies,
                    {
                        id: nextHobbyId++,
                        hobby: action.hobby
                    }
                ]
            };

        case 'REMOVE_HOBBY':
            return {
                ...state,
                hobbies: state.hobbies.filter((hobby) => hobby.id !== action.id)
            };

        case 'ADD_MOVIE':
            return {
                ...state,
                movies: [
                    ...state.movies,
                    {
                        id: nextMovieId++,
                        title: action.title,
                        genre: action.genre

                    }
                ]

            };

        case 'REMOVE_MOVIE':
            return {
                ...state,
                movies: state.movies.filter((movie) => movie.id !== action.id)
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

    console.log('New State ', store.getState());
});
// unsubscribe();

var currentSate = store.getState();
console.log('currentState', currentSate);

store.dispatch({
    type: 'CHANGE_NAME',
    name: 'Andrew'
});

store.dispatch({
    type: 'ADD_HOBBY',
    hobby: 'Running'
});

store.dispatch({
    type: 'ADD_HOBBY',
    hobby: 'Walking'
});

store.dispatch({
    type: 'REMOVE_HOBBY',
    id: 2
});

store.dispatch({
    type: 'CHANGE_NAME',
    name: 'Emily'
});

store.dispatch({
    type: 'ADD_MOVIE',
    title: 'Rocky',
    genre: 'Drama'
});

store.dispatch({
    type: 'ADD_MOVIE',
    title: 'Rambo',
    genre: 'Action'
});

store.dispatch({
    type: 'REMOVE_MOVIE',
    id: 2
});


