import { combineReducers, applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { LoadingReducer } from "./reducer/LoadingReducer";
import { isLoginReducer, LoginReducer } from "./reducer/LoginReducer";

const middleware = [thunk];

const rootReducer = combineReducers({
  isLoading:LoadingReducer,
  islogin: isLoginReducer,
  login: LoginReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleware)),
);

export default store;
