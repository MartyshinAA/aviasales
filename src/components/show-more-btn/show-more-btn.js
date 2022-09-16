import { useDispatch } from 'react-redux';

import { ticketsToShowActions } from '../store/actions/tickets-to-show-actions';

import classes from './show-more-btn.module.scss';

const ShowMoreBtn = () => {
  const dispatch = useDispatch();
  return (
    <button name="more-tickets" className={classes['show-more-btn']} onClick={() => dispatch(ticketsToShowActions())}>
      ПОКАЗАТЬ ЕЩЁ 5 БИЛЕТОВ!
    </button>
  );
};

export default ShowMoreBtn;
