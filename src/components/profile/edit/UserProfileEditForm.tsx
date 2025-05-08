import useImageUpload from '@/lib/hooks/useImageUpload';
import styles from './userProfileEditForm.module.scss';
import { useFormContext } from 'react-hook-form';
import Button from '@/components/common/button/Button';
import { Camera, Save } from 'lucide-react';
import InputField from '@/components/common/field/InputField';

export default function UserProfileEditForm() {
  const { control, setValue } = useFormContext();
  const { image, fileInputRef, handleImageUpload, handleUploadClick } =
    useImageUpload(setValue);

  return (
    <div className={styles.formWrapper}>
      <div className={styles.container}>
        <div className={styles.imageWrapper}>
          <div className={styles.imageContainer}>
            {image ? (
              <img src={image} alt='profileImage' className={styles.image} />
            ) : (
              <div className={styles.placeholder}></div>
            )}
            <input
              type='file'
              accept='image/*'
              ref={fileInputRef}
              onChange={handleImageUpload}
              hidden
            />
          </div>
          <button
            type='button'
            className={styles.button}
            onClick={handleUploadClick}
          >
            <Camera className={styles.icon} />
          </button>
        </div>
        <p className={styles.caption}>권장 크기: 400x400 픽셀, 최대 2MB</p>
      </div>
      <div className={styles.twoRow}>
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
          type='phone'
          required={true}
        />
      </div>
      <InputField
        control={control}
        name='address'
        label='주소'
        required={true}
      />
      <div className={styles.twoRow}>
        <InputField
          control={control}
          name='detailAddress'
          label='상세주소'
          required={true}
        />
        <InputField
          control={control}
          name='zipcode'
          label='우편번호'
          required={true}
        />
      </div>

      <div className={styles.actions}>
        <Button size='medium'>
          <span className={styles.buttonText}>
            <Save />
            저장하기
          </span>
        </Button>
      </div>
    </div>
  );
}
