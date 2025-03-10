import { Link, NavLink } from 'react-router-dom';
import styles from './header.module.scss';
import { navItems } from '@/lib/constants/navItems';
import SearchForm from './SearchForm';
import LanguageButton from './LanguageButton';
import Button from '../button/Button';
import { title as Logo } from '@/lib/constants/serviceName';

export default function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.left}>
        <div className={styles.logo}>
          <Link to="/">{Logo}</Link>
        </div>
        <ul className={styles.nav}>
          {navItems.map(({ id, name, link }) => (
            <li key={id}>
              <NavLink
                to={link}
                className={({ isActive }) => (isActive ? styles.active : '')}
              >
                {name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.right}>
        <SearchForm />
        <LanguageButton />
        <Link to="/login">
          <Button>로그인</Button>
        </Link>
        <Link to="/signUp">
          <Button>회원가입</Button>
        </Link>
      </div>
    </div>
  );
}
