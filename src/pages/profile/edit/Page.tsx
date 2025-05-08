import Button from '@/components/common/button/Button';
import styles from './page.module.scss';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { FormProvider, useForm } from 'react-hook-form';
import UserProfileEditForm from '@/components/profile/edit/UserProfileEditForm';

const defaultValues = {
  phoneNumber: '010-1111-2222',
  email: 'new@example.com',
  address: '서울특별시 성동구 성수이로 123',
  detailAddress: '456호',
  zipcode: '04790',
};

export default function ProfileEditPage() {
  const navigation = useNavigate();
  const formState = useForm({
    defaultValues,
  });

  const onSubmit = async (data: unknown) => {
    console.log(data);
  };

  const onError = (error: unknown) => {
    console.error(error);
  };

  return (
    <div className={styles.container}>
      <main className={styles.page}>
        <div className={styles.title}>
          <h1>프로필 수정</h1>
          <Button
            variant='outline'
            size='medium'
            onClick={() => navigation(-1)}
          >
            <span className={styles.buttonContent}>
              <ArrowLeft className={styles.buttonIcon} />
              돌아가기
            </span>
          </Button>
        </div>
        <section>
          <h2>기본 정보</h2>
          <p>프로필의 기본 정보를 수정할 수 있습니다.</p>
          <FormProvider {...formState}>
            <form onSubmit={formState.handleSubmit(onSubmit, onError)}>
              <UserProfileEditForm />
            </form>
          </FormProvider>
        </section>
      </main>
    </div>
  );
}
