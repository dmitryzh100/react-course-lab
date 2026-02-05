import logo from '../../../../assets/logo.svg';

import './Logo.css';

const Logo = (): JSX.Element => {
  return <img src={logo} alt="Logo" className="logo" />;
};

export default Logo;
