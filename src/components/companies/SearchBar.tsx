import Input from '../common/input/Input';
import { Search } from 'lucide-react';
import styles from './searchBar.module.scss';

const SearchBar = () => {
  return (
    <div className={styles.container}>
      <Input
        icon='search'
        placeholder='기업명으로 입력하세요.'
        className={styles.searchInput}
      />
      <div className={styles.searchIcon}>
        <Search />
      </div>
    </div>
  );
};

export default SearchBar;
