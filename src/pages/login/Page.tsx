import { Link } from 'react-router-dom';
import styles from './page.module.scss';
import { FormProvider, useForm } from 'react-hook-form';
import Card from '@/components/common/card/Card';
import { zodResolver } from '@hookform/resolvers/zod';
import { loginSchema, LoginValues } from '@/lib/schemas/loginSchema';
import LoginSection from '@/components/login/LoginSection';

const defaultValues = {
  email: '',
  password: '',
};

export default function LoginPage() {
  const formState = useForm({
    defaultValues,
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = (data: LoginValues) => {
    console.log(data);
  };

  const onError = (error: unknown) => {
    console.error(error);
  };

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <h1>JobForeigner</h1>
        <h2>로그인</h2>
        <p>
          아직 계정이 없으신가요? <Link to='/register'>회원가입</Link>
        </p>
        <Card>
          <FormProvider {...formState}>
            <form onSubmit={formState.handleSubmit(onSubmit, onError)}>
              <LoginSection />
            </form>
          </FormProvider>
        </Card>
      </div>
    </div>
  );
}
