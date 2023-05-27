import { combineReducers, createStore } from "redux";

import CategoryReducer from "./reducers/category.reducer";
import CommissionReducer from "./reducers/commissions.reducer";

const RootReducer = combineReducers({
  categories: CategoryReducer,
  commissions: CommissionReducer,
});

export default createStore(RootReducer);