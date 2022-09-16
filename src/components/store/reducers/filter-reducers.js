import { CHEAPEST, FASTEST, OPTIMAL } from '../actions/filter-actions';

export const filterReducer = (state = {}, action) => {
  switch (action.type) {
    case CHEAPEST:
      if (state.cheapest) return state;
      return {
        cheapest: true,
        fastest: false,
        optimal: false,
      };
    case FASTEST:
      if (state.fastest) return state;
      return {
        cheapest: false,
        fastest: true,
        optimal: false,
      };
    case OPTIMAL:
      if (state.optimal) return state;
      return {
        cheapest: false,
        fastest: false,
        optimal: true,
      };
    default:
      return state;
  }
};
