import {
  Briefcase,
  Building2,
  Calendar,
  Download,
  Eye,
  Mail,
  Phone,
} from 'lucide-react';
import styles from './applicationCard.module.scss';
import Button from '@/components/common/button/Button';
import { Link } from 'react-router-dom';

interface Props {
  application: {
    id: number;
    jobId: number;
    jobTitle: string;
    jobInfo: {
      position: string;
      department: string;
      employmentType: string;
      expiresAt: string;
    };
    applicant: {
      name: string;
      photo: string;
      email: string;
      phone: string;
    };
    resumeTitle: string;
    appliedAt: string;
    status: string;
    interviewDate?: string | null;
  };
}

export default function ApplicationCard({ application }: Props) {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.title}>
          <div className={styles.recruitmentTitle}>
            <span>채용 공고</span>
            <h3>{application.jobTitle}</h3>
          </div>
          <div className={styles.subTitle}>
            <span>
              <Briefcase />
              {`${application.jobInfo.position}(${application.jobInfo.department})`}
            </span>
            <span>
              <Building2 />
              {application.jobInfo.employmentType}
            </span>
            <span>
              <Calendar />
              마감일:&nbsp;{application.jobInfo.expiresAt}
            </span>
          </div>
        </div>
        <div className={styles.headerActions}>
          {/**
           * TODO: 링크 추가
           */}
          <Link to={`./applications/${application.id}`}>
            <Button variant='outline'>공고 보기</Button>
          </Link>
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.profileImage}>
          <div className={styles.imageWrapper}>
            <img
              src={application.applicant.photo}
              alt={`${application.applicant.name}의 프로필`}
            />
          </div>
        </div>
        <div className={styles.profileInfo}>
          <div className={styles.name}>{application.applicant.name}</div>
          <div className={styles.resume}>{application.resumeTitle}</div>
          <div className={styles.applicationInfo}>
            <span>
              <Calendar />
              &nbsp;지원일: {application.appliedAt}
            </span>
            <span>
              <Mail />
              &nbsp;{application.applicant.email}
            </span>
            <span>
              <Phone />
              &nbsp;{application.applicant.phone}
            </span>
          </div>
        </div>
      </div>
      <div className={styles.actions}>
        <Button variant='outline'>
          <span>
            <Download /> 이력서 다운로드
          </span>
        </Button>
        <Link to={`./application/${application.id}`}>
          <Button>
            <span>
              <Eye /> 상세보기
            </span>
          </Button>
        </Link>
      </div>
    </div>
  );
}
