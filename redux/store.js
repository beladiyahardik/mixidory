import { combineReducers, applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { isLoginReducer, LoginReducer } from "./reducer/LoginReducer";

const middleware = [thunk];

const rootReducer = combineReducers({
  islogin: isLoginReducer,
  login: LoginReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleware)),
);

export default store;
