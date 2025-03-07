import { Mail, MapPin, Phone } from 'lucide-react';
import styles from './profileInfo.module.scss';

interface Props {
  name: string;
  email: string;
  phoneNumber: string;
  region: string;
}

export default function ProfileInfo({
  name,
  email,
  phoneNumber,
  region,
}: Props) {
  return (
    <div className={styles.profileInfo}>
      <div className={styles.profileTopRow}>
        <h2 className={styles.statsItemLabel}>{name}</h2>
        <button className={styles.editButton}>프로필 수정</button>
      </div>
      <div className={styles.profileDetails}>
        <div className={styles.profileDetailItem}>
          <Mail className={styles.profileDetailIcon} />
          {email}
        </div>
        <div className={styles.profileDetailItem}>
          <Phone className={styles.profileDetailIcon} />
          {phoneNumber}
        </div>
        <div className={styles.profileDetailItem}>
          <MapPin className={styles.profileDetailIcon} />
          {region}
        </div>
      </div>
    </div>
  );
}
