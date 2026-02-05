import Logo from './components/Logo/Logo';
import Button from '../../common/Button/Button';

import './Header.css';

const Header = (): JSX.Element => {
  return (
    <header className="header">
      <Logo />

      <nav className="header__nav">
        <Button buttonText="Login" />
      </nav>
    </header>
  );
};

export default Header;
