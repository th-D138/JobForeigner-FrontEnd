import { Link } from 'react-router-dom';
import styles from './banner.module.scss';
import { ChevronRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function Banner() {
  const { t } = useTranslation('common');

  return (
    <section className={styles.heroSection}>
      <div className={styles.container}>
        <div className={styles.heroGrid}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>
              {t('banner_title1')}{' '}
              <span className={styles.highlight}>{t('banner_title2')}</span>
            </h1>
            <p className={styles.heroSubtitle}>{t('banner_subtitle')}</p>
            <div className={styles.heroButtons}>
              <Link to='/jobs' className={`${styles.btn} ${styles.btnPrimary}`}>
                {t('viewRecruitment')}
                <ChevronRight className={styles.btnIcon} />
              </Link>
              <Link
                to='/register'
                className={`${styles.btn} ${styles.btnSecondary}`}
              >
                {t('signUp')}
              </Link>
            </div>
          </div>
          <div className={styles.heroImageWrapper}>
            <img
              src='/placeholder.svg?height=400&width=600'
              alt='외국인 취업 지원'
              className={styles.heroImage}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
