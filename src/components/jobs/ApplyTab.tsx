import styles from './applyTab.module.scss';
import { useNavigate } from 'react-router-dom';

type ApplyProps = {
  recruitId: number;
};

const ApplyTab = ({ recruitId }: ApplyProps) => {
  const navigate = useNavigate();
  const handleApply = () => {
    navigate('/select-resume', { state: { recruitId } });
  };
  return (
    <div className={styles.container}>
      <div className={styles.deadline}>
        <div className={styles.duedate}>D-12</div>
        <div className={styles.text}>
          <div>슬슬 지원하셔야죠 !</div>
          <div>마감일이 얼마 안남았어요</div>
        </div>
      </div>
      <div className={styles.applyBtn} onClick={handleApply}>
        지원하기
      </div>
    </div>
  );
};

export default ApplyTab;
