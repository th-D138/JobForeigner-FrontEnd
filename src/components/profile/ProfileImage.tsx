import { Camera } from 'lucide-react';
import styles from './profileImage.module.scss';

interface Props {
  imageUrl?: string;
}

export default function ProfileImage({ imageUrl }: Props) {
  return (
    <div className={styles.profileImageWrapper}>
      <div className={styles.profileImageContainer}>
        <img
          src={imageUrl}
          alt={'프로필 이미지'}
          className={styles.profileImage}
        />
      </div>
      <button className={styles.cameraButton}>
        <Camera size={16} />
      </button>
    </div>
  );
}
