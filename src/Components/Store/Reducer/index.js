import { combineReducers } from "redux";
import StoreUser from "./StoreUser";

// combining the couple of reducers data into single redux Store.
const allReducers = combineReducers({
  users: StoreUser
});

export default allReducers;
