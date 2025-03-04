import styles from './searchSectionForm.module.scss';
import { Search, MapPin } from 'lucide-react';

export default function SearchSectionForm() {
  return (
    <form className={styles.searchBox}>
      <div className={styles.searchBoxRow}>
        <div className={styles.searchInputWrapper}>
          <Search className={styles.inputIcon} />
          <input
            type="text"
            name="search"
            placeholder="직무, 회사명, 키워드"
            className={styles.searchInput}
            required
            maxLength={50}
          />
        </div>
        <div className={styles.searchSelectWrapper}>
          <MapPin className={styles.inputIcon} />
          <select name="region" className={styles.searchSelect} required>
            <option value="all">지역 선택</option>
            <option value="seoul">서울</option>
            <option value="busan">부산</option>
            <option value="incheon">인천</option>
            <option value="daegu">대구</option>
            <option value="other">기타</option>
          </select>
        </div>
        <button type="submit" className={styles.searchButton}>
          검색
        </button>
      </div>
    </form>
  );
}
