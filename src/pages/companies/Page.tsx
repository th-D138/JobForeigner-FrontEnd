import CompanyLists from '@/components/companies/CompanyLists';
import DetailSearchForm from '@/components/jobs/DetailSearchForm';
import styles from './page.module.scss';

export default function CompaniesPage() {
  return (
    <div className={styles.container}>
      <DetailSearchForm />
      <CompanyLists />
    </div>
  );
}
