import { Link } from 'react-router-dom';
import styles from './recruitmentCategory.module.scss';
import { Briefcase } from 'lucide-react';

export interface Props {
  category: {
    id: number;
    name: string;
    count: number;
    slug: string;
  };
}

export default function RecruitmentCategory({ category }: Props) {
  return (
    <Link to={`/companies`} className={styles.categoryCard}>
      <div className={styles.categoryIconWrapper}>
        <Briefcase className={styles.icon} />
      </div>
      <h3 className={styles.categoryName}>{category.name}</h3>
      <p className={styles.categoryCount}>{category.count}개 채용</p>
    </Link>
  );
}
