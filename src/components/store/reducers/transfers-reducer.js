import {
  ALL_TRANSFERS,
  WITHOUT_TRANSFERS,
  ONE_TRANSFER,
  TWO_TRANSFERS,
  THREE_TRANSFERS,
} from '../actions/transfers-actions';

export const transfersReducer = (state = {}, action) => {
  const { allTransfers, withoutTransfers, oneTransfer, twoTransfers, threeTransfers } = state;

  const newState = (state, transferName, transfer) => {
    const stateCopy = { ...state };
    delete stateCopy[transferName];
    delete stateCopy.allTransfers;
    const restTransfers = !Object.values(stateCopy).includes(false);
    if (transfer || allTransfers) {
      return {
        ...state,
        allTransfers: false,
        [transferName]: false,
      };
    } else if (!transfer && restTransfers) {
      return {
        ...state,
        allTransfers: true,
        [transferName]: true,
      };
    } else {
      return {
        ...state,
        [transferName]: true,
      };
    }
  };

  switch (action.type) {
    case ALL_TRANSFERS: {
      if (allTransfers) {
        return {
          ...state,
          allTransfers: false,
          withoutTransfers: false,
          oneTransfer: false,
          twoTransfers: false,
          threeTransfers: false,
        };
      } else {
        return {
          ...state,
          allTransfers: true,
          withoutTransfers: true,
          oneTransfer: true,
          twoTransfers: true,
          threeTransfers: true,
        };
      }
    }
    case WITHOUT_TRANSFERS:
      return newState(state, 'withoutTransfers', withoutTransfers);
    case ONE_TRANSFER:
      return newState(state, 'oneTransfer', oneTransfer);
    case TWO_TRANSFERS:
      return newState(state, 'twoTransfers', twoTransfers);
    case THREE_TRANSFERS:
      return newState(state, 'threeTransfers', threeTransfers);
    default:
      return state;
  }
};
