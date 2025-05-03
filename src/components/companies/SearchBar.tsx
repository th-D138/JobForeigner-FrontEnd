import { Search } from "lucide-react";
import styles from "./searchBar.module.scss";

const SearchBar = () => {
	return (
		<div className={styles.container}>
			<input
				type="text"
				placeholder="기업명으로 검색하세요"
				className={styles.searchInput}
			/>
			<div className={styles.searchIcon}>
				<Search />
			</div>
		</div>
	);
};

export default SearchBar;
