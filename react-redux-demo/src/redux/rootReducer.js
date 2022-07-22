import eggReducer from "./egg/eggReducer";
import chickenReducer from "./chicken/chickenReducer";
import userReducer from "./user/userReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    egg: eggReducer,
    chicken: chickenReducer,
    user: userReducer
})

export default rootReducer