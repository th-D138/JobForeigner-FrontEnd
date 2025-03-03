import styles from './searchSection.module.scss';
import SearchSectionForm from './SearchSectionForm';

export default function SearchSection() {
  return (
    <section className={styles.searchSection}>
      <div className={styles.container}>
        <div className={styles.searchWrapper}>
          <div className={styles.searchHeader}>
            <h2 className={styles.sectionTitle}>원하는 일자리를 찾아보세요</h2>
            <p className={styles.sectionSubtitle}>
              키워드, 지역, 직종 등으로 맞춤형 채용정보를 검색할 수 있습니다.
            </p>
            <form>
              <SearchSectionForm />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
