import 'normalize.css';
// import 'antd/dist/antd.min.css';
import './app.scss';

import Logo from '../logo';
import Transfers from '../transfers';
import Filter from '../filter';

const App = () => {
  return (
    <>
      <Logo />
      <div className="wrapper">
        <Transfers />
        <Filter />
      </div>
    </>
  );
};

export default App;
