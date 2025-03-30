import styles from './resumebox.module.scss';
import { Clock, FileUser } from 'lucide-react';

export interface ResumeProps {
  id: number;
  title: string;
  editedAt: string;
  status: ResumeStatus;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

interface ResumeBoxProps extends ResumeProps {
  selected: boolean;
}

export type ResumeStatus = '작성 완료' | '작성 중';

const ResumeBox = ({
  title,
  editedAt,
  status,
  onClick,
  selected,
}: ResumeBoxProps) => {
  return (
    <div
      className={`${styles.container} ${
        selected ? styles.selected : styles.notselected
      }`}
      onClick={onClick}
    >
      <FileUser className={styles.icon} />
      <div className={styles.info}>
        <div>{title}</div>
        <div>
          <Clock width={15} />
          <span>마지막 수정 : {editedAt}</span>
        </div>
        <div
          className={status === '작성 완료' ? styles.isdone : styles.iswriting}
        >
          {status}
        </div>
      </div>
    </div>
  );
};

export default ResumeBox;
