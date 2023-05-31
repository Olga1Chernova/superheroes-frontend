import css from './Logo.module.css';
import { Link } from 'react-router-dom';

import logo from '../../images/logo/logo.jpg';

const Logo = () => {
  return (
    <Link className={css.logo} to="/">
      <img src={logo} alt='Logo'/>
    </Link>
  );
};

export default Logo;
