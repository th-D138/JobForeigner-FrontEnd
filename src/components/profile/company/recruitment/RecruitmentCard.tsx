import {
  Ban,
  Building2,
  Calendar,
  Clock,
  Eye,
  PenSquare,
  Trash2,
  Users,
} from 'lucide-react';
import styles from './recruitmentCard.module.scss';
import Button from '@/components/common/button/Button';
import { CompanyRecruitmentCard } from '@/lib/type/company/company';

const StatusTag = ({ status }: { status: string }) => {
  const getIcon = (status: string) => {
    if (status === 'active') {
      return <Clock />;
    }
    if (status === 'expired') {
      return <Ban />;
    }
    return null;
  };

  const parseStatus = (status: string) => {
    if (status === 'active') {
      return '진행중';
    }
    if (status === 'expired') {
      return '마감';
    }
    return status;
  };

  const getColor = (status: string) => {
    if (status === 'active') {
      return 'var(--color-blue-800)';
    }
    if (status === 'expired') {
      return 'var(--color-red-800)';
    }
    return '';
  };

  return (
    <div
      className={styles.statusTag}
      style={{
        color: getColor(status),
        backgroundColor: getColor(status).replace('800', '100'),
      }}
    >
      {getIcon(status)}
      {parseStatus(status)}
    </div>
  );
};

interface Props {
  recruitment: CompanyRecruitmentCard;
}

export default function RecruitmentCard({ recruitment }: Props) {
  return (
    <div className={styles.recruitment}>
      <div className={styles.title}>
        <div className={styles.left}>
          <h2>{recruitment.title}</h2>
          <div>
            <StatusTag status={recruitment.status} />
          </div>
        </div>
        <Trash2 className={styles.deleteIcon} />
      </div>
      <div className={styles.subTitle}>
        <Building2 />
        {recruitment.location} • {recruitment.employmentType}
      </div>
      <div className={styles.info}>
        <div>
          <Calendar /> 등록일: {recruitment.createdAt}
        </div>
        <div>
          <Calendar /> 마감일: {recruitment.expiresAt}
        </div>
        <div>
          <Users /> 지원자: {recruitment.applicantsCount}
        </div>
        <div>
          <Eye /> 조회수: {recruitment.viewCount}
        </div>
      </div>
      <div className={styles.divider} />
      <div className={styles.actions}>
        <Button variant='outline' size='medium'>
          <span className={styles.buttonContent}>
            <Eye />
            공고 보기
          </span>
        </Button>
        <Button variant='outline' size='medium'>
          <span className={styles.buttonContent}>
            <PenSquare />
            수정하기
          </span>
        </Button>
        <Button size='medium'>
          <span className={styles.buttonContent}>
            <Users />
            지원자 보기 ({recruitment.applicantsCount})
          </span>
        </Button>
      </div>
    </div>
  );
}
