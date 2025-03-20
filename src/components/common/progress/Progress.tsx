import clsx from 'clsx';
import styles from './progress.module.scss';

interface ProgressProps {
  value: number;
  className?: string;
}

/**
 * - 진행 바 컴포넌트
 *   - 진행 바 모양으로 특정 컴포넌트를 감쌀 때 사용
 * - value: 진행 바 값
 * - className: 진행 바 클래스 이름
 */
export default function Progress({ value, className }: ProgressProps) {
  const safeValue = Math.min(Math.max(value, 0), 100);

  return (
    <div className={clsx(styles.progress, className)}>
      <div className={styles.progressBar} style={{ width: `${safeValue}%` }} />
    </div>
  );
}
