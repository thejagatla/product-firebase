import { createStore, applyMiddleware } from "redux";
import ProductReducer from "./Reducer/ProductReducer";
import thunk from "redux-thunk";

//const middleware = [thunk];

const store = createStore(ProductReducer, applyMiddleware(thunk));
export default store;
