import styles from './profileBottom.module.scss';

interface Application {
  id: number;
  company: string;
  position: string;
  appliedAt: string;
  status: string;
}

interface Props {
  resumes: {
    id: number;
    title: string;
    createdAt: string;
    updatedAt: string;
  }[];
  applications: Application[];
}

export default function ProfileBottom({ resumes, applications }: Props) {
  return (
    <div className={styles.statsGrid}>
      <div>
        <p className={styles.statsItemLabel}>이력서</p>
        <p className={styles.statsItemValue}>{resumes.length}</p>
      </div>
      <div>
        <p className={styles.statsItemLabel}>지원 완료</p>
        <p className={styles.statsItemValue}>{applications.length}</p>
      </div>
      <div>
        <p className={styles.statsItemLabel}>이력서</p>
        <p className={styles.statsItemValue}>{resumes.length}</p>
      </div>
    </div>
  );
}
