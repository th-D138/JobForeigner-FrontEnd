import Card from '@/components/common/card/Card';
import styles from './statusBox.module.scss';
import clsx from 'clsx';

const statusClassName: Record<string, string> = {
  '전체 지원': 'all',
  '서류 검토중': 'reviewing',
  '면접 예정': 'interview',
  완료: 'accepted',
  '등록한 채용공고': 'postingRecruitment',
  '진행중인 채용': 'ongoingRecruitment',
};

type StatusBoxProps = {
  icon: React.ReactNode;
  title: string;
  number: number;
};

export default function StatusBox({ icon, title, number }: StatusBoxProps) {
  return (
    <Card>
      <div className={styles.container}>
        <div className={styles.left}>
          <div className={styles.title}>{title}</div>
          <div className={styles.number}>{number}</div>
        </div>
        <div className={clsx(styles.right, styles[statusClassName[title]])}>
          {icon}
        </div>
      </div>
    </Card>
  );
}
