import { useFieldArray, useFormContext } from 'react-hook-form';
import styles from './educationInfo.module.scss';
import { Trash } from 'lucide-react';
import Button from '@/components/common/button/Button';
import { Plus } from 'lucide-react';
import InputField from '@/components/common/field/InputField';
import TextareaField from '@/components/common/field/TextareaField';

const education = {
  school: '',
  major: '',
  degree: '',
  period: '',
  description: '',
};

export default function EducationInfo() {
  const { control } = useFormContext();
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'educations',
  });

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.title}>학력</h2>
        <Button
          type='button'
          variant='outline'
          size='medium'
          onClick={() => append(education)}
        >
          <Plus className={styles.plusIcon} />
          경력 추가
        </Button>
      </div>
      {!fields.length ? (
        <p className={styles.appendText}>학력 정보를 추가해주세요</p>
      ) : null}
      {fields.map((field, index) => (
        <div key={field.id} className={styles.educationWrapper}>
          <div className={styles.educationHeader}>
            <Trash className={styles.trashIcon} onClick={() => remove(index)} />
          </div>
          <div className={styles.educationContent}>
            <div className={styles.schoolAndMajor}>
              <InputField
                control={control}
                name={`educations.${index}.school`}
                label='학교명'
                placeholder='학교명을 입력하세요'
                required={true}
              />
              <InputField
                control={control}
                name={`educations.${index}.major`}
                label='전공'
                placeholder='전공을 입력하세요'
                required={true}
              />
            </div>
            <div className={styles.degreeAndPeriod}>
              <InputField
                control={control}
                name={`educations.${index}.degree`}
                label='학위'
                placeholder='예: 학사, 석사, 박사'
                required={true}
              />
              <InputField
                control={control}
                name={`educations.${index}.period`}
                label='재학 기간'
                placeholder='예: 2020.03 - 2022.02'
                required={true}
              />
            </div>
            <TextareaField
              control={control}
              name={`educations.${index}.description`}
              label='추가 정보'
              placeholder='학점, 주요 활동 등 추가 정보를 입력하세요'
            />
          </div>
        </div>
      ))}
    </div>
  );
}
