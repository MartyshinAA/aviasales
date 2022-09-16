import { useSelector, useDispatch } from 'react-redux';

import {
  allTransfersActions,
  withoutTransfersActions,
  oneTransferActions,
  twoTransfersActions,
  threeTransfersActions,
} from '../store/actions/transfers-actions';

import classes from './transfers.module.scss';

const Transfers = () => {
  const { allTransfers, withoutTransfers, oneTransfer, twoTransfers, threeTransfers } = useSelector(
    (state) => state.transfersReducer
  );
  const dispatch = useDispatch();
  return (
    <div className={classes.transfers}>
      <div className={classes.transfers__title}>КОЛИЧЕСТВО ПЕРЕСАДОК</div>
      <form action="to the hell" className={classes['form-transitions']}>
        <ul>
          <li className={classes['transfer-wrapper']}>
            <label className={classes.checkbox}>
              <input
                className={classes.checkbox__input}
                type="checkbox"
                id="all"
                name="all"
                checked={allTransfers}
                onChange={() => dispatch(allTransfersActions())}
              ></input>
              <span className={classes.checkbox__span}></span>
              Все
            </label>
          </li>
          <li className={classes['transfer-wrapper']}>
            <label className={classes.checkbox}>
              <input
                className={classes.checkbox__input}
                type="checkbox"
                id="0-transfers"
                name="0-transfers"
                checked={withoutTransfers}
                onChange={() => dispatch(withoutTransfersActions())}
              ></input>
              <span className={classes.checkbox__span}></span>
              Без пересадок
            </label>
          </li>
          <li className={classes['transfer-wrapper']}>
            <label className={classes.checkbox}>
              <input
                className={classes.checkbox__input}
                type="checkbox"
                id="1-transfer"
                name="1-transfer"
                checked={oneTransfer}
                onChange={() => dispatch(oneTransferActions())}
              ></input>
              <span className={classes.checkbox__span}></span>1 пересадка
            </label>
          </li>
          <li className={classes['transfer-wrapper']}>
            <label className={classes.checkbox}>
              <input
                className={classes.checkbox__input}
                type="checkbox"
                id="2-transfers"
                name="2-transfers"
                checked={twoTransfers}
                onChange={() => dispatch(twoTransfersActions())}
              ></input>
              <span className={classes.checkbox__span}></span>2 пересадки
            </label>
          </li>
          <li className={classes['transfer-wrapper']}>
            <label className={classes.checkbox}>
              <input
                className={classes.checkbox__input}
                type="checkbox"
                id="3-transfers"
                name="3-transfers"
                checked={threeTransfers}
                onChange={() => dispatch(threeTransfersActions())}
              ></input>
              <span className={classes.checkbox__span}></span>3 пересадки
            </label>
          </li>
        </ul>
      </form>
    </div>
  );
};

export default Transfers;
