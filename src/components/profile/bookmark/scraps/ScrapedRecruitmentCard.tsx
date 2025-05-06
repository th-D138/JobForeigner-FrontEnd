import { Job } from '@/lib/type/profile/bookmark';
import styles from './scrapedRecruitmentCard.module.scss';
import {
  Ban,
  Briefcase,
  Building2,
  Calendar,
  Clock,
  ExternalLink,
  MapPin,
  MoreVertical,
  Share2,
  Trash2,
} from 'lucide-react';
import { Link } from 'react-router-dom';

interface Props {
  job: Job;
  onRemoveBookmark: (jobId: number) => void;
}

export default function ScrapedRecruitmentCard({
  job,
  onRemoveBookmark,
}: Props) {
  const daysLeft = Math.ceil(
    (new Date(job.expiresAt).getTime() - Date.now()) / (1000 * 60 * 60 * 24),
  );

  const getStatusBadge = () => {
    if (job.status === 'active') {
      return daysLeft <= 3 ? (
        <span className={`${styles.badge} ${styles.badgeSoon}`}>
          <Clock className={styles.metaIcon} /> 마감 {daysLeft}일 전
        </span>
      ) : (
        <span className={`${styles.badge} ${styles.badgeActive}`}>
          <Clock className={styles.metaIcon} /> 진행중
        </span>
      );
    }
    return (
      <span className={`${styles.badge} ${styles.badgeExpired}`}>
        <Ban className={styles.metaIcon} /> 마감
      </span>
    );
  };

  return (
    <div className={styles.card}>
      <div className={styles.cardContent}>
        <div className={styles.cardLeft}>
          <div className={styles.logoWrapper}>
            <img
              src={job.company.logo}
              alt={job.company.name}
              className={styles.logo}
            />
          </div>
          <div className={styles.info}>
            <div className={styles.titleRow}>
              <h3 className={styles.title}>{job.title}</h3>
              {getStatusBadge()}
            </div>
            <p className={styles.companyName}>{job.company.name}</p>
            <div className={styles.meta}>
              <span className={styles.metaItem}>
                <MapPin className={styles.metaIcon} /> {job.location}
              </span>
              <span>•</span>
              <span className={styles.metaItem}>
                <Briefcase className={styles.metaIcon} /> {job.employmentType}
              </span>
              <span>•</span>
              <span className={styles.metaItem}>
                <Calendar className={styles.metaIcon} /> ~{job.expiresAt}
              </span>
            </div>
            <div className={styles.buttonGroup}>
              <Link to={`/jobs/${job.id}`}>
                <button className={styles.outlineButton}>공고 상세보기</button>
              </Link>
              {job.status === 'active' && (
                <Link to={`/jobs/${job.id}/apply`}>
                  <button className={styles.button}>지원하기</button>
                </Link>
              )}
            </div>
          </div>
        </div>
        <div className={styles.cardRight}>
          <div className={styles.dropdown}>
            <button type='button' className={styles.iconButton}>
              <MoreVertical />
            </button>
            <div className={styles.dropdownContent}>
              <Link to={`/jobs/${job.id}`} className={styles.dropdownItem}>
                <ExternalLink className={styles.dropdownIcon} /> 공고 페이지로
                이동
              </Link>
              <Link
                to={`/companies/${job.company.id}`}
                className={styles.dropdownItem}
              >
                <Building2 className={styles.dropdownIcon} /> 기업 정보 보기
              </Link>
              <button type='button' className={styles.dropdownItem}>
                <Share2 className={styles.dropdownIcon} /> 공유하기
              </button>
              <button
                type='button'
                className={`${styles.dropdownItem} ${styles.delete}`}
                onClick={() => onRemoveBookmark(job.id)}
              >
                <Trash2 className={styles.dropdownIcon} /> 스크랩 삭제
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
