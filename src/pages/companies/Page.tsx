import styles from "./page.module.scss";
import SearchBar from "@/components/companies/SearchBar";
import SearchFilterBar from "@/components/companies/SearchFilterBar";

export default function CompaniesPage() {
	return (
		<div className={styles.container}>
			<SearchBar />
			<SearchFilterBar />
		</div>
	);
}
