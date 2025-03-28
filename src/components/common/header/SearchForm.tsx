import { Search } from 'lucide-react';
import styles from './searchForm.module.scss';
import { useTranslation } from 'react-i18next';

export default function SearchForm() {
  const { t } = useTranslation('common');

  return (
    <form className={styles.searchForm}>
      <button className={styles.searchButton} type='submit'>
        <Search size={16} color='#b3b3b3' />
      </button>
      <input name='search' placeholder={`${t('searchRecruitment')}`} />
    </form>
  );
}
