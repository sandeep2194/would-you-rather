
import { v4 as uuidv4 } from 'uuid';

export const SIGNUP = 'SIGNUP'
export const LOGIN = 'LOGIN'
export const LOGOUT = 'LOGOUT'

function login(id) {
    return {
        type: LOGIN,
        id,
    }
}

function logout(id) {
    return {
        type: LOGOUT,
        id
    }
}

function signup(user, Id) {
    return {
        type: SIGNUP,
        user,
        Id,
    }
}

export function handleSignup(user) {
    return (dispatch) => {
        const Id = uuidv4()
        dispatch(signup(user, Id))
    }
}

export function handleLogin(id) {
    return (dispatch) => {
        dispatch(login(id))
    }
}

export function handleLogout() {
    return (dispatch) => {
        dispatch(logout())
    }
}
