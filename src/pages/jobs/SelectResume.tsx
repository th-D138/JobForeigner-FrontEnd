import ResumeBox, { ResumeProps } from '@/components/jobs/ResumeBox';
import styles from './selectResume.module.scss';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

const dummyResume: ResumeProps[] = [
  {
    id: 1,
    title: '저는 최강의 프론트엔드 개발자입니다.',
    editedAt: '2024-03-09',
    status: '작성 완료',
  },
  {
    id: 2,
    title: '영역전개. 무량공처',
    editedAt: '2022-01-14',
    status: '작성 중',
  },
  {
    id: 3,
    title: '세계를 지배할 개발대마왕',
    editedAt: '1999-12-12',
    status: '작성 완료',
  },
];

type IdType = number | null;

const SelectResume = () => {
  const [selected, setSelected] = useState<IdType>(null);
  const navigator = useNavigate();

  const handleSelected = (id: IdType) => {
    setSelected(id);
  };

  const handleApply = (id: IdType) => {
    navigator('/apply-success', { state: { id: id } });
  };
  return (
    <div className={styles.container}>
      <div className={styles.title}>이력서 선택</div>
      <div className={styles.subtitle}>지원할 이력서를 선택해주세요.</div>
      <div className={styles.resumeLists}>
        {dummyResume.map(resume => (
          <ResumeBox
            onClick={() => handleSelected(resume.id)}
            key={resume.id}
            id={resume.id}
            editedAt={resume.editedAt}
            selected={selected === resume.id}
            status={resume.status}
            title={resume.title}
          />
        ))}
      </div>
      <div className={styles.btnContainer}>
        <div className={styles.createResumeBtn}>
          <Link to='/create-resume'>새 이력서 작성하기</Link>
        </div>
        <div className={styles.apply} onClick={() => handleApply(selected)}>
          지원하기
        </div>
      </div>
    </div>
  );
};

export default SelectResume;
