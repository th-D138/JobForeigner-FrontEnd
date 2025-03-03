import styles from './page.module.scss';
import Banner from '@/components/main/Banner';
import SearchSection from '@/components/main/SearchSection';

export default function MainPage() {
  return (
    <main className={styles.page}>
      <Banner />
      <SearchSection />
    </main>
  );
}
