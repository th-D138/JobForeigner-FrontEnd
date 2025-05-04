import RecruitBar from './RecruitBar';
import styles from './recruitsbox.module.scss';

const recruitDummyData = [
  {
    id: 1,
    title: 'Frontend Developer',
    company: 'Google',
    location: 'Mountain View, CA',
    salary: '$120,000 - $150,000',
    date: '1 day ago',
    rate: 4.5,
    recruitType: '정규직',
  },
  {
    id: 2,
    title: 'Backend Developer',
    company: 'Amazon',
    location: 'Seattle, WA',
    salary: '$110,000 - $140,000',
    date: '2 days ago',
    rate: 4.2,
    recruitType: '정규직',
  },
  {
    id: 3,
    title: 'Full Stack Engineer',
    company: 'Facebook',
    location: 'Menlo Park, CA',
    salary: '$130,000 - $160,000',
    date: '3 days ago',
    rate: 4.7,
    recruitType: '인턴',
  },
  {
    id: 4,
    title: 'UI/UX Designer',
    company: 'Apple',
    location: 'Cupertino, CA',
    salary: '$100,000 - $130,000',
    date: '5 days ago',
    rate: 4.3,
    recruitType: '인턴',
  },
  {
    id: 5,
    title: 'Data Scientist',
    company: 'Microsoft',
    location: 'Redmond, WA',
    salary: '$125,000 - $155,000',
    date: '1 week ago',
    rate: 4.6,
    recruitType: '정규직',
  },
  {
    id: 6,
    title: 'DevOps Engineer',
    company: 'Netflix',
    location: 'Los Gatos, CA',
    salary: '$115,000 - $145,000',
    date: '2 weeks ago',
    rate: 4.4,
    recruitType: '정규직',
  },
];

const RecruitBox = () => {
  return (
    <div className={styles.container}>
      <div className={styles.tableHead}>
        <div></div>
        <div>제목</div>
        <div>회사</div>
        <div>근무지</div>
        <div>급여</div>
        <div>등록일</div>
        <div>평점</div>
        <div>고용형태</div>
      </div>
      <div className={styles.recruitsBox}>
        {recruitDummyData.map(recruit => (
          <RecruitBar key={recruit.id} {...recruit} />
        ))}
      </div>
    </div>
  );
};

export default RecruitBox;
