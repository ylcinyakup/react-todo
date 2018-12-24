import axios from 'axios';
import { API_BASE } from '../../config/env';

export const NEW_FILM = "NEW_FILM";
export const NEW_FILM_PENDING = "NEW_FILM_PENDING";
export const NEW_FILM_FULFILLED = "NEW_FILM_FULFILLED";
export const NEW_FILM_REJECTED = "NEW_FILM_REJECTED";

export function onNewFilmSubmit({title, cover}){
    return dispatch => {
        dispatch ({
            type: NEW_FILM,
            payload: axios.post(`${API_BASE}/films/`,{
                title,
                cover
            })
        })
    }
}