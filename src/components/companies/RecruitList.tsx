import styles from "./recruitList.module.scss";
import { Briefcase, Calendar } from "lucide-react";

export type RecruitListProps = {
	empolyeeType: string;
	region: string;
	title: string;
	teamName: string;
	deadline: string;
};

export const RecruitList = ({
	empolyeeType,
	region,
	title,
	teamName,
	deadline,
}: RecruitListProps) => {
	return (
		<div className={styles.container}>
			<div className={styles.topInfo}>
				<div className={styles.empolyeeType}>{empolyeeType}</div>
				<div className={styles.region}>{region}</div>
			</div>
			<div className={styles.title}>{title}</div>
			<div className={styles.bottomInfo}>
				<div className={styles.teamName}>
					<Briefcase width="1.4rem" />
					<span>{teamName}</span>
				</div>
				<div className={styles.deadline}>
					<Calendar width="1.4rem" />
					<span>{deadline}</span>
				</div>
			</div>
		</div>
	);
};
