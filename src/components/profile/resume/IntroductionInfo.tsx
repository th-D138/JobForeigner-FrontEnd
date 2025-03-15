import { useFormContext } from 'react-hook-form';
import styles from './introductionInfo.module.scss';
import TextareaField from '@/components/common/field/TextareaField';

export default function IntroductionInfo() {
  const { control } = useFormContext();

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>자기소개</h2>
      <TextareaField
        control={control}
        name='introduction'
        label='자기소개'
        placeholder='자신의 강점, 경력, 목표 등을 자유롭게 작성해주세요.'
        maxLength={5000}
      />
    </div>
  );
}
