import { useFormContext } from 'react-hook-form';
import styles from './companyProfileEditForm.module.scss';
import InputField from '@/components/common/field/InputField';
import SelectField from '@/components/common/field/SelectField';
import TextareaField from '@/components/common/field/TextareaField';
import Button from '@/components/common/button/Button';
import { Camera, Save } from 'lucide-react';
import useImageUpload from '@/lib/hooks/useImageUpload';

const industryItems = [
  {
    label: 'IT/소프트웨어',
    value: 'it-dev',
  },
  {
    label: '서비스업',
    value: 'service',
  },
  {
    label: '제조/생산',
    value: 'manufacturing',
  },
  {
    label: '교육',
    value: 'education',
  },
  {
    label: '사무/관리',
    value: 'office',
  },
  {
    label: '영업/마케팅',
    value: 'sales',
  },
  {
    label: '디자인',
    value: 'design',
  },
  {
    label: '기타',
    value: 'others',
  },
];

export default function CompanyProfileEditForm() {
  const { control, setValue } = useFormContext();
  const { image, fileInputRef, handleImageUpload, handleUploadClick } =
    useImageUpload(setValue);

  return (
    <div className={styles.formWrapper}>
      <div className={styles.container}>
        <div className={styles.imageWrapper}>
          <div className={styles.imageContainer}>
            {image ? (
              <img src={image} alt='profileImage' className={styles.image} />
            ) : (
              <div className={styles.placeholder}></div>
            )}
            <input
              type='file'
              accept='image/*'
              ref={fileInputRef}
              onChange={handleImageUpload}
              hidden
            />
          </div>
          <button
            type='button'
            className={styles.button}
            onClick={handleUploadClick}
          >
            <Camera className={styles.icon} />
          </button>
        </div>
        <p className={styles.caption}>권장 크기: 400x400 픽셀, 최대 2MB</p>
      </div>
      <div className={styles.twoRow}>
        <InputField
          control={control}
          name='company'
          label='기업명'
          required={true}
        />
        <InputField
          control={control}
          name='ceo'
          label='대표자명'
          required={true}
        />
      </div>
      <div className={styles.twoRow}>
        <InputField
          control={control}
          name='businessNumber'
          label='사업자 등록번호'
          required={true}
        />
        <SelectField
          control={control}
          name='industry'
          label='업종'
          required={true}
          options={industryItems}
        />
      </div>
      <div className={styles.twoRow}>
        <InputField control={control} name='foundedYear' label='설립연도' />
        <InputField control={control} name='employeeCount' label='직원수' />
      </div>
      <InputField
        control={control}
        name='address'
        label='주소'
        required={true}
      />
      <div className={styles.twoRow}>
        <InputField
          control={control}
          name='phone'
          label='연락처'
          required={true}
        />
        <InputField
          control={control}
          name='email'
          label='이메일'
          required={true}
        />
      </div>
      <InputField control={control} name='website' label='웹사이트' />
      <TextareaField control={control} name='description' label='회사 소개' />
      <div className={styles.actions}>
        <Button size='medium'>
          <span className={styles.buttonText}>
            <Save />
            저장하기
          </span>
        </Button>
      </div>
    </div>
  );
}
