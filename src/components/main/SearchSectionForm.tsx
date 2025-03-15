import Input from '../common/input/Input';
import Select from '../common/select/Select';
import styles from './searchSectionForm.module.scss';

const selectOptions = [
  { value: 'seoul', label: '서울' },
  { value: 'busan', label: '부산' },
  { value: 'daegu', label: '대구' },
  { value: 'incheon', label: '인천' },
  { value: 'gwangju', label: '광주' },
  { value: 'daejeon', label: '대전' },
  { value: 'ulsan', label: '울산' },
  { value: 'sejong', label: '세종' },
  { value: 'gyeonggi', label: '경기' },
  { value: 'gangwon', label: '강원' },
  { value: 'chungbuk', label: '충북' },
  { value: 'chungnam', label: '충남' },
  { value: 'jeonbuk', label: '전북' },
  { value: 'jeonnam', label: '전남' },
  { value: 'gyeongbuk', label: '경북' },
  { value: 'gyeongnam', label: '경남' },
  { value: 'jeju', label: '제주' },
];

export default function SearchSectionForm() {
  return (
    <form className={styles.searchBox}>
      <div className={styles.searchBoxRow}>
        <Input
          type='text'
          name='search'
          placeholder='직무, 회사명, 키워드'
          icon='search'
        />
        <Select name='region' icon='map-pin' options={selectOptions} />
        <button type='submit' className={styles.searchButton}>
          검색
        </button>
      </div>
    </form>
  );
}
