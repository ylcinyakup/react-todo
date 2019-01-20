import { combineReducers } from 'redux';

import filmsReducer from './filmsReducer';
import newFilmReducer from './newFilmReducer';
import loginReducer from './loginReducer';

export default combineReducers({
    filmsReducer,
    newFilmReducer,
    loginReducer
});