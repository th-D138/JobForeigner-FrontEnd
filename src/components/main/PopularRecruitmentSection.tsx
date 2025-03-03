import { Link } from 'react-router-dom';
import styles from './popularRecruitmentSection.module.scss';
import { ArrowRight } from 'lucide-react';
import RecruitmentCategory from './RecruitmentCard';

export interface Props {
  categories: {
    id: number;
    name: string;
    count: number;
    slug: string;
  }[];
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
          {categories.map((category, index) => (
            <RecruitmentCategory key={index} category={category} />
          ))}
        </div>
        <div className={styles.viewAll}>
          <Link to="/jobs/categories" className={styles.viewAllLink}>
            모든 카테고리 보기
            <ArrowRight className={styles.viewAllIcon} />
          </Link>
        </div>
      </div>
    </section>
  );
}
