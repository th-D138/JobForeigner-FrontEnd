import Input from '@/components/common/input/Input';
import styles from './basicInfo.module.scss';
import InputField from '../../common/field/InputField';
import Button from '@/components/common/button/Button';
import { Camera } from 'lucide-react';

const image = null;

export default function BasicInfo() {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>기본정보 입력</h2>
      <InputField label='이력서 제목' required>
        <Input placeholder='이력서 제목을 입력해주세요' name='title' />
      </InputField>
      <div className={styles.content}>
        <div className={styles.textRow}>
          <InputField label='이름' required>
            <Input placeholder='이름을 입력해주세요' name='name' />
          </InputField>
          <InputField label='이메일' required>
            <Input
              placeholder='이메일을 입력해주세요'
              type='email'
              name='email'
            />
          </InputField>
          <InputField label='전화번호' required>
            <Input
              placeholder='전화번호를 입력해주세요'
              type='tel'
              name='phoneNumber'
            />
          </InputField>
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
