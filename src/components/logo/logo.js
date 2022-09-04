import { Image } from 'antd';

import './logo.scss';
import logo from './Logo.png';

const Logo = () => {
  return <Image className="logo" preview={false} src={logo} alt="logo" />;
};

export default Logo;
