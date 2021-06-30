export const INCREMENT_SCORE = 'INCREMENT_SCORE'
export const ADD_BOARD = 'ADD_BOARD'
export const INIT_LEADER_BOARD = 'INIT_LEADER_BOARD'


export function initLeaderBoard(leaderBoardObj) {
    return {
        type: INIT_LEADER_BOARD,
        leaderBoardObj,
    }
}
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