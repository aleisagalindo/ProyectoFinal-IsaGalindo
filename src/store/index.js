import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import AuthReducer from "./reducers/auth.reducer";
import CategoryReducer from "./reducers/category.reducer";
import CommissionReducer from "./reducers/commissions.reducer";

const RootReducer = combineReducers({
  categories: CategoryReducer,
  commissions: CommissionReducer,
  auth: AuthReducer,
});

export default createStore(RootReducer, applyMiddleware(thunk));