import { UserProfile, ResumeList } from '@/components/profile';

import styles from './page.module.scss';
import { ApplicationHistory } from '@/components/profile/ApplicationHistory';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

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
      company: '토스',
      position: '프론트엔드 개발자',
      appliedAt: '2021-08-01',
      status: '서류 검토중',
    },
    {
      id: 2,
      company: '당근마켓',
      position: '백엔드 개발자',
      appliedAt: '2021-08-01',
      status: '면접 예정',
    },
    {
      id: 3,
      company: '네이버',
      position: '디자이너',
      appliedAt: '2021-08-01',
      status: '탈락',
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
          <div className={styles.sectionHeader}>
            <h2>내 이력서</h2>
            <Link to='/profile/resume' className={styles.sectionHeaderRight}>
              더보기
              <ChevronRight />
            </Link>
          </div>
          <ResumeList resumes={userInfo.resumes}>
            <ResumeList.items resumes={userInfo.resumes} />
          </ResumeList>
        </section>
        <section>
          <h2>지원 내역</h2>
          <ApplicationHistory applications={userInfo.applications} />
        </section>
      </main>
    </div>
  );
}
