import { ProfileImage, ProfileInfo, ProfileBottom } from '../profile';
import styles from './userProfile.module.scss';

const userInfo = {
  profileImageUrl: 'https://randomuser.me/api',
  name: '홍길동',
  email: 'dswvgw1234@gmail.com',
  phoneNumber: '010-1234-5678',
  region: '서울특별시 강남구',
  resumes: [
    {
      id: 1,
      title: '이력서1',
      createdAt: '2021-08-01',
      updatedAt: '2021-08-01',
    },
    {
      id: 2,
      title: '이력서2',
      createdAt: '2021-08-01',
      updatedAt: '2021-08-01',
    },
    {
      id: 3,
      title: '이력서3',
      createdAt: '2021-08-01',
      updatedAt: '2021-08-01',
    },
  ],
  applications: [
    {
      id: 1,
      title: '회사1',
      createdAt: '2021-08-01',
      updatedAt: '2021-08-01',
    },
    {
      id: 2,
      title: '회사2',
      createdAt: '2021-08-01',
      updatedAt: '2021-08-01',
    },
    {
      id: 3,
      title: '회사3',
      createdAt: '2021-08-01',
      updatedAt: '2021-08-01',
    },
  ],
};

export default function UserProfile() {
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
