import { useTranslation } from 'react-i18next';
import styles from './searchSection.module.scss';
import SearchSectionForm from './SearchSectionForm';

export default function SearchSection() {
  const { t } = useTranslation('mainPage');

  return (
    <section className={styles.searchSection}>
      <div className={styles.container}>
        <div className={styles.searchWrapper}>
          <div className={styles.searchHeader}>
            <h2 className={styles.sectionTitle}>{t('searchTitle')}</h2>
            <p className={styles.sectionSubtitle}>{t('searchSubTitle')}</p>
            <SearchSectionForm />
          </div>
        </div>
      </div>
    </section>
  );
}
