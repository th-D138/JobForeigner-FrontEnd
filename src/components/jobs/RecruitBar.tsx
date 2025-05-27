import styles from './recruitBar.module.scss';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Star } from 'lucide-react';

export interface RecruitInfoType {
  id: number;
  title: string;
  company: string;
  location: string;
  salary: string;
  date: string;
  rate: number;
  recruitType: string;
}

const RecruitBar = ({
  id,
  title,
  company,
  location,
  salary,
  date,
  rate,
  recruitType,
}: RecruitInfoType) => {
  const [isScraped, setIsScraped] = useState(false);
  const handleScrap = () => {
    setIsScraped(!isScraped);
  };

  return (
    <div className={styles.container}>
      <div onClick={handleScrap}>
        <Star className={isScraped ? styles.scraped : styles.noscraped} />
      </div>
      <Link
        to={`/jobs/${id}`}
        className={styles.recruitBar}
        state={{
          id,
          title,
          company,
          location,
          salary,
          date,
          rate,
          recruitType,
        }}
      >
        <div>{title}</div>
        <div>{company}</div>
        <div>{location}</div>
        <div>{salary}</div>
        <div>{date}</div>
        <div>{rate}</div>
        <div>{recruitType}</div>
      </Link>
    </div>
  );
};

export default RecruitBar;
