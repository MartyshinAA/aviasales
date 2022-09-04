import classes from './show-more-btn.module.scss';

const ShowMoreBtn = () => {
  return (
    <button name="more-tickets" className={classes['show-more-btn']}>
      ПОКАЗАТЬ ЕЩЁ 5 БИЛЕТОВ!
    </button>
  );
};

export default ShowMoreBtn;
