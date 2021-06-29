import { SIGNUP, LOGIN, LOGOUT } from '../actions/users'

export default function users(state = {}, action) {
    const oldState = { ...state }
    switch (action.type) {
        case SIGNUP:
            return {
                ...oldState,
                [action.Id]: {
                    id: action.Id,
                    ...action.user
                }
            }
        case LOGIN:
            oldState.authedUser = action.id
            return { ...oldState }
        case LOGOUT:
            oldState.authedUser = ''
            return { ...oldState }
        default:
            return state
    }
}