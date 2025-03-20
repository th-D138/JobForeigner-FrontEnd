import Card from '@/components/common/card/Card';
import styles from './applicationInfo.module.scss';
import { Application } from '@/lib/type/profile/application';
import { Ban, Building2, Calendar, ChevronRight, FileText } from 'lucide-react';
import clsx from 'clsx';
import Button from '@/components/common/button/Button';

const parseStatus = (status: string) => {
  if (status === 'reviewing') {
    return '서류 검토중';
  }
  if (status === 'interview') {
    return '면접 예정';
  }
  if (status === 'accepted') {
    return '채용 완료';
  }
  if (status === 'rejected') {
    return '불합격';
  }
  return status;
};

interface ApplicationInfoProps {
  application: Application;
  icon: React.ReactNode;
}

export default function ApplicationInfo({
  application,
  icon,
}: ApplicationInfoProps) {
  return (
    <Card>
      <div className={styles.applicationInfo}>
        <div className={styles.applicationInfoHeader}>
          <div className={styles.applicationInfoImage}>
            <img src={application.logo} alt={application.company} />
          </div>
          <div className={styles.applicationInfoHeaderText}>
            <h3 className={styles.applicationInfoHeaderTitle}>
              {application.title}
            </h3>
            <p className={styles.applicationInfoHeaderCompany}>
              {application.company}
            </p>
            <p className={styles.applicationInfoHeaderDescription}>
              <span>
                <Building2 />
                {application.location}
              </span>
              <span>•</span>
              <span className='flex items-center'>
                <Calendar className='w-3 h-3 mr-1' />
                지원일: {application.appliedAt}
              </span>
              <span>•</span>
              <span className='flex items-center'>
                <FileText className='w-3 h-3 mr-1' />
                {application.resumeTitle}
              </span>
            </p>
          </div>
          <div className={styles.applicationInfoStatus}>
            <div className={clsx(styles.tag, styles[application.status])}>
              {icon}
              <span>{parseStatus(application.status)}</span>
            </div>
          </div>
        </div>
        <hr className={styles.applicationInfoDivider} />
        <div className={styles.applicationInfoActions}>
          <Button variant='outline' size='small'>
            <div className={clsx(styles.buttonItem, styles.cancel)}>
              <Ban />
              지원 취소
            </div>
          </Button>
          <Button size='small'>
            <div className={clsx(styles.buttonItem, styles.detail)}>
              상세보기
              <ChevronRight />
            </div>
          </Button>
        </div>
      </div>
    </Card>
  );
}
