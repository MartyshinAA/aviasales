import { ADD_ALL_TICKETS } from '../actions/all-tickets-actions';

export const allTicketsReducer = (state = {}, action) => {
  switch (action.type) {
    case ADD_ALL_TICKETS:
      return action.tickets;
    default:
      return state;
  }
};
