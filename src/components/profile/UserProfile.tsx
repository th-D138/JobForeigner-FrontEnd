import { ProfileImage, ProfileInfo, ProfileBottom } from '../profile';
import styles from './userProfile.module.scss';

interface Application {
  id: number;
  company: string;
  position: string;
  appliedAt: string;
  status: string;
}

interface Props {
  userInfo: {
    name: string;
    email: string;
    phoneNumber: string;
    region: string;
    profileImageUrl?: string;
    resumes: {
      id: number;
      title: string;
      createdAt: string;
      updatedAt: string;
    }[];
    applications: Application[];
  };
}

export default function UserProfile({ userInfo }: Props) {
  return (
    <div className={styles.profileCard}>
      <div className={styles.profileCardBody}>
        <div className={styles.profileRow}>
          <ProfileImage imageUrl={userInfo.profileImageUrl} />
          <ProfileInfo
            name={userInfo.name}
            email={userInfo.email}
            phoneNumber={userInfo.phoneNumber}
            region={userInfo.region}
          />
        </div>
      </div>
      <div className={styles.borderTop}>
        <ProfileBottom
          resumes={userInfo.resumes}
          applications={userInfo.applications}
        />
      </div>
    </div>
  );
}
