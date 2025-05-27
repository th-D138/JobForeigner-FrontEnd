import DetailInfoBox from '@/components/jobs/DetailInfoBox';
import styles from './detailPage.module.scss';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { RecruitInfoType } from '@/components/jobs/RecruitBar';
import AdvertiseRecruitBox from '@/components/jobs/AdvertiseRecruitBox';
import RecruitContent from '@/components/jobs/RecruitContent';
import ApplyTab from '@/components/jobs/ApplyTab';

const DetailPage = () => {
  const location = useLocation();
  const [data] = useState<RecruitInfoType>(location.state);

  return (
    <div className={styles.container}>
      <DetailInfoBox {...data} />
      <AdvertiseRecruitBox />
      <RecruitContent />
      <ApplyTab key={data.id} recruitId={data.id} />
    </div>
  );
};

export default DetailPage;
