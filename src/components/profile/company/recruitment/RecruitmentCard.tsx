import { Building2, Calendar, Eye, PenSquare, Users } from 'lucide-react';
import styles from './recruitmentCard.module.scss';
import Button from '@/components/common/button/Button';

interface Props {
  recruitment: {
    id: number;
    title: string;
    location: string;
    employmentType: string;
    createdAt: string;
    expiresAt: string;
    status: string;
    applicantsCount: number;
    viewCount: number;
  };
}

export default function RecruitmentCard({ recruitment }: Props) {
  return (
    <div className={styles.recruitment}>
      <div className={styles.title}>
        <div className={styles.left}>
          <h2>{recruitment.title}</h2>
          상태
        </div>
        우측 메뉴버튼
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
