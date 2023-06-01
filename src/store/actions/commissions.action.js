export const SELECTED_COMMISSION_GROUP = "SELECTED_COMMISSION_GROUP";
export const FILTERED_COMMISSION_GROUP = "FILTERED_COMMISSION_GROUP";

export const selectedCommissionGroup = id => ({
  type: SELECTED_COMMISSION_GROUP,
  commissionGroupId: id,
});

export const filteredCommissionGroup = id => ({
  type: FILTERED_COMMISSION_GROUP,
  categoryId: id,
});