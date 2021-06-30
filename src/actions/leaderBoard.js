export const INCREMENT_SCORE = 'INCREMENT_SCORE'
export const ADD_BOARD = 'ADD_BOARD'

export function addBoard(userId) {
    return {
        type: ADD_BOARD,
        userId,
    }
}
export function incrementScore(userId) {
    return {
        type: INCREMENT_SCORE,
        userId,
    }
}