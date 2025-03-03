import styles from './page.module.scss';
import Banner from '@/components/main/Banner';
import SearchSection from '@/components/main/SearchSection';
import PopularRecruitmentSection from '@/components/main/PopularRecruitmentSection';

export const categories = [
  {
    id: 0,
    name: 'IT/개발',
    count: 235,
    slug: 'it-dev',
  },
  {
    id: 1,
    name: '서비스업',
    count: 189,
    slug: 'service',
  },
  {
    id: 2,
    name: '제조/생산',
    count: 156,
    slug: 'manufacturing',
  },
  {
    id: 3,
    name: '교육',
    count: 124,
    slug: 'education',
  },
  {
    id: 4,
    name: '사무/관리',
    count: 98,
    slug: 'office',
  },
  {
    id: 5,
    name: '영업/마케팅',
    count: 87,
    slug: 'sales',
  },
  {
    id: 6,
    name: '디자인',
    count: 76,
    slug: 'design',
  },
  {
    id: 7,
    name: '기타',
    count: 145,
    slug: 'others',
  },
];

export default function MainPage() {
  return (
    <main className={styles.page}>
      <Banner />
      <SearchSection />
      <PopularRecruitmentSection categories={categories} />
    </main>
  );
}
