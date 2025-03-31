import { Link } from 'react-router-dom';
import styles from './page.module.scss';
import Button from '@/components/common/button/Button';
import { Ban, Building2, Clock, Plus, Users } from 'lucide-react';
import StatusBox from '@/components/common/statusBox/StatusBox';
import RecruitmentCard from '@/components/profile/company/recruitment/RecruitmentCard';

const recruitments = [
  {
    id: 0,
    title: '프론트엔드 개발자 (React/Next.js)',
    location: '서울 강남구',
    employmentType: '정규직',
    createdAt: '2021-08-01',
    expiresAt: '2021-08-31',
    status: '진행중',
    applicantsCount: 0,
    viewCount: 0,
  },
  {
    id: 1,
    title: '백엔드 개발자 (Node.js)',
    location: '서울 강남구',
    employmentType: '정규직',
    createdAt: '2021-08-01',
    expiresAt: '2021-08-31',
    status: '마감',
    applicantsCount: 0,
    viewCount: 0,
  },
  {
    id: 2,
    title: '풀스택 개발자 (MERN)',
    location: '서울 강남구',
    employmentType: '정규직',
    createdAt: '2021-08-01',
    expiresAt: '2021-08-31',
    status: '마감',
    applicantsCount: 0,
    viewCount: 0,
  },
];

export default function CompanyProfileRecruitmentPage() {
  return (
    <div className={styles.container}>
      <main className={styles.page}>
        <div className={styles.title}>
          <h1>채용 공고 관리</h1>
          <Link to='/profile/company/edit'>
            <Button size='medium'>
              <span className={styles.buttonContent}>
                <Plus />새 공고 작성
              </span>
            </Button>
          </Link>
        </div>
        <div className={styles.statusWrapper}>
          <StatusBox
            title='전체공고'
            number={12}
            icon={<Building2 />}
            iconColor='var(--color-purple-600)'
          />
          <StatusBox
            title='진행중'
            number={5}
            icon={<Clock />}
            iconColor='var(--color-blue-600)'
          />
          <StatusBox
            title='마감'
            number={7}
            icon={<Ban />}
            iconColor='var(--color-red-600)'
          />
          <StatusBox
            title='지원자'
            number={0}
            icon={<Users />}
            iconColor='var(--color-green-600)'
          />
        </div>
        <div className={styles.recruitments}>
          {recruitments.map(recruitment => (
            <RecruitmentCard key={recruitment.id} recruitment={recruitment} />
          ))}
        </div>
      </main>
    </div>
  );
}
