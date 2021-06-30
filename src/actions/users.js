import { v4 as uuidv4 } from 'uuid';
import { addBoard } from './leaderBoard'
import { createUser } from '../utils/api'
export const SIGNUP = 'SIGNUP'
export const LOGIN = 'LOGIN'
export const LOGOUT = 'LOGOUT'
export const UPDATE_POLLS_ANSWERED = 'UPDATE_POLLS_ANSWERED'
export const UPDATE_POLLS_CREATED = 'UPDATE_POLLS_CREATED'
export const INIT_USER = 'INIT_USER'

export function initUser(users) {
    return {
        type: INIT_USER,
        users,
    }
}

export function updatePollsCreated(userId, pollId) {
    return {
        type: UPDATE_POLLS_CREATED,
        userId,
        pollId,
    }
}

export function updatePollsAnswered(userId, pollId) {
    return {
        type: UPDATE_POLLS_ANSWERED,
        userId,
        pollId,
    }
}


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
        createUser({ id: Id, ...user, polls_answered: [], polls_created: [] })
        dispatch(signup(user, Id))
        dispatch(addBoard(Id))
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
