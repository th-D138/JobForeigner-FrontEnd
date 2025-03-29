import { Link } from 'react-router-dom';
import styles from './recruitmentCategory.module.scss';
import { Briefcase } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export interface Props {
  category: {
    id: number;
    count: number;
    slug: string;
  };
}

export default function RecruitmentCategory({ category }: Props) {
  const { t } = useTranslation('mainPage');

  return (
    <Link to={`/companies`} className={styles.categoryCard}>
      <div className={styles.categoryIconWrapper}>
        <Briefcase className={styles.icon} />
      </div>
      <h3 className={styles.categoryName}>{t(category.slug)}</h3>
      <p className={styles.categoryCount}>{category.count}개 채용</p>
    </Link>
  );
}
