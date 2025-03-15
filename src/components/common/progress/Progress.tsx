import clsx from 'clsx';
import styles from './progress.module.scss';

interface ProgressProps {
  value: number;
  className?: string;
}

export default function Progress({ value, className }: ProgressProps) {
  const safeValue = Math.min(Math.max(value, 0), 100);

  return (
    <div className={clsx(styles.progress, className)}>
      <div className={styles.progressBar} style={{ width: `${safeValue}%` }} />
    </div>
  );
}
