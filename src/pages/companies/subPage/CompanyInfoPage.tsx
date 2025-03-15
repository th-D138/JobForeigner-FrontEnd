import styles from './companyInfoPage.module.scss';
import { Building2, Users, MapPin, Globe } from 'lucide-react';

type Props = {
  companyName: string;
  numOfEmployee: number;
  companyAdress: string;
  companyType: string;
  homepageUrl: string;
  description: string;
  benefits: string;
};

const CompanyInfoPage = ({
  numOfEmployee,
  companyAdress,
  companyType,
  homepageUrl,
  description,
  benefits,
}: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.contentArea}>
        <div className={styles.companyInfoSection}>
          <div className={styles.contentSection}>
            <div className={styles.headText}>기업 정보</div>
            <div className={styles.companyType}>
              <Building2 />
              <div className={styles.content}>
                <span>기업 유형</span>
                <span>{companyType}</span>
              </div>
            </div>
            <div className={styles.companyEmployee}>
              <Users />
              <div className={styles.content}>
                <span>직원 수</span>
                <span>{numOfEmployee}</span>
              </div>
            </div>
            <div className={styles.companyLocation}>
              <MapPin />
              <div className={styles.content}>
                <span>주소</span>
                <span>{companyAdress}</span>
              </div>
            </div>
            <div className={styles.homePage}>
              <Globe />
              <div className={styles.content}>
                <span>홈페이지</span>
                <span>
                  <a className={styles.link} href={homepageUrl}>
                    {homepageUrl}
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.companyDescriptionSection}>
          <div className={styles.headText}>기업 소개</div>
          <div>{description}</div>
        </div>
        <div className={styles.companyBenefitsSection}>
          <div className={styles.headText}>복리후생</div>
          <div>{benefits}</div>
        </div>
      </div>
    </div>
  );
};

export default CompanyInfoPage;
