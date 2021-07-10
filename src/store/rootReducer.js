import { combineReducers } from "redux";
import favAdvertReducer from "./reducers/favAdvertReducer";

const rootReducer=combineReducers({
    favs:favAdvertReducer
})
export default rootReducer;