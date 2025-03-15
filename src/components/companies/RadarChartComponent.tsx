import { RatingInfoType } from "@/pages/companies/subPage/RatingInfo";
import styles from "./radarChartComponent.module.scss";
import {
	Radar,
	RadarChart as RechartsRadarChart,
	PolarGrid,
	PolarAngleAxis,
	PolarRadiusAxis,
	ResponsiveContainer,
} from "recharts";

type Props = {
	data: RatingInfoType[];
};

const RadarChartComponent = ({ data }: Props) => {
	return (
		<div className={styles.container}>
			<ResponsiveContainer width="100%" height={300}>
				<RechartsRadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
					<PolarGrid />
					<PolarAngleAxis dataKey="subject" />
					<PolarRadiusAxis angle={30} domain={[0, 5]} />
					<Radar
						name="평점"
						dataKey="score"
						stroke="#8884d8"
						fill="#8884d8"
						fillOpacity={0.6}
					/>
				</RechartsRadarChart>
			</ResponsiveContainer>
		</div>
	);
};

export default RadarChartComponent;
