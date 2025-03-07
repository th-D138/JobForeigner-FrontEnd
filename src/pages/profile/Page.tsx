import { UserProfile, ResumeList } from '@/components/profile';

import styles from './page.module.scss';

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
      status: '작성완료',
      createdAt: '2021-08-01',
      updatedAt: '2021-08-01',
    },
    {
      id: 2,
      title: '이력서2',
      status: '작성중',
      createdAt: '2021-08-01',
      updatedAt: '2021-08-01',
    },
    {
      id: 3,
      title: '이력서3',
      status: '작성완료',
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

export default function ProfilePage() {
  return (
    <div className={styles.container}>
      <main className={styles.page}>
        <h1>프로필</h1>
        <UserProfile userInfo={userInfo} />
        <section>
          <h2>내 이력서</h2>
          <ResumeList resumes={userInfo.resumes}>
            <ResumeList.items resumes={userInfo.resumes} />
          </ResumeList>
        </section>
        <section>
          <h2>지원 내역</h2>
        </section>
      </main>
    </div>
  );
}
