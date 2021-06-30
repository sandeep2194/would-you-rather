import { SIGNUP, LOGIN, LOGOUT, UPDATE_POLLS_CREATED, UPDATE_POLLS_ANSWERED, INIT_USER } from '../actions/users'

export default function users(state = {}, action) {
    const oldState = { ...state }
    const user = oldState[action.userId]
    switch (action.type) {
        case SIGNUP:
            return {
                ...oldState,
                [action.Id]: {
                    id: action.Id,
                    polls_answered: [],
                    polls_created: [],
                    ...action.user
                }
            }
        case LOGIN:
            oldState.authedUser = action.id
            return { ...oldState }
        case LOGOUT:
            oldState.authedUser = ''
            return { ...oldState }
        case UPDATE_POLLS_CREATED:
            let pollsCreated = [...user.polls_created]
            pollsCreated.push(action.pollId)
            user.polls_created = pollsCreated
            oldState[action.userId] = user
            return { ...oldState }
        case UPDATE_POLLS_ANSWERED:
            let pollsAnswered = [...user.polls_answered]
            pollsAnswered.push(action.pollId)
            user.polls_answered = pollsAnswered
            oldState[action.userId] = user
            return { ...oldState }
        case INIT_USER:
            return { ...action.users }
        default:
            return state
    }
}