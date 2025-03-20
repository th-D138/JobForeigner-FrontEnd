import Card from '@/components/common/card/Card';
import styles from './page.module.scss';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Progress from '@/components/common/progress/Progress';
import FirstSection from '@/components/register/FirstSection';
import SecondSection from '@/components/register/SecondSection';
import ThirdSection from '@/components/register/ThirdSections';
import FourthSection from '@/components/register/FourthSection';
import { FormProvider, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { registerSchema, RegisterValues } from '@/lib/schemas/registerSchema';

const defaultValues = {
  email: '',
  password: '',
  passwordConfirm: '',
  name: '',
  sex: '',
  phoneNumber: '',
  nationality: '',
  visaStatus: 'none',
  languageAbility: [],
  interests: [],
};

export default function RegisterPage() {
  const [progress, setProgress] = useState(1);
  const formState = useForm({
    defaultValues,
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = (data: RegisterValues) => {
    console.log(data);
  };

  const onError = (error: unknown) => {
    console.error(error);
  };

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <h1>JobForeigner</h1>
        <h2>회원가입</h2>
        <p>
          이미 계정이 있으신가요? <Link to='/login'>로그인</Link>
        </p>
        <div className={styles.progressBar}>
          <span>{progress} / 4 단계</span>
          <Progress value={progress * 25} />
        </div>
        <Card>
          <FormProvider {...formState}>
            <form onSubmit={formState.handleSubmit(onSubmit, onError)}>
              {progress === 1 && <FirstSection setProgress={setProgress} />}
              {progress === 2 && <SecondSection setProgress={setProgress} />}
              {progress === 3 && <ThirdSection setProgress={setProgress} />}
              {progress === 4 && <FourthSection setProgress={setProgress} />}
            </form>
          </FormProvider>
        </Card>
      </div>
    </div>
  );
}
