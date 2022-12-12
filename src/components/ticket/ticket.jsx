import humanizeDuration from 'humanize-duration';

import classes from './ticket.module.scss';

const Ticket = (props) => {
  let { price, carrier } = props;

  const {
    origin: originThere,
    destination: destinationThere,
    date: dateThere,
    duration: durationThere,
  } = props.segments[0];
  const {
    origin: originBack,
    destination: destinationBack,
    date: dateBack,
    duration: durationBack,
  } = props.segments[1];

  const formatedDate = (date) => new Date(date);

  const stopsTitle = (stops) => {
    if (stops.length === 1) {
      return `${stops.length} ПЕРЕСАДКА`;
    } else if (stops.length > 1 && stops.length < 5) {
      return `${stops.length} ПЕРЕСАДКИ`;
    } else {
      return `${stops.length} ПЕРЕСАДОК`;
    }
  };
  const stopsTitleThere = stopsTitle(props.segments[0].stops);
  const stopsTitleBack = stopsTitle(props.segments[1].stops);

  const stops = (thereOrBack) => [...props.segments[thereOrBack].stops].join(', ');
  const stopsThere = stops(0);
  const stopsBack = stops(1);

  const durationHoursToMs = (duration) => duration * 60000;
  const durationFormated = humanizeDuration.humanizer({
    round: true,
    language: 'shortRu',
    languages: {
      shortRu: {
        d: () => 'д',
        h: () => 'ч',
        m: () => 'м',
      },
    },
    delimiter: ' ',
    spacer: '',
    units: ['d', 'h', 'm'],
    serialComma: false,
  });

  const durationFormatedThere = durationFormated(durationHoursToMs(durationThere));
  const durationFormatedBack = durationFormated(durationHoursToMs(durationBack));
  const departureTime = (time) =>
    formatedDate(time).toLocaleString('ru-RU', {
      timeStyle: 'short',
    });

  const departureTimeThere = departureTime(dateThere);
  const arrivalTime = (date, duration) =>
    new Date(formatedDate(date).getTime() + durationHoursToMs(duration)).toLocaleString('ru-RU', {
      timeStyle: 'short',
    });

  const arrivalTimeThere = arrivalTime(dateThere, durationThere);

  const departureTimeBack = departureTime(dateBack);
  const arrivalTimeBack = arrivalTime(dateBack, durationBack);
  return (
    <li className={classes.ticket}>
      <div className={classes['ticket__title']}>
        <div className={classes['ticket__price']}>{price.toLocaleString()} ₽</div>
        <div className={classes.logo}>
          <img className={classes['ticket__logo']} src={`//pics.avs.io/99/36/${carrier}.png`} alt="carrier-logo"></img>
        </div>
      </div>
      <div className={classes['ticket__line--1']}>
        <div className={classes['from-to']}>
          {originThere} - {destinationThere}
          <div className={classes['from-to--info']}>
            {departureTimeThere} - {arrivalTimeThere}
          </div>
        </div>
        <div className={classes['in-road']}>
          В ПУТИ
          <div className={classes['in-road--info']}>{durationFormatedThere}</div>
        </div>
        <div className={classes.transfers}>
          {stopsTitleThere}
          <div className={classes['transfers--info']}>{stopsThere}</div>
        </div>
      </div>
      <div className={classes['ticket__line--2']}>
        <div className={classes['from-to']}>
          {originBack} - {destinationBack}
          <div className={classes['from-to--info']}>
            {departureTimeBack} - {arrivalTimeBack}
          </div>
        </div>
        <div className={classes['in-road']}>
          В ПУТИ
          <div className={classes['in-road--info']}>{durationFormatedBack}</div>
        </div>
        <div className={classes.transfers}>
          {stopsTitleBack}
          <div className={classes['transfers--info']}>{stopsBack}</div>
        </div>
      </div>
    </li>
  );
};

export default Ticket;
