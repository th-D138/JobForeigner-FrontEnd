import { SetStateAction } from 'react';
import { Dispatch } from 'react';
import styles from './thirdSection.module.scss';
import { useFormContext } from 'react-hook-form';
import SelectField from '../common/field/SelectField';
import {
  languageAbilityValues,
  visaStatusValues,
  interestValues,
} from '@/lib/constants/registerSelectForm';
import Button from '../common/button/Button';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import CheckboxField from '../common/field/CheckboxField';

interface Props {
  setProgress: Dispatch<SetStateAction<number>>;
}

export default function ThirdSection({ setProgress }: Props) {
  const { control, trigger, watch } = useFormContext();

  const visaStatus = watch('visaStatus');
  const languageAbility = watch('languageAbility');

  const onClickPrevious = () => {
    setProgress(2);
  };

  const onClickNext = async () => {
    const isValid = await trigger(['visaStatus', 'languageAbility']);

    if (isValid && visaStatus && languageAbility) {
      setProgress(4);
    }
  };

  return (
    <div className={styles.container}>
      <h2>추가 정보</h2>
      <SelectField
        control={control}
        name='visaStatus'
        label='비자 상태'
        options={visaStatusValues}
      />
      <CheckboxField
        control={control}
        name='languageAbility'
        label='언어능력'
        options={languageAbilityValues}
      />
      <CheckboxField
        control={control}
        name='interests'
        label='관심분야'
        options={interestValues}
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
