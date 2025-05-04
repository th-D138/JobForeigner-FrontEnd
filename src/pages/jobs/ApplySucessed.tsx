import { Link } from 'react-router-dom';
import styles from './applysucess.module.scss';
import { CircleCheckBig } from 'lucide-react';

const ApplySucessed = () => {
  return (
    <div className={styles.container}>
      <CircleCheckBig className={styles.checkIcon} />
      <div className={styles.textArea}>
        <div>제출이 완료되었습니다!</div>
        <div>건승을 빕니다.</div>
      </div>
      <div className={styles.btnBox}>
        <div className={styles.goMainBtn}>
          <Link to='/'>초기 화면으로</Link>
        </div>
      </div>
    </div>
  );
};

export default ApplySucessed;
