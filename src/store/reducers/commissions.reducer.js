import { FILTERED_COMMISSION, SELECTED_COMMISSION } from "../actions/commissions.action";

import { COMMISSION_DATA } from "../../data/CommissionData";

const initialState = {
  commissions: COMMISSION_DATA,
  filteredCommission: [],
  selected: null,
};

const CommissionReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECTED_COMMISSION:
      return {
        ...state,
        selected: state.commissions.find(
          commission => commission.id === action.commissionId
        ),
      };
    case FILTERED_COMMISSION:
      return {
        ...state,
        filteredCommission: state.commissions.filter(
          commission => commission.category === action.categoryId
        ),
      };
    default:
      return state;
  }
};

export default CommissionReducer;