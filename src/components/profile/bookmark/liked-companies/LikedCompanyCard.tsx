import {
  Bell,
  BellOff,
  Briefcase,
  Building2,
  ExternalLink,
  MapPin,
  MoreVertical,
  Trash2,
} from 'lucide-react';
import styles from './likedCompanyCard.module.scss';
import { Link } from 'react-router-dom';
import { Company } from '@/lib/type/profile/bookmark';
import Button from '@/components/common/button/Button';

interface Props {
  company: Company;
  onToggleNotification: (companyId: number) => void;
  onRemoveBookmark: (companyId: number) => void;
}

export default function LikedCompanyCard({
  company,
  onToggleNotification,
  onRemoveBookmark,
}: Props) {
  return (
    <div className={styles.card}>
      <div className={styles.cardContent}>
        <div className={styles.cardLeft}>
          <div className={styles.logoWrapper}>
            <img
              src={company.logo}
              alt={company.name}
              className={styles.logo}
            />
          </div>
          <div className={styles.info}>
            <div className={styles.nameRow}>
              <h3 className={styles.name}>{company.name}</h3>
              {company.activeJobsCount > 0 && (
                <span className={styles.badge}>
                  채용중 {company.activeJobsCount}
                </span>
              )}
            </div>
            <div className={styles.meta}>
              <span className={styles.metaItem}>
                <Building2 className={styles.metaIcon} /> {company.industry}
              </span>
              <span>•</span>
              <span className={styles.metaItem}>
                <MapPin className={styles.metaIcon} /> {company.location}
              </span>
              <span>•</span>
              <span className={styles.metaItem}>
                <Briefcase className={styles.metaIcon} />{' '}
                {company.employeeCount}
              </span>
            </div>
            <div className={styles.buttonGroup}>
              <Link to={`/companies/${company.id}`}>
                <Button variant='outline'>기업 정보</Button>
              </Link>
              <Link to={`/companies/${company.id}/jobs`}>
                <Button variant='outline'>
                  채용 공고 ({company.activeJobsCount})
                </Button>
              </Link>
            </div>
          </div>
        </div>
        <div className={styles.cardRight}>
          <button
            type='button'
            className={styles.iconButton}
            onClick={() => onToggleNotification(company.id)}
            title={company.isNotificationOn ? '알림 끄기' : '알림 켜기'}
          >
            {company.isNotificationOn ? <Bell /> : <BellOff />}
          </button>
          <div className={styles.dropdown}>
            <button type='button' className={styles.iconButton}>
              <MoreVertical />
            </button>
            <div className={styles.dropdownContent}>
              <Link
                to={`/companies/${company.id}`}
                className={styles.dropdownItem}
              >
                <ExternalLink className={styles.dropdownIcon} /> 기업 페이지로
                이동
              </Link>
              <button
                type='button'
                className={styles.dropdownItem}
                onClick={() => onToggleNotification(company.id)}
              >
                {company.isNotificationOn ? (
                  <>
                    <BellOff className={styles.dropdownIcon} /> 알림 끄기
                  </>
                ) : (
                  <>
                    <Bell className={styles.dropdownIcon} /> 알림 켜기
                  </>
                )}
              </button>
              <button
                type='button'
                className={`${styles.dropdownItem} ${styles.delete}`}
                onClick={() => onRemoveBookmark(company.id)}
              >
                <Trash2 className={styles.dropdownIcon} /> 관심 기업 삭제
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
