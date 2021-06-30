import { combineReducers } from "redux";
import polls from "./polls"
import users from "./users"
import leaderBoard from "./leaderBoard"

export default combineReducers({
    polls,
    users,
    leaderBoard,
})
