import RadarChartComponent from "@/components/companies/RadarChartComponent";
import styles from "./ratingInfo.module.scss";
import RatingInfoBox from "@/components/companies/RatingInfoBox";

export type RatingInfoType = {
	subject: string;
	score: number;
	fullMark: number;
	description: string;
};

const data: RatingInfoType[] = [
	{
		subject: "복지/문화",
		score: 4,
		fullMark: 5,
		description:
			"회사는 다양한 복지 프로그램과 문화 행사를 통해 직원들의 만족도를 높이고 있습니다.",
	},
	{
		subject: "연봉",
		score: 3,
		fullMark: 5,
		description:
			"연봉은 업계 평균 수준이며, 성과에 따라 인상될 수 있는 기회가 제공됩니다.",
	},
	{
		subject: "워라벨",
		score: 5,
		fullMark: 5,
		description:
			"직원들이 일과 삶의 균형을 잘 유지할 수 있도록 유연한 근무 환경을 지원합니다.",
	},
	{
		subject: "성장 가능성",
		score: 4,
		fullMark: 5,
		description:
			"회사는 지속적인 성장을 도모하며, 개인의 역량 강화를 위한 다양한 교육 기회를 제공합니다.",
	},
	{
		subject: "고용 안정성",
		score: 3,
		fullMark: 5,
		description:
			"고용 안정성은 보통 수준으로, 시장 상황에 따라 변동될 수 있는 부분이 있습니다.",
	},
];

const RatingInfo = () => {
	return (
		<div className={styles.container}>
			<div className={styles.titleText}>기업 평점 정보</div>
			<RadarChartComponent data={data} />
			<div className={styles.titleText}>세부 평점 정보</div>
			<div className={styles.ratingInfoBoxContainer}>
				{data.map((ele) => (
					<RatingInfoBox
						key={ele.subject}
						title={ele.subject}
						value={ele.score.toString()}
						description={ele.description}
					/>
				))}
			</div>
		</div>
	);
};

export default RatingInfo;
