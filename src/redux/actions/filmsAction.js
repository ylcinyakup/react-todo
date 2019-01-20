import axios from './authAxios';

export const FETCH_FILMS = "FETCH_FILMS";
export const FETCH_FILMS_PENDING = "FETCH_FILMS_PENDING";
export const FETCH_FILMS_FULFILLED = "FETCH_FILMS_FULFILLED";
export const FETCH_FILMS_REJECTED = "FETCH_FILMS_REJECTED";

export function fetchFilms(page, pageSize, sortDirection, sortParameter, token) {
	return dispatch => {
		dispatch({
			type: FETCH_FILMS,
			payload: axios.get(`/films/`, {
				params: {
					page: page,
					pageSize: pageSize,
					sortDirection: sortDirection,
					sortParameter: sortParameter
				}
			}
			)
				.then(result => ({ films: result.data, totalFilmsCount: result.headers['total-films-count'] }))
		})
	}
}