import { configureStore } from '@reduxjs/toolkit';

import { isLoadingReducer } from './reducers/is-loading-reducer';
import { allTicketsReducer } from './reducers/all-tickets-reducer';
import { ticketsToShowReducer } from './reducers/tickets-to-show-reducer';
import { filterReducer } from './reducers/filter-reducers';
import { transfersReducer } from './reducers/transfers-reducer';

const preloadedState = {
  isLoadingReducer: true,
  allTicketsReducer: [],
  ticketsToShowReducer: 5,
  filterReducer: {
    cheapest: true,
    fastest: false,
    optimal: false,
  },
  transfersReducer: {
    allTransfers: true,
    withoutTransfers: true,
    oneTransfer: true,
    twoTransfers: true,
    threeTransfers: true,
  },
};

export const store = configureStore({
  reducer: { isLoadingReducer, allTicketsReducer, ticketsToShowReducer, filterReducer, transfersReducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: true,
      immutableCheck: false,
      serializableCheck: false,
    }),
  devTools: true,
  preloadedState,
});
