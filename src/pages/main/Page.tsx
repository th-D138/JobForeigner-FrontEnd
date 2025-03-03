import Footer from '@/components/footer/Footer';
import Header from '../../components/header/Header';
import styles from './page.module.scss';
import Banner from '@/components/main/Banner';

export default function MainPage() {
  return (
    <div>
      <Header />
      <main className={styles.page}>
        <Banner />
      </main>
      <Footer />
    </div>
  );
}
