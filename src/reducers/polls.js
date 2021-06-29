import { CREATE_POLL } from '../actions/polls'

export default function polls(state = {}, action) {
    const oldState = { ...state }
    switch (action.type) {
        case CREATE_POLL:
            return {
                ...oldState,
                [action.Id]: {
                    id: action.authorId,
                    ...action.options
                }
            }
        default:
            return state
    }
}