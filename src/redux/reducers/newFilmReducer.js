import { NEW_FILM, NEW_FILM_PENDING, NEW_FILM_FULFILLED, NEW_FILM_REJECTED } from '../actions/newFilmAction';

const initialState = {
    fetching: false,
    done: false,
    films: [],
    error: {}
}

export default (state = initialState, action) => {
    switch (action.type) {
        case NEW_FILM:
            return {
                ...state,
                fetching: true,
            };
         case NEW_FILM_PENDING:
            return {
                ...state,
                fetching: true
            };
        case NEW_FILM_FULFILLED:
            return {
                ...state,
                fetching: false,
                done: true,
                movies: action.payload
            };
        case NEW_FILM_REJECTED:
            return {
                ...state,
                fetching: false,
                error: action.payload
            };
        default:
            return initialState;
    }
}