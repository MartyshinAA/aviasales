import { SHOW_MORE_FIVE_TICKETS } from '../actions/tickets-to-show-actions';

export const ticketsToShowReducer = (state = {}, action) => {
  switch (action.type) {
    case SHOW_MORE_FIVE_TICKETS:
      return state + 5;
    default:
      return state;
  }
};
