import { Link } from 'react-router-dom';
import styles from './popularRecruitmentSection.module.scss';
import { ArrowRight } from 'lucide-react';
import RecruitmentCategory from './RecruitmentCategory';
import { useTranslation } from 'react-i18next';

export interface Props {
  categories: {
    id: number;
    count: number;
    slug: string;
  }[];
}

export default function PopularRecruitmentSection({ categories }: Props) {
  const { t } = useTranslation('mainPage');

  return (
    <section className={styles.categoriesSection}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>
            {t('popularRecruitmentTitle')}
          </h2>
          <p className={styles.sectionSubtitle}>
            {t('popularRecruitmentSubTitle')}
          </p>
        </div>
        <div className={styles.categoriesGrid}>
          {categories.map(category => (
            <RecruitmentCategory key={category.id} category={category} />
          ))}
        </div>
        <div className={styles.viewAll}>
          <Link to='/companies' className={styles.viewAllLink}>
            {t('allCategory')}
            <ArrowRight className={styles.viewAllIcon} />
          </Link>
        </div>
      </div>
    </section>
  );
}
