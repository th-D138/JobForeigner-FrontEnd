import DetailSearchForm from '@/components/jobs/DetailSearchForm';
import RecruitBox from '@/components/jobs/RecruitsBox';
import styles from './page.module.scss';

const Page = () => {
  return (
    <div className={styles.container}>
      <DetailSearchForm />
      <RecruitBox />
    </div>
  );
};

export default Page;
