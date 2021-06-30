import { initPoll } from "./polls";
import { getInitialData } from "../utils/api"
import { initUser } from './users'
import { initLeaderBoard } from './leaderBoard'

export function handleInitialData(data) {
    return (dispatch) => {
        getInitialData().then((data) => {
            dispatch(initPoll(data.body.polls))
            dispatch(initUser(data.body.users))
            dispatch(initLeaderBoard(data.body.leaderBoard))
        })
    }
}
