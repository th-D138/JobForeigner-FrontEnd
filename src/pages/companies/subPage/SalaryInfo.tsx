import SalaryBox from "@/components/companies/SalaryBox";
import styles from "./salaryInfo.module.scss";
import AnnualHiresChart from "@/components/companies/AnnualHiresChart";

const SalaryInfo = () => {
	return (
		<div className={styles.container}>
			<div className={styles.salaryBoxContainer}>
				<SalaryBox titleText="전체 연봉" value={5978} scale="만원" />
				<SalaryBox titleText="월 실수령액" value={4197210} scale="원" />
			</div>
			<div className={styles.chartContainer}>
				<AnnualHiresChart />
			</div>
		</div>
	);
};

export default SalaryInfo;
