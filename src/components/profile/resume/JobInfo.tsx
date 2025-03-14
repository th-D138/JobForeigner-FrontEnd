import styles from './jobInfo.module.scss';
import { useFormContext } from 'react-hook-form';
import SelectField from '@/components/common/field/SelectField';

const jobOptions = [
  {
    value: 'developer',
    label: '개발자',
  },
  {
    value: 'designer',
    label: '디자이너',
  },
  {
    value: 'manager',
    label: '매니저',
  },
  {
    value: 'planner',
    label: '기획자',
  },
  {
    value: 'marketer',
    label: '마케터',
  },
  {
    value: 'etc',
    label: '기타',
  },
];

export default function JobInfo() {
  const { control } = useFormContext();

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>직종</h2>
      <SelectField
        control={control}
        name='job'
        label='희망 직종'
        required={true}
        options={jobOptions}
      />
    </div>
  );
}
