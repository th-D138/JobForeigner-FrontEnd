import styles from './basicInfo.module.scss';
import InputField from '../../../common/field/InputField';
import Button from '@/components/common/button/Button';
import { Camera } from 'lucide-react';
import { useFormContext } from 'react-hook-form';
import useImageUpload from '@/lib/hooks/useImageUpload';

export default function BasicInfo() {
  const { control, setValue } = useFormContext();
  const { image, fileInputRef, handleImageUpload, handleUploadClick } =
    useImageUpload(setValue);

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>기본정보 입력</h2>
      <InputField control={control} name='title' label='제목' required={true} />
      <div className={styles.content}>
        <div className={styles.textRow}>
          <InputField
            control={control}
            name='name'
            label='이름'
            required={true}
          />
          <InputField
            control={control}
            name='email'
            label='이메일'
            required={true}
          />
          <InputField
            control={control}
            name='phoneNumber'
            label='전화번호'
            required={true}
            type='phone'
          />
        </div>
        <div className={styles.imageRow}>
          <div className={styles.imageWrapper}>
            {image ? (
              <img src={image} alt='profileImage' className={styles.image} />
            ) : (
              <div className={styles.placeholder}>
                <Camera />
              </div>
            )}
          </div>
          <input
            type='file'
            accept='image/*'
            ref={fileInputRef}
            onChange={handleImageUpload}
            hidden
          />
          <Button variant='outline' size='large' onClick={handleUploadClick}>
            사진 업로드
          </Button>
        </div>
      </div>
    </div>
  );
}
