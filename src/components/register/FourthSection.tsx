import { Dispatch } from 'react';
import { SetStateAction } from 'react';
import styles from './fourthSection.module.scss';
import Button from '../common/button/Button';
import { ChevronLeft } from 'lucide-react';

interface Props {
  setProgress: Dispatch<SetStateAction<number>>;
}

export default function FourthSection({ setProgress }: Props) {
  const onClickPrevious = () => {
    setProgress(3);
  };

  return (
    <div className={styles.container}>
      <h2>약관 동의</h2>
      <div className={styles.actions}>
        <Button type='button' variant='outline' onClick={onClickPrevious}>
          <ChevronLeft />
          이전
        </Button>
        <Button type='submit'>가입하기</Button>
      </div>
    </div>
  );
}
