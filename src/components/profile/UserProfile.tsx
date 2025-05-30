import { UserProfileInfo } from '@/lib/type/profile/info';
import { ProfileImage, ProfileInfo, ProfileBottom } from '../profile';
import styles from './userProfile.module.scss';

interface Props {
  userInfo: UserProfileInfo;
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
