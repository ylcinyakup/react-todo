
import { SIGNIN, SIGNIN_PENDING, SIGNIN_FULFILLED, SIGNIN_REJECTED
    ,SIGNUP, SIGNUP_PENDING, SIGNUP_FULFILLED, SIGNUP_REJECTED} from '../actions/loginAction';


const initialState = {
    fetching: false,
    token: '',
    tokenType: '',
    status: '',
    error: {}
}

export default (state = initialState, action) => {
    switch (action.type) {
        case SIGNIN:
            return {
                ...state,
                fetching: true
            };
         case SIGNIN_PENDING:
            return {
                ...state,
                fetching: true
            };
        case SIGNIN_FULFILLED:
            if (action.payload.data.accessToken && action.payload.data.tokenType) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('Authorization', action.payload.data.tokenType.concat(' ').concat(action.payload.data.accessToken));
            }
            return {
                ...state,
                tokenType: action.payload.data.tokenType,
                token: action.payload.data.accessToken,
                fetching: false,
                status: action.payload.status
            };
        case SIGNIN_REJECTED:
            return {
                ...state,
                error: action.payload,
                fetching: false,
                status: action.payload.status
            };

        case SIGNUP:
            return {
                ...state,
                fetching: true
            };
         case SIGNUP_PENDING:
            return {
                ...state,
                fetching: true
            };
        case SIGNUP_FULFILLED:
            return {
                ...state,
                signupanswer: action.payload,
                status: action.payload.status,
                fetching: false
            };
        case SIGNUP_REJECTED:
            return {
                ...state,
                error: action.payload,
                status: action.payload.status,
                fetching: false
            };

        default:
            return state;
    }
}