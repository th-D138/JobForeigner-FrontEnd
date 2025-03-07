import { Search } from "lucide-react";
import styles from "./searchBar.module.scss";

const SearchBar = () => {
	return (
		<section className={styles.searchBarSection}>
			<div className={styles.container}>
				<input
					type="text"
					placeholder="기업명으로 검색하세요"
					className={styles.searchInput}
				/>
				<Search />
			</div>
		</section>
	);
};

export default SearchBar;
