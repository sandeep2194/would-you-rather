import { CREATE_POLL, UPDATE_POLL } from '../actions/polls'

export default function polls(state = {}, action) {
    const oldState = { ...state }
    switch (action.type) {
        case CREATE_POLL:
            return {
                ...oldState,
                [action.Id]: {
                    id: action.Id,
                    authorId: action.authorId,
                    results: {
                        option1: 0,
                        option2: 0,
                    },
                    ...action.options
                }
            }
        case UPDATE_POLL:
            let results = { ...oldState[action.pollId].results }
            if (action.option === 0) {
                results.option1 = results.option1 + 1
            }
            if (action.option === 1) {
                results.option2 = results.option2 + 1
            }
            oldState[action.pollId].results = results
            return { ...oldState }
        default:
            return state
    }
}