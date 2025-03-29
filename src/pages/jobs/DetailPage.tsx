import DetailInfoBox from '@/components/jobs/DetailInfoBox';
import styles from './detailpage.module.scss';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { RecruitInfoType } from '@/components/jobs/RecruitBar';
import AdvertiseRecruitBox from '@/components/jobs/AdvertiseRecruitBox';
import RecruitContent from '@/components/jobs/RecruitContent';

const DetailPage = () => {
  const location = useLocation();
  const [data, setData] = useState<RecruitInfoType>(location.state);
  return (
    <div className={styles.container}>
      <DetailInfoBox {...data} />
      <AdvertiseRecruitBox />
      <RecruitContent />
    </div>
  );
};

export default DetailPage;
