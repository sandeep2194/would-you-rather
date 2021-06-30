import { INCREMENT_SCORE, ADD_BOARD } from '../actions/leaderBoard'

export default function leaderBoard(state = {}, action) {
    let oldState = { ...state }
    let user = { ...oldState[action.userId] }
    switch (action.type) {
        case ADD_BOARD:
            oldState[action.userId] = { userId: action.userId, score: 0 }
            oldState.board = []
            return { ...oldState }
        case INCREMENT_SCORE:
            let newScore = user.score + 1
            user.score = newScore
            oldState[action.userId] = user
            return { ...oldState }
        default:
            return state
    }
}