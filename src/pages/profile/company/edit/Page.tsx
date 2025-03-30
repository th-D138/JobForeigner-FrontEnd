import { useNavigate } from 'react-router-dom';
import styles from './page.module.scss';
import Button from '@/components/common/button/Button';
import { ArrowLeft } from 'lucide-react';
import { FormProvider, useForm } from 'react-hook-form';
import CompanyProfileEditForm from '@/components/profile/company/edit/CompanyProfileEditForm';

const defaultValues = {
  logo: null,
  company: '',
  ceo: '',
  businessNumber: '',
  industry: '',
  foundedYear: '',
  employeeCount: '',
  address: '',
  phone: '',
  email: '',
  website: '',
  description: '',
};

export default function CompanyProfileEditPage() {
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
          <h1>기업 정보 수정</h1>
          <Button
            variant='outline'
            size='medium'
            onClick={() => navigation(-1)}
          >
            <span className={styles.buttonContent}>
              <ArrowLeft className={styles.buttonIcon} />
              정보 수정
            </span>
          </Button>
        </div>
        <section>
          <h2>기본 정보</h2>
          <p>기업의 기본 정보를 수정할 수 있습니다.</p>
          <FormProvider {...formState}>
            <form onSubmit={formState.handleSubmit(onSubmit, onError)}>
              <CompanyProfileEditForm />
            </form>
          </FormProvider>
        </section>
      </main>
    </div>
  );
}
