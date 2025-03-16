import { useState } from 'react';
import styles from './page.module.scss';
import { Link } from 'react-router-dom';
import Button from '@/components/common/button/Button';
import { FileText, Plus } from 'lucide-react';
import Input from '@/components/common/input/Input';
import Select from '@/components/common/select/Select';
import ResumeCard from '@/components/profile/resume/ResumeCard';
import { Resume } from '@/lib/type/profile/resume';

export default function ResumeListPage() {
  const [searchTerm, setSearchTerm] = useState('');

  // 이력서 가짜 데이터
  const resumes: Resume[] = [];

  return (
    <div className={styles.pageContainer}>
      {/* 헤더 */}
      <div className={styles.header}>
        <div>
          <h1 className={styles.headerTitle}>내 이력서</h1>
          <p className={styles.headerSubtitle}>
            작성한 이력서를 관리하고 새 이력서를 작성할 수 있습니다.
          </p>
        </div>
        <Link to='/profile/resume/create'>
          <Button size='medium'>
            <Plus className={styles.buttonIcon} />새 이력서 작성
          </Button>
        </Link>
      </div>

      {/* 필터 & 검색 */}
      <div className={styles.filterBox}>
        <div className={styles.filterRow}>
          {/* 검색 래퍼 */}
          <div className={styles.searchWrapper}>
            <Input
              icon='search'
              placeholder='이력서 제목 검색'
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
            />
          </div>
          <div className={styles.selects}>
            <Select
              options={[
                { value: 'all', label: '전체' },
                { value: 'completed', label: '작성완료' },
                { value: 'progressing', label: '작성중' },
              ]}
              defaultValue='all'
              name='status'
            />
            <Select
              options={[
                { value: 'newest', label: '최신순' },
                { value: 'oldest', label: '오래된순' },
              ]}
              defaultValue='newest'
              name='sort'
            />
          </div>
        </div>
      </div>

      {/* 이력서 목록 */}
      <div className={styles.resumeList}>
        {resumes.length > 0 ? (
          resumes.map(resume => <ResumeCard key={resume.id} resume={resume} />)
        ) : (
          <div className={styles.emptyList}>
            <FileText className={styles.emptyListIcon} />
            <h3 className={styles.emptyListTitle}>이력서가 없습니다</h3>
            <p className={styles.emptyListDesc}>새 이력서를 작성해보세요.</p>
            <Link to='/profile/resume/create'>
              <Button size='medium'>
                <Plus className={styles.buttonIcon} />새 이력서 작성
              </Button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
