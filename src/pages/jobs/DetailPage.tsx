import DetailInfoBox from '@/components/jobs/DetailInfoBox';
import styles from './detailpage.module.scss';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { RecruitInfoType } from '@/components/jobs/RecruitBar';

const DetailPage = () => {
  const location = useLocation();
  const [data, setData] = useState<RecruitInfoType>(location.state);
  return (
    <div className={styles.container}>
      <DetailInfoBox {...data} />
    </div>
  );
};

export default DetailPage;
