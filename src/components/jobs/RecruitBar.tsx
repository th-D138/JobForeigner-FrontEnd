import styles from './recruitbar.module.scss';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Star } from 'lucide-react';

interface RecruitInfo {
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
}: RecruitInfo) => {
  const [isScraped, setIsScraped] = useState(false);

  return (
    <div className={styles.container}>
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
        <div>
          <Star className={isScraped ? styles.scraped : styles.noscraped} />
        </div>
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
