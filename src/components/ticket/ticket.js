import classes from './ticket.module.scss';

const Ticket = () => {
  return (
    <div className={classes.ticket}>
      <div className={classes['ticket-wrapper']}>
        <div className={classes['ticket__title']}>
          <div className={classes['ticket__price']}>13 400 Р</div>
          <div className={classes['ticket__logo']}></div>
        </div>
        <div className={classes['ticket__line--1']}>
          <div className={classes['from-to']}>
            MOW - HKT
            <div className={classes['from-to--info']}>10:45 - 08:00</div>
          </div>
          <div className={classes['in-road']}>
            В ПУТИ
            <div className={classes['in-road--info']}>21ч 15м</div>
          </div>
          <div className={classes.transfers}>
            2 ПЕРЕСАДКИ
            <div className={classes['transfers--info']}>HKG, JNB</div>
          </div>
        </div>
        <div className={classes['ticket__line--2']}>
          <div className={classes['from-to']}>
            MOW - HKT
            <div className={classes['from-to--info']}>11:20 - 00:50</div>
          </div>
          <div className={classes['in-road']}>
            В ПУТИ
            <div className={classes['in-road--info']}>13ч 30м</div>
          </div>
          <div className={classes.transfers}>
            1 ПЕРЕСАДКА
            <div className={classes['transfers--info']}>HKG</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ticket;
