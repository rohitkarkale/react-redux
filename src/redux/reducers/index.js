import { combineReducers } from "redux"
import CountReducer from "./CounterReucer"
import authReducer from "./authReducer"

const rootReducer = combineReducers ({
    counter : CountReducer,
    auth :authReducer
})
export default rootReducer