import styles from "./detailPage.module.scss";
import { CompanyType } from "@/components/companies/CompanyLists";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import CompanyInfoPage from "./subPage/CompanyInfoPage";

const DetailPage = () => {
	const location = useLocation();
	const data: CompanyType = location.state;
	const optionTabs = ["기업정보", "채용", "연봉", "기업평점", "후기"];
	const [selectedTab, setSelectedTab] = useState(optionTabs[0]);
	return (
		<div className={styles.container}>
			<div className={styles.infoTitle}>
				<img src={data.companyImg} alt={data.companyName} />
				<div className={styles.companyName}>{data.companyName}</div>
			</div>
			<div className={styles.optionTab}>
				{optionTabs.map((ele) => (
					<div
						onClick={() => setSelectedTab(ele)}
						key={ele}
						className={`${styles.option} ${
							selectedTab === ele ? styles.selectedOption : ""
						}`}
					>
						{ele}
					</div>
				))}
			</div>
			<div className={styles.selectInfo}>
				<CompanyInfoPage
					companyAdress={data.adress}
					companyName={data.companyName}
					companyType={data.companyType}
					description={data.description}
					homepageUrl={data.homepageUrl}
					numOfEmployee={data.numOfEmployee}
					benefits={data.benefits}
				/>
			</div>
		</div>
	);
};

export default DetailPage;
