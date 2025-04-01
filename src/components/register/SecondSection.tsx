import { SetStateAction } from 'react';
import { Dispatch } from 'react';
import styles from './secondSection.module.scss';
import InputField from '../common/field/InputField';
import { useFormContext } from 'react-hook-form';
import SelectField from '../common/field/SelectField';
import {
  nationalityValues,
  sexValues,
} from '@/lib/constants/registerSelectForm';
import Button from '../common/button/Button';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import RadioField from '../common/field/RadioField';

interface Props {
  setProgress: Dispatch<SetStateAction<number>>;
}

export default function SecondSection({ setProgress }: Props) {
  const { control, trigger, watch } = useFormContext();

  const name = watch('name');
  const sex = watch('sex');
  const phoneNumber = watch('phoneNumber');
  const nationality = watch('nationality');

  const onClickPrevious = () => {
    setProgress(1);
  };

  const onClickNext = async () => {
    const isValid = await trigger([
      'name',
      'sex',
      'phoneNumber',
      'nationality',
    ]);

    if (isValid && name && sex && phoneNumber && nationality) {
      setProgress(3);
    }
  };

  return (
    <div className={styles.container}>
      <h2>기본 정보</h2>
      <InputField
        control={control}
        name='name'
        label='이름'
        placeholder='이름을 입력해주세요.'
        required={true}
      />
      <RadioField
        control={control}
        name='sex'
        label='성별'
        required={true}
        options={sexValues}
      />
      <InputField
        control={control}
        name='phoneNumber'
        label='전화번호'
        type='phone'
        placeholder='전화번호를 입력해주세요.'
        required={true}
      />
      <SelectField
        control={control}
        name='nationality'
        label='국적'
        required={true}
        options={nationalityValues}
      />
      <div className={styles.actions}>
        <Button type='button' variant='outline' onClick={onClickPrevious}>
          <ChevronLeft />
          이전
        </Button>
        <Button type='button' onClick={onClickNext}>
          다음
          <ChevronRight />
        </Button>
      </div>
    </div>
  );
}
