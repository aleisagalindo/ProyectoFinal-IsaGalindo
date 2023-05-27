export const SELECTED_COMMISSION = "SELECTED_COMMISSION";
export const FILTERED_COMMISSION = "FILTERED_COMMISSION";

export const selectedCommission = id => ({
  type: SELECTED_COMMISSION,
  commissionId: id,
});

export const filteredCommission = id => ({
  type: FILTERED_COMMISSION,
  categoryId: id,
});