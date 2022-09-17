import classNames from 'classnames';
import { useSelector, useDispatch } from 'react-redux';
import React from 'react';

import Spinner from '../spinner';
import Ticket from '../ticket';
import ShowMoreBtn from '../show-more-btn';
import { cheapestActions, fastestActions, optimalActions } from '../store/actions/filter-actions';

import classes from './filter.module.scss';

const Filter = () => {
  const dispatch = useDispatch();
  const { transfersReducer } = useSelector((state) => state);
  const { cheapest, fastest, optimal } = useSelector((state) => state.filterReducer);
  const { allTicketsReducer } = useSelector((state) => state);
  const { ticketsToShowReducer } = useSelector((state) => state);
  const { isLoading } = useSelector((state) => state);

  let viewTickets = [];

  for (const property in transfersReducer) {
    if (property === 'allTransfers') {
      transfersReducer[property] ? (viewTickets.all = [...allTicketsReducer]) : (viewTickets = []);
    } else if (property === 'withoutTransfers') {
      const without = [...allTicketsReducer].filter(
        (ticket) => ticket.segments[0].stops.length === 0 && ticket.segments[1].stops.length === 0
      );
      transfersReducer[property] ? (viewTickets.without = without) : delete viewTickets.without;
    } else if (property === 'oneTransfer') {
      const one = [...allTicketsReducer].filter(
        (ticket) => ticket.segments[0].stops.length === 1 && ticket.segments[1].stops.length === 1
      );
      transfersReducer[property] ? (viewTickets.one = one) : delete viewTickets.one;
    } else if (property === 'twoTransfers') {
      const two = [...allTicketsReducer].filter(
        (ticket) => ticket.segments[0].stops.length === 2 && ticket.segments[1].stops.length === 2
      );
      transfersReducer[property] ? (viewTickets.two = two) : delete viewTickets.two;
    } else if (property === 'threeTransfers') {
      const three = [...allTicketsReducer].filter(
        (ticket) => ticket.segments[0].stops.length === 3 && ticket.segments[1].stops.length === 3
      );
      transfersReducer[property] ? (viewTickets.three = three) : delete viewTickets.three;
    } else {
      console.log('Ok');
    }
  }

  //пересадки

  if (viewTickets.all) {
    viewTickets = viewTickets.all;
  } else {
    Object.values(viewTickets).forEach((item) => viewTickets.push(...item));
  }

  //сортировка

  if (cheapest) {
    //самый дешёвый
    viewTickets.sort((a, b) => (a.price > b.price ? 1 : -1));
  } else if (fastest) {
    //самый быстрый
    viewTickets.sort(
      (a, b) => a.segments[0].duration + a.segments[1].duration > b.segments[0].duration + b.segments[1].duration
    );
  }

  let ticketsOnScreeen = [...viewTickets].slice(0, ticketsToShowReducer);

  let ticket;
  if (ticketsOnScreeen.length === 0) {
    console.log(classes['not-found']);
    ticket = 'Рейсов, подходящих под заданные фильтры, не найдено';
    <>Рейсов, подходящих под заданные фильтры, не найдено</>;
  } else {
    ticket = ticketsOnScreeen.map((ticket, idx) => {
      return (
        <React.Fragment key={idx}>
          <Ticket {...ticket} />
        </React.Fragment>
      );
    });
  }

  return (
    <div className={classes['filter-wrapper']}>
      <div className={classes['tickets-type']}>
        <ul className={classes['tickets-type__ul']}>
          <li className={classes['tickets-type__li']}>
            <button
              name="cheapest"
              className={classNames('cheapest', { [classes.active]: cheapest })}
              onClick={() => dispatch(cheapestActions())}
            >
              САМЫЙ ДЕШЁВЫЙ
            </button>
          </li>
          <li className={classes['tickets-type__li']}>
            <button
              name="fastest"
              className={classNames('fastest', { [classes.active]: fastest })}
              onClick={() => dispatch(fastestActions())}
            >
              САМЫЙ БЫСТРЫЙ
            </button>
          </li>
          <li className={classes['tickets-type__li']}>
            <button
              name="optimal"
              className={classNames('optimal', { [classes.active]: optimal })}
              onClick={() => dispatch(optimalActions())}
            >
              ОПТИМАЛЬНЫЙ
            </button>
          </li>
        </ul>
      </div>
      <ul className={classes['tickets']}>{isLoading ? <Spinner /> : ticket}</ul>
      {viewTickets.length >= ticketsToShowReducer && <ShowMoreBtn />}
    </div>
  );
};

export default Filter;
