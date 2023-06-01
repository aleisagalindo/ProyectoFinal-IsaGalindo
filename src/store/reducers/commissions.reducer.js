import { FILTERED_COMMISSION_GROUP, SELECTED_COMMISSION_GROUP } from "../actions/commissions.action";

import { COMMISSION_DATA } from "../../data/CommissionData";

const initialState = {
  commissions: COMMISSION_DATA,
  filteredCommissionGroup: [],
  selected: null,
};

const CommissionReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECTED_COMMISSION_GROUP:
      return {
        ...state,
        selected: state.commissions.find(
          commission => commission.id === action.commissionGroupId
        ),
      };
    case FILTERED_COMMISSION_GROUP:
      return {
        ...state,
        filteredCommissionGroup: state.commissions.filter(
          commission => commission.category === action.categoryId
        ),
      };
    default:
      return state;
  }
};

export default CommissionReducer;