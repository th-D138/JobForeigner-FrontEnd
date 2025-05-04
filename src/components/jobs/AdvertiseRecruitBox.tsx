import styles from './advertiserecruitbox.module.scss';

const AdvertiseRecruitBox = () => {
  return (
    <div className={styles.container}>
      <div className={styles.img}>
        <img
          src='https://i.namu.wiki/i/CCQjH5_8JlN6BCxIDyXjTpkEdmTULbYvk5qyVVHtFxlSsz7L20ZrqgP_Jb1Qop79loUunhCNc3O6fsR-OhJzSg.svg'
          alt='로고이미지'
        />
      </div>
      <div className={styles.title}>Sales Specialist</div>
      <div className={styles.subtitle}>첫 대규모 채용</div>
      <div className={styles.description}>
        새로운 커머스를 만들어갈 기획을 놓치지 마세요
      </div>
    </div>
  );
};

export default AdvertiseRecruitBox;
