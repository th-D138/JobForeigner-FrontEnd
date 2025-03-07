import { Link } from 'react-router-dom';
import styles from './banner.module.scss';
import { ChevronRight } from 'lucide-react';

export default function Banner() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.container}>
        <div className={styles.heroGrid}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>
              외국인을 위한{' '}
              <span className={styles.highlight}>취업 플랫폼</span>
            </h1>
            <p className={styles.heroSubtitle}>
              한국에서 일자리를 찾고 있는 외국인을 위한 맞춤형 취업 정보와
              서비스를 제공합니다.
            </p>
            <div className={styles.heroButtons}>
              <Link to="/jobs" className={`${styles.btn} ${styles.btnPrimary}`}>
                채용정보 보기
                <ChevronRight className={styles.btnIcon} />
              </Link>
              <Link
                to="/register"
                className={`${styles.btn} ${styles.btnSecondary}`}
              >
                회원가입
              </Link>
            </div>
          </div>
          <div className={styles.heroImageWrapper}>
            <img
              src="/placeholder.svg?height=400&width=600"
              alt="외국인 취업 지원"
              className={styles.heroImage}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
