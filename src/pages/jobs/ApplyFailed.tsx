import styles from './applyFailed.module.scss';
import { CircleX } from 'lucide-react';
import { Link } from 'react-router-dom';

const ApplyFailed = () => {
  return (
    <div className={styles.container}>
      <CircleX className={styles.checkIcon} />
      <div className={styles.textArea}>
        <div>제출에 실패했습니다!</div>
        <div>나중에 다시 시도해주세요.</div>
      </div>
      <div className={styles.btnBox}>
        <div className={styles.goMainBtn}>
          <Link to='/'>초기 화면으로</Link>
        </div>
      </div>
    </div>
  );
};

export default ApplyFailed;
