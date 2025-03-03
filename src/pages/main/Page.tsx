import Footer from '@/components/common/footer/Footer';
import Header from '../../components/common/header/Header';
import styles from './page.module.scss';
import Banner from '@/components/main/Banner';
import SearchSection from '@/components/main/SearchSection';

export default function MainPage() {
  return (
    <div>
      <Header />
      <main className={styles.page}>
        <Banner />
        <SearchSection />
      </main>
      <Footer />
    </div>
  );
}
