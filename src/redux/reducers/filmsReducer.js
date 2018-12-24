
import { FETCH_FILMS, FETCH_FILMS_PENDING, FETCH_FILMS_FULFILLED, FETCH_FILMS_REJECTED } from '../actions/filmsAction';


const initialState = {
    fetching: false,
    films: [],
    error: {}
}

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_FILMS:
            return {
                ...state,
                fetching: true
            };
         case FETCH_FILMS_PENDING:
            return {
                ...state,
                fetching: true
            };
        case FETCH_FILMS_FULFILLED:
            return {
                ...state,
                films: action.payload,
                fetching: false
            };
        case FETCH_FILMS_REJECTED:
            return {
                ...state,
                error: action.payload,
                fetching: false
            };
        default:
            return state;
    }
}