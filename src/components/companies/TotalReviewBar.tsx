import styles from "./totalReviewBar.module.scss";
import { Star } from "lucide-react";

type Props = {
	name: string;
	maxScore: string;
	score: string;
	description: string;
};

const TotalReviewBar = ({ name, maxScore, score, description }: Props) => {
	return (
		<div className={styles.container}>
			<div className={styles.topSection}>
				<div className={styles.name}>{name}</div>
				<div className={styles.score}>
					<Star />
					{`${score}/${maxScore}`}
				</div>
			</div>
			<div className={styles.description}>{description}</div>
		</div>
	);
};

export default TotalReviewBar;
