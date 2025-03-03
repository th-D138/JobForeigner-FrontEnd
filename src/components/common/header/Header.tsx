import { Link } from 'react-router-dom';
import styles from './header.module.scss';
import { navItems } from '@/lib/constants/navItems';
import SearchForm from './SearchForm';
import LanguageButton from './LanguageButton';
import Button from '../button/Button';

export default function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.left}>
        <div className={styles.logo}>
          <Link to="/">JobForeigner</Link>
        </div>
        <ul className={styles.nav}>
          {navItems.map(({ id, name, link }) => (
            <li key={id}>
              <Link to={link}>{name}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.right}>
        <SearchForm />
        <LanguageButton />
        <Link to="/login">
          <Button size="small">로그인</Button>
        </Link>
        <Link to="/signUp">
          <Button size="small" color="#ffffff" background="#4335a7">
            회원가입
          </Button>
        </Link>
      </div>
    </div>
  );
}
