import Progress from '@/components/common/progress/Progress';
import styles from './bottomActions.module.scss';
import Button from '@/components/common/button/Button';
import { FileDown, Save } from 'lucide-react';

const progress = 80;

export default function BottomActions() {
  return (
    <div className={styles.bottomBar}>
      <div className={styles.bottomBarContainer}>
        <div className={styles.bottomBarRow}>
          <div className={styles.progressSection}>
            <div className={styles.progressLabelRow}>
              <span className={styles.progressLabel}>작성 진행률</span>
              <span className={styles.progressValue}>{progress}%</span>
            </div>
            <Progress value={progress} />
          </div>
          <div className={styles.buttonGroup}>
            <Button variant='outline' size='medium'>
              <FileDown className={styles.buttonIcon} />
              <span className={styles.buttonText}>임시 저장</span>
            </Button>
            <Button size='medium'>
              <Save className={styles.buttonIcon} />
              <span className={styles.buttonText}>저장하기</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
