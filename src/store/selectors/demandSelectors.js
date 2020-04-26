import { createSelector } from "reselect";

const getRoot = store => store.demand;

export const getDemands = createSelector(
  getRoot,
  state => state.demands
);

export const getShortDemands = createSelector(
  getRoot,
  state => state.shortDemands
);

export const getFilterDemands = createSelector(
  getRoot,
  state => state.shortDemands.filter(demand => demand.category === state.selectedCategory)
);

export const getSelectedCategory = createSelector(
  getRoot,
  state => state.selectedCategory
);

export const getLoading = createSelector(
  getRoot,
  state => state.loading
);

export const getError = createSelector(
  getRoot,
  state => state.error
);

export const DEMAND_SELECTORS = {
  getLoading,
  getError,
  getDemands,
  getShortDemands,
  getFilterDemands,
  getSelectedCategory
};
