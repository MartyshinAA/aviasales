import { AviasalesGetInfo } from '../../../services/aviasales-get-info-service';

import { isLoading } from './is-loading-actions';

export const ADD_ALL_TICKETS = 'ADD_ALL_TICKETS';

const allTicketsActions = (tickets) => ({
  type: ADD_ALL_TICKETS,
  tickets,
});

export const loadTickets = () => (dispatch, getState) => {
  AviasalesGetInfo().then((response) => {
    response().then((res) => {
      dispatch(isLoading(false));
      dispatch(allTicketsActions(res));
    });
  });
};
