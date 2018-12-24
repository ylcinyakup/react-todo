import { combineReducers } from 'redux';

import filmsReducer from './filmsReducer';
import newFilmReducer from './newFilmReducer';

export default combineReducers({
    filmsReducer,
    newFilmReducer
});