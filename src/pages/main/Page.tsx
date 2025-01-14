import Footer from '@/components/footer/Footer';
import Header from '../../components/header/Header';
import styles from './page.module.scss';

export default function MainPage() {
  return (
    <div>
      <Header />
      <div className={styles.page}>메인 페이지</div>
      <Footer />
    </div>
  );
}
