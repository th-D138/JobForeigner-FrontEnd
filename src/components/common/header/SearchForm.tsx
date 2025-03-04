import { Search } from 'lucide-react';
import styles from './searchForm.module.scss';

export default function SearchForm() {
  return (
    <form className={styles.searchForm}>
      <button className={styles.searchButton} type="submit">
        <Search size={16} color="#b3b3b3" />
      </button>
      <input name="search" placeholder="채용 공고 검색하기" />
    </form>
  );
}
