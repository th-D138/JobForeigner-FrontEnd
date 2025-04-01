import Card from '@/components/common/card/Card';
import styles from './statusBox.module.scss';
import clsx from 'clsx';

type StatusBoxProps = {
  icon: React.ReactNode;
  iconColor?: string;
  title: string;
  number: number;
};

export default function StatusBox({
  icon,
  iconColor,
  title,
  number,
}: StatusBoxProps) {
  return (
    <Card>
      <div className={styles.container}>
        <div className={styles.left}>
          <div className={styles.title}>{title}</div>
          <div className={styles.number}>{number}</div>
        </div>
        <div
          className={clsx(styles.right)}
          style={{
            color: iconColor,
            backgroundColor: iconColor?.replace('600', '50'),
          }}
        >
          {icon}
        </div>
      </div>
    </Card>
  );
}
