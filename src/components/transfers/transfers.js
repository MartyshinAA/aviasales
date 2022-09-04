import classes from './transfers.module.scss';

const Transfers = () => {
  return (
    <div className={classes.transfers}>
      <div className={classes.transfers__title}>КОЛИЧЕСТВО ПЕРЕСАДОК</div>
      <form action="to the hell" className={classes['form-transitions']}>
        <ul>
          <li className={classes['transfer-wrapper']}>
            <label className={classes.checkbox}>
              <input className={classes.checkbox__input} type="checkbox" id="all" name="all"></input>
              <span className={classes.checkbox__span}></span>
              Все
            </label>
          </li>
          <li className={classes['transfer-wrapper']}>
            <label className={classes.checkbox}>
              <input className={classes.checkbox__input} type="checkbox" id="1-transfer" name="1-transfer"></input>
              <span className={classes.checkbox__span}></span>
              Без пересадок
            </label>
          </li>
          <li className={classes['transfer-wrapper']}>
            <label className={classes.checkbox}>
              <input className={classes.checkbox__input} type="checkbox" id="all" name="1-transfer"></input>
              <span className={classes.checkbox__span}></span>1 пересадка
            </label>
          </li>
          <li className={classes['transfer-wrapper']}>
            <label className={classes.checkbox}>
              <input className={classes.checkbox__input} type="checkbox" id="all" name="1-transfer"></input>
              <span className={classes.checkbox__span}></span>2 пересадки
            </label>
          </li>
          <li className={classes['transfer-wrapper']}>
            <label className={classes.checkbox}>
              <input className={classes.checkbox__input} type="checkbox" id="1-transfer" name="1-transfer"></input>
              <span className={classes.checkbox__span}></span>3 пересадки
            </label>
          </li>
        </ul>
      </form>
    </div>
  );
};

export default Transfers;
