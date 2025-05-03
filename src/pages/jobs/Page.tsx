import DetailSearchForm from '@/components/jobs/DetailSearchForm';
import RecruitBox from '@/components/jobs/RecruitsBox';
import SearchBar from '@/components/companies/SearchBar';
import styles from './Page.module.scss';

const Page = () => {
  return (
    <div className={styles.container}>
      <DetailSearchForm />
      <RecruitBox />
    </div>
  );
};

export default Page;
