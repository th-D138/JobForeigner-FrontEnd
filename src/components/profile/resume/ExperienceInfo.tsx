import Button from '@/components/common/button/Button';
import styles from './experienceInfo.module.scss';
import { Plus, Trash } from 'lucide-react';
import { useFieldArray, useFormContext } from 'react-hook-form';
import InputField from '@/components/common/field/InputField';
import TextareaField from '@/components/common/field/TextareaField';

const experience = {
  name: '',
  spot: '',
  period: '',
  mainTask: '',
};

export default function experienceInfo() {
  const { control } = useFormContext();
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'experiences',
  });

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.title}>경력</h2>
        <Button
          type='button'
          variant='outline'
          size='medium'
          onClick={() => append(experience)}
        >
          <Plus className={styles.plusIcon} />
          경력 추가
        </Button>
      </div>
      {!fields.length ? (
        <p className={styles.appendText}>경력 정보를 추가해주세요</p>
      ) : null}
      {fields.map((field, index) => (
        <div key={field.id} className={styles.experienceWrapper}>
          <div className={styles.experienceHeader}>
            <Trash className={styles.trashIcon} onClick={() => remove(index)} />
          </div>
          <div className={styles.experienceContent}>
            <div className={styles.nameAndSpot}>
              <InputField
                control={control}
                name={`experiences.${index}.name`}
                label='회사명'
                placeholder='회사명을 입력하세요'
                required={true}
              />
              <InputField
                control={control}
                name={`experiences.${index}.spot`}
                label='직위'
                placeholder='직위를 입력하세요'
                required={true}
              />
            </div>
            <InputField
              control={control}
              name={`experiences.${index}.period`}
              label='근무 기간'
              placeholder='예: 2020.03 - 2022.02'
              required={true}
            />
            <TextareaField
              control={control}
              name={`experiences.${index}.mainTask`}
              label='주요 업무'
              placeholder='주요 업무와 성과를 입력하세요'
            />
          </div>
        </div>
      ))}
    </div>
  );
}
