import styles from './recruitContent.module.scss';
import TextList from './TextList';

const dummyData = [
  {
    title: '이런 분들에서 성장할 수 있어요',
    content: [
      '현직 MD분들의 95% 높은 코칭을 통해 MD로써의 성장방향을 결정하며',
      '온라인 커머스 비즈니스에 대한 Sales 역량을 개발할 수 있습니다',
      '온라인 커머스 비즈니스에 대한 종합적인 이해도를 가질 수 있어요',
      '최고의 동료들과 함께 하니 목표를 위해 달려가는 동료의 열정을 직접 체득할 수 있어요',
    ],
  },
  {
    title: '합류하면 함께 할 업무에요',
    content: [
      '토스스퀘어 판매자 수익 상품 수를 빠르게 늘리는 역할을 주도적으로 수행해요',
      '특정 지역 서울의 새로 제조사를 진행해 토스스퀘어 판매자로 맞이는 일을 담당해요',
      '새로운 판매자와의 거래 체결, 판매자 온보딩 고객, 상품 등록 서포트 등 MD 업무 전반에 있어 핵심적인 룰을 담당해요',
    ],
  },
  {
    title: '이런 분과 함께하고 싶어요',
    content: [
      '대한민국 어디에서나 새로운 역사를 쓸 열정과 꿈이 있는 분이 필요해요',
      '전화/대면 업무에 누구보다 자신 있는 분이 필요해요',
      '세일즈, 서비스 관련 직군 근무 경험을 통해 판매자의 니즈와 입장까지도 누워서 읽을 거 같은 분이어야 해요',
      '업무적 성과에는 그 뒤 신념까지 이해하ㅕ 우리는 같은 꿈이는 것에 매우한 분이 필요해요',
      '국내 자동화시스템 제조사에서 2년간 법인영업 구축하고 이를 통해 한번 MD로 성장하고 싶으신 분이면 더 좋아요',
    ],
  },
  {
    title: '지원자격',
    content: [
      '신입도 지원할 수 있어요',
      '남녀의 경우 법령에 따른 연령제한이 해당하여 공식 서류가 되는 분',
    ],
  },
];

const RecruitContent = () => {
  return (
    <div className={styles.container}>
      {dummyData.map((data, id) => (
        <TextList key={id} title={data.title} content={data.content} />
      ))}
    </div>
  );
};

export default RecruitContent;
