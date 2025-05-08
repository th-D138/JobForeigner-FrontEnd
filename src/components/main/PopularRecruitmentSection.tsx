import { Link } from 'react-router-dom';
import styles from './popularRecruitmentSection.module.scss';
import { ArrowRight } from 'lucide-react';
import RecruitmentCategory from './RecruitmentCategory';
import { Category } from '@/lib/type/category';

export interface Props {
  categories: Category[];
}

export default function PopularRecruitmentSection({ categories }: Props) {
  return (
    <section className={styles.categoriesSection}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>인기 채용 분야</h2>
          <p className={styles.sectionSubtitle}>
            다양한 산업 분야의 채용 정보를 확인하세요
          </p>
        </div>
        <div className={styles.categoriesGrid}>
          {categories.map(category => (
            <RecruitmentCategory key={category.id} category={category} />
          ))}
        </div>
        <div className={styles.viewAll}>
          <Link to='/companies' className={styles.viewAllLink}>
            모든 카테고리 보기
            <ArrowRight className={styles.viewAllIcon} />
          </Link>
        </div>
      </div>
    </section>
  );
}
