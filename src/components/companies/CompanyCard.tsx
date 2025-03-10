import styles from "./companycard.module.scss";
import { CompanyType } from "./CompanyLists";
import { Building2, MapPin, Users } from "lucide-react";

const CompanyCard = ({
	companyImg,
	companyName,
	description,
	companyType,
	adress,
	numOfEmployee,
}: CompanyType) => {
	return (
		<div className={styles.container}>
			<div className={styles.companyInfo}>
				<img src={companyImg} alt={companyName} />
				<div className={styles.description}>
					<div className={styles.companyName}>{companyName}</div>
					<div className={styles.description}>{description}</div>
				</div>
			</div>
			<div className={styles.companyType}>
				<Building2 width="1.4rem" />
				<span>{companyType}</span>
			</div>
			<div className={styles.adress}>
				<MapPin width="1.4rem" />
				<span>{adress}</span>
			</div>
			<div className={styles.employeeNum}>
				<Users width="1.4rem" />
				<span>{numOfEmployee}</span>
			</div>
		</div>
	);
};

export default CompanyCard;
