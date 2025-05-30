import { Link } from 'react-router-dom';
import styles from './jobCard.module.scss';
import { MapPin } from 'lucide-react';
import { JobCard as JobCardType } from '@/lib/type/job/job';

export interface Props {
  job: JobCardType;
}

export default function JobCard({ job }: Props) {
  return (
    <Link to={`/companies`} className={styles.jobCard}>
      <div className={styles.jobCardBody}>
        <div className={styles.jobCardTop}>
          <div className={styles.jobLogoWrapper}>
            <img
              src={job.companyLogo}
              alt={job.company}
              className={styles.jobLogo}
            />
          </div>
          <span className={job.isNew ? styles.badgeNew : styles.badgeDefault}>
            {job.isNew ? '신규' : job.timeAgo}
          </span>
        </div>
        <h3 className={styles.jobTitle}>{job.title}</h3>
        <p className={styles.companyName}>{job.company}</p>
        <div className={styles.locationRow}>
          <MapPin className={styles.locationIcon} />
          <span>{job.location}</span>
        </div>
        <div className={styles.tagsWrapper}>
          {job.tags.map(tag => (
            <span key={`id-${tag}`} className={styles.jobTag}>
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
