import cNames from 'classnames/bind';

import Ticket from '../ticket';
import ShowMoreBtn from '../show-more-btn';

import classes from './filter.module.scss';
const bindClassNames = cNames.bind(classes);
const classNames = bindClassNames('cheapest', 'active');

const Filter = () => {
  return (
    <div className={classes['filter-wrapper']}>
      <div className={classes['tickets-type']}>
        <ul className={classes['tickets-type__ul']}>
          <li className={classes['tickets-type__li']}>
            <button name="cheapest" className={classNames}>
              САМЫЙ ДЕШЁВЫЙ
            </button>
          </li>
          <li className={classes['tickets-type__li']}>
            <button name="fastest" className={classes.fastest}>
              САМЫЙ БЫСТРЫЙ
            </button>
          </li>
          <li className={classes['tickets-type__li']}>
            <button name="optimal" className={classes.optimal}>
              ОПТИМАЛЬНЫЙ
            </button>
          </li>
        </ul>
      </div>
      <Ticket />
      <Ticket />
      <Ticket />
      <Ticket />
      <Ticket />
      <ShowMoreBtn />
    </div>
  );
};

export default Filter;
