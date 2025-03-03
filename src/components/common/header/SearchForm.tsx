import { Search } from 'lucide-react';
import styles from './searchForm.module.scss';

export default function SearchForm() {
  return (
    <form className={styles.searchForm}>
      <label className={styles.searchButton}>
        <Search size={16} color='#b3b3b3' />
      </label>
      <input placeholder='채용 공고 검색하기' />
    </form>
  );
}
