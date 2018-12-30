import axios from 'axios';
import { API_BASE } from '../../config/env';

export const FETCH_FILMS = "FETCH_FILMS";
export const FETCH_FILMS_PENDING = "FETCH_FILMS_PENDING";
export const FETCH_FILMS_FULFILLED = "FETCH_FILMS_FULFILLED";
export const FETCH_FILMS_REJECTED = "FETCH_FILMS_REJECTED";

export function fetchFilms( page, pageSize, sortDirection, sortParameter ) {
	return dispatch => {
		dispatch({
			type: FETCH_FILMS,
			payload: axios.get(`${API_BASE}/films/`, {
				params: {
					page: page,
					pageSize: pageSize,
					sortDirection: sortDirection,
					sortParameter: sortParameter
				}
			})
				.then(result => ({ films: result.data, totalFilmsCount: result.headers['total-films-count'] }))
		})
	}
}