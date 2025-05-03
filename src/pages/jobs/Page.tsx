import SearchFilterBar from '@/components/companies/SearchFilterBar';
import styles from './Page.module.scss';
import SearchBar from '@/components/companies/SearchBar';
import RecruitBox from '@/components/jobs/RecruitsBox';

const Page = () => {
  return (
    <div className={styles.container}>
      <SearchBar />
      <SearchFilterBar />
      <RecruitBox />
    </div>
  );
};

export default Page;
