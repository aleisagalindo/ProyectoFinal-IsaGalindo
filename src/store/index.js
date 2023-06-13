import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import AuthReducer from "./reducers/auth.reducer";
import CategoryReducer from "./reducers/category.reducer";
import CommissionReducer from "./reducers/commissions.reducer";
import HomeworksReducer from './reducers/homeworks.reducer'

const RootReducer = combineReducers({
  categories: CategoryReducer,
  commissions: CommissionReducer,
  auth: AuthReducer,
  homeworks: HomeworksReducer,
});

export default createStore(RootReducer, applyMiddleware(thunk));