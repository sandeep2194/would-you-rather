import { combineReducers } from "redux";
import polls from "./polls"
import users from "./users"

export default combineReducers({
    polls,
    users
})
