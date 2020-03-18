import UserActions from "../Actions/UserActions";
import StoreData from "../Reducer/StoreUser";

const defaultState = StoreData;

const UserReducer = (state = defaultState, action) => {
  if ((action.type = "LOGIN_SUCCESS")) {
    state.user = action.payload;
  }

  return state;
};

export default UserReducer;
