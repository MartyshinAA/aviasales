import 'normalize.css';
import './app.scss';

import { useEffect } from 'react';
import { Provider, useDispatch } from 'react-redux';

import { store } from '../store/store';
import { loadTickets } from '../store/actions/all-tickets-actions';
import Logo from '../logo';
import Transfers from '../transfers';
import Filter from '../filter';

const App = () => {
  const WrapperUseEffect = () => {
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(loadTickets());
    }, []);
  };

  return (
    <Provider store={store}>
      <WrapperUseEffect />
      <Logo />
      <div className="wrapper">
        <Transfers />
        <Filter />
      </div>
    </Provider>
  );
};

export default App;
