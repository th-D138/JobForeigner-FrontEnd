import {
  Globe,
  MapPin,
  Mail,
  Phone,
  Calendar,
  Users,
  FileText,
  User,
} from 'lucide-react';
import styles from './companyInfo.module.scss';
import { CompanyProfileInfo } from '@/lib/type/company/company';

interface Props {
  companyData: CompanyProfileInfo;
}

export default function CompanyInfo({ companyData }: Props) {
  return (
    <>
      <div className={styles.topSection}>
        <div className={styles.logoContainer}>
          <div className={styles.logoWrapper}>
            <img
              src={companyData.logo || '/placeholder.svg'}
              alt={companyData.name}
              className={styles.logoImage}
            />
          </div>
        </div>

        <div className={styles.companyInfo}>
          <div>
            <h2 className={styles.companyName}>{companyData.name}</h2>
            <span className={styles.companyIndustry}>
              {companyData.industry}
            </span>
          </div>

          <div className={styles.infoGrid}>
            <div className={styles.infoItem}>
              <User className={styles.icon} />
              <div>
                <span className={styles.infoTitle}>대표자명</span>
                <span className={styles.infoContent}>{companyData.ceo}</span>
              </div>
            </div>

            <div className={styles.infoItem}>
              <FileText className={styles.icon} />
              <div>
                <span className={styles.infoTitle}>사업자 등록번호</span>
                <span className={styles.infoContent}>
                  {companyData.businessNumber}
                </span>
              </div>
            </div>

            <div className={styles.infoItem}>
              <Calendar className={styles.icon} />
              <div>
                <span className={styles.infoTitle}>설립연도</span>
                <span className={styles.infoContent}>
                  {companyData.foundedYear}년
                </span>
              </div>
            </div>

            <div className={styles.infoItem}>
              <Users className={styles.icon} />
              <div>
                <span className={styles.infoTitle}>직원 수</span>
                <span className={styles.infoContent}>
                  {companyData.employeeCount}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.contactSection}>
        <div className={styles.contactItem}>
          <MapPin className={styles.icon} />
          <div>
            <span className={styles.contactTitle}>주소</span>
            <span className={styles.contactContent}>{companyData.address}</span>
          </div>
        </div>

        <div className={styles.contactItem}>
          <Phone className={styles.icon} />
          <div>
            <span className={styles.contactTitle}>연락처</span>
            <span className={styles.contactContent}>{companyData.phone}</span>
          </div>
        </div>

        <div className={styles.contactItem}>
          <Mail className={styles.icon} />
          <div>
            <span className={styles.contactTitle}>이메일</span>
            <span className={styles.contactContent}>{companyData.email}</span>
          </div>
        </div>

        <div className={styles.contactItem}>
          <Globe className={styles.icon} />
          <div>
            <span className={styles.contactTitle}>웹사이트</span>
            <a
              href={companyData.website}
              target='_blank'
              rel='noopener noreferrer'
              className={styles.websiteLink}
            >
              {companyData.website}
            </a>
          </div>
        </div>
      </div>

      <div className={styles.descriptionSection}>
        <span className={styles.descriptionTitle}>회사 소개</span>
        <span className={styles.descriptionContent}>
          {companyData.description}
        </span>
      </div>
    </>
  );
}
