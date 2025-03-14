import BasicInfo from '@/components/profile/resume/BasicInfo';
import styles from './page.module.scss';
import BottomActions from '@/components/profile/resume/BottomActions';
import AddressInfo from '@/components/profile/resume/AddressInfo';
import JobInfo from '@/components/profile/resume/JobInfo';
import SkillsInfo from '@/components/profile/resume/SkillsInfo';
import { FormProvider, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { resumeSchema } from '@/lib/schemas/resumeSchema';
import ExperienceInfo from '@/components/profile/resume/ExperienceInfo';
import EducationInfo from '@/components/profile/resume/EducationInfo';
import AwardsInfo from '@/components/profile/resume/AwardsInfo';
import CertificatesInfo from '@/components/profile/resume/certificatesInfo';
import LinkInfo from '@/components/profile/resume/LinkInfo';
import IntroductionInfo from '@/components/profile/resume/IntroductionInfo';
import FilesInfo from '@/components/profile/resume/FilesInfo';

const defaultValues = {
  title: '',
  name: '',
  email: '',
  phoneNumber: '',
  sido: '',
  sigungu: '',
  job: '',
  skills: [],
  experiences: [],
  educations: [],
  awards: [],
  certificates: [],
  files: [],
  links: [],
  introduction: '',
};

export default function CreateResumePage() {
  const formState = useForm({
    defaultValues,
    resolver: zodResolver(resumeSchema),
  });

  const onSubmit = async (data: unknown) => {
    console.log(data);
  };

  const onError = (error: unknown) => {
    console.error(error);
  };

  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <h1>새 이력서 작성</h1>
        <p>* 표시는 필수 입력 항목입니다</p>
      </div>
      <FormProvider {...formState}>
        <form
          onSubmit={formState.handleSubmit(onSubmit, onError)}
          className={styles.contentSection}
        >
          <BasicInfo />
          <AddressInfo />
          <JobInfo />
          <SkillsInfo />
          <ExperienceInfo />
          <EducationInfo />
          <AwardsInfo />
          <CertificatesInfo />
          <FilesInfo />
          <LinkInfo />
          <IntroductionInfo />
          <BottomActions />
        </form>
      </FormProvider>
    </div>
  );
}
