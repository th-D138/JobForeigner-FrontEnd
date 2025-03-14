import styles from './addressInfo.module.scss';
import SelectField from '@/components/common/field/SelectField';
import { useFormContext } from 'react-hook-form';

const sido = [
  {
    value: 'seoul',
    label: '서울특별시',
  },
  {
    value: 'busan',
    label: '부산광역시',
  },
  {
    value: 'daegu',
    label: '대구광역시',
  },
  {
    value: 'incheon',
    label: '인천광역시',
  },
  {
    value: 'gwangju',
    label: '광주광역시',
  },
  {
    value: 'daejeon',
    label: '대전광역시',
  },
  {
    value: 'ulsan',
    label: '울산광역시',
  },
];

const sigungu = [
  {
    value: 'gangnam',
    label: '강남구',
  },
  {
    value: 'gangbuk',
    label: '강북구',
  },
  {
    value: 'gangdong',
    label: '강동구',
  },
  {
    value: 'gangseo',
    label: '강서구',
  },
  {
    value: 'mapo',
    label: '마포구',
  },
  {
    value: 'seodaemun',
    label: '서대문구',
  },
];

export default function AddressInfo() {
  const { control } = useFormContext();

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>주소</h2>
      <div className={styles.addressSection}>
        <SelectField
          control={control}
          name='sido'
          label='시/도'
          required={true}
          options={sido}
        />
        <SelectField
          control={control}
          name='sigungu'
          label='시/군/구'
          required={true}
          options={sigungu}
        />
      </div>
    </div>
  );
}
