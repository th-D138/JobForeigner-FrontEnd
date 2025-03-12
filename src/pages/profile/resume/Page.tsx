import BasicInfo from '@/components/profile/resume/BasicInfo';
import styles from './page.module.scss';
import BottomActions from '@/components/profile/resume/BottomActions';

export default function CreateResumePage() {
  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <h1>새 이력서 작성</h1>
        <p>* 표시는 필수 입력 항목입니다</p>
      </div>
      <form className={styles.contentSection}>
        <BasicInfo />
      </form>
      <BottomActions />
    </div>
  );
}
