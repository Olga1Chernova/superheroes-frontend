import { Link } from 'react-router-dom';

import { ReactComponent as Icon } from '../../images/content/superhero_icon.svg';
import css from './Header.module.css';
const Header = () => {
  return (
    <header className={css.header}>
      <div className={css.iconContainer}>
        <Link to="/" className={css.iconLink}>
          <Icon className={css.icon} width={100} height={100} />
        </Link>
        <span className={css.text}>
          Your favorite superheroes in one place.
        </span>
      </div>
    </header>
  );
};

export default Header;
