import { Link, useLocation } from 'react-router-dom';
import styles from './bookmarkTab.module.scss';
import clsx from 'clsx';

const paths = {
  companies: '/profile/liked-companies',
  jobs: '/profile/scraps',
};

export default function BookmarkTabs() {
  const { pathname } = useLocation();

  return (
    <div className={styles.container}>
      <nav className={styles.nav}>
        <Link
          to={paths.companies}
          className={clsx(styles.tab, {
            [styles.active]: pathname === paths.companies,
          })}
        >
          관심 기업
        </Link>
        <Link
          to={paths.jobs}
          className={clsx(styles.tab, {
            [styles.active]: pathname === paths.jobs,
          })}
        >
          스크랩한 공고
        </Link>
      </nav>
    </div>
  );
}
