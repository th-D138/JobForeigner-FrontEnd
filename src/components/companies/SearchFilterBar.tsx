import styles from "./searchFilterBar.module.scss";
import { DropDown } from "./Dropdown";

const SearchFilterBar = () => {
	const dummyRegion = ["전체", "서울", "구미", "부산", "대구"];
	const dummyJobType = ["전체", "IT", "회계", "금융", "경영"];
	return (
		<section className={styles.searchFilterBarSection}>
			<div className={styles.filterBarContainer}>
				<div className={styles.filterByRegion}>
					<div className={styles.fillterTitle}>지역</div>
					<DropDown options={dummyRegion} />
				</div>
				<div className={styles.filterByJobType}>
					<div className={styles.fillterTitle}>직종</div>
					<DropDown options={dummyJobType} />
				</div>
			</div>
		</section>
	);
};

export default SearchFilterBar;
