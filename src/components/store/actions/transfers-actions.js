export const ALL_TRANSFERS = 'ALL_TRANSFERS';
export const WITHOUT_TRANSFERS = 'WITHOUT_TRANSFERS';
export const ONE_TRANSFER = 'ONE_TRANSFER';
export const TWO_TRANSFERS = 'TWO_TRANSFERS';
export const THREE_TRANSFERS = 'THREE_TRANSFERS';

export const allTransfersActions = () => ({
  type: ALL_TRANSFERS,
});

export const withoutTransfersActions = () => ({
  type: WITHOUT_TRANSFERS,
});

export const oneTransferActions = () => ({
  type: ONE_TRANSFER,
});

export const twoTransfersActions = () => ({
  type: TWO_TRANSFERS,
});

export const threeTransfersActions = () => ({
  type: THREE_TRANSFERS,
});
