import { useFieldArray, useFormContext } from 'react-hook-form';
import styles from './awardsInfo.module.scss';
import Button from '@/components/common/button/Button';
import { Plus, Trash } from 'lucide-react';
import InputField from '@/components/common/field/InputField';
import TextareaField from '@/components/common/field/TextareaField';
const award = {
  name: '',
  organization: '',
  date: '',
  description: '',
};

export default function AwardsInfo() {
  const { control } = useFormContext();
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'awards',
  });

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.title}>활동 및 수상</h2>
        <Button
          type='button'
          variant='outline'
          size='medium'
          onClick={() => append(award)}
        >
          <Plus className={styles.plusIcon} />
          활동/수상 추가
        </Button>
      </div>
      {!fields.length ? (
        <p className={styles.appendText}>활동/수상 정보를 추가해주세요</p>
      ) : null}
      {fields.map((field, index) => (
        <div key={field.id} className={styles.awardWrapper}>
          <div className={styles.awardHeader}>
            <Trash className={styles.trashIcon} onClick={() => remove(index)} />
          </div>
          <div className={styles.awardContent}>
            <div className={styles.nameAndOrganization}>
              <InputField
                control={control}
                name={`awards.${index}.name`}
                label='활동/수상명'
                placeholder='활동 또는 수상 내역을 입력하세요'
                required={true}
                maxLength={50}
              />
              <InputField
                control={control}
                name={`awards.${index}.organization`}
                label='주관 기관'
                placeholder='주관 기관을 입력하세요'
                required={true}
                maxLength={30}
              />
            </div>
            <InputField
              control={control}
              name={`awards.${index}.date`}
              label='날짜'
              placeholder='예: 2020.05'
              required={true}
              maxLength={30}
            />
            <TextareaField
              control={control}
              name={`awards.${index}.description`}
              label='설명'
              placeholder='활동 내용이나 수상 내역에 대한 설명을 입력하세요'
              maxLength={2000}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
