import Input from '@/components/common/input/Input';
import styles from './basicInfo.module.scss';
import InputField from '../../common/field/InputField';
import Button from '@/components/common/button/Button';
import { Camera } from 'lucide-react';
import { useFormContext } from 'react-hook-form';

const image = null;

export default function BasicInfo() {
  const { control } = useFormContext();

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
              <img
                src='https://via.placeholder.com/150'
                alt='profileImage'
                className={styles.image}
              />
            ) : (
              <div className={styles.placeholder}>
                <Camera />
              </div>
            )}
          </div>
          <Button variant='outline' size='large'>
            사진 업로드
          </Button>
        </div>
      </div>
    </div>
  );
}
