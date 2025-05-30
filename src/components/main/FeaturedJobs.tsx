import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import styles from './featuredJobs.module.scss';
import JobCard from './JobCard';
import { JobCard as JobCardType } from '@/lib/type/job/job';

export interface Props {
  featuredJobs: JobCardType[];
}

export default function FeaturedJobs({ featuredJobs }: Props) {
  return (
    <section className={styles.featuredJobsSection}>
      <div className={styles.container}>
        <div className={styles.featuredJobsHeader}>
          <h2 className={styles.sectionTitle}>추천 채용 공고</h2>
          <Link to='/companies' className={styles.moreLink}>
            더 보기
            <ChevronRight className={styles.moreIcon} />
          </Link>
        </div>
        <div className={styles.featuredJobsGrid}>
          {featuredJobs.map(job => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      </div>
    </section>
  );
}
