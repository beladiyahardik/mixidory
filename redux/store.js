import { combineReducers, applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { LoadingReducer } from "./reducer/LoadingReducer";
import { isLoginReducer, LoginReducer } from "./reducer/LoginReducer";
import { GetAllPostReducer } from "./reducer/PostReducer";

const middleware = [thunk];

const rootReducer = combineReducers({
  isLoading: LoadingReducer,
  islogin: isLoginReducer,
  login: LoginReducer,
  allPost: GetAllPostReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleware)),
);

export default store;
