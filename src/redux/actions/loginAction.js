import axios from 'axios';
import { API_BASE } from '../../config/env';

export const SIGNIN = "SIGNIN";
export const SIGNIN_PENDING = "SIGNIN_PENDING";
export const SIGNIN_FULFILLED = "SIGNIN_FULFILLED";
export const SIGNIN_REJECTED = "SIGNIN_REJECTED";

export const SIGNUP = "SIGNUP";
export const SIGNUP_PENDING = "SIGNUP_PENDING";
export const SIGNUP_FULFILLED = "SIGNUP_FULFILLED";
export const SIGNUP_REJECTED = "SIGNUP_REJECTED";

export function sendSignInRequest(username, password) {
	return dispatch => {
		dispatch({
			type: SIGNIN,
			payload: axios.post(`${API_BASE}/auth/signIn`, {
				usernameOrEmail: username,
				password: password

			})
				.then(result => result)
		})
	}
}

export function sendSignUpRequest(name, username, email, password) {
	return dispatch => {
		dispatch({
			type: SIGNUP,
			payload: axios.post(`${API_BASE}/auth/signUp`, {
				name: name,
				username: username,
				email: email,
				password: password
			})
				.then(result => result)
		})
	}
}