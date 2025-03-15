import { useState } from "react";
import styles from "./dropdown.module.scss";
import { ChevronDown, ChevronUp } from "lucide-react";

type Props = {
	options: string[];
};

export const DropDown = ({ options }: Props) => {
	const [isOpen, setIsOpen] = useState(false);
	const [selected, setSelected] = useState(options[0]);

	const handleOptionClick = (ele: string, event: React.MouseEvent) => {
		event.stopPropagation();
		setSelected(ele);
		setIsOpen(false);
	};

	return (
		<div
			className={styles.container}
			onClick={() => {
				setIsOpen(!isOpen);
			}}
		>
			<div className={styles.selected}>
				<div>{selected}</div>
				{isOpen ? <ChevronUp /> : <ChevronDown />}
			</div>
			{isOpen && (
				<ul className={styles.dropdown}>
					{options.map((ele) => (
						<li
							key={ele}
							className={styles.element}
							onClick={(event) => handleOptionClick(ele, event)}
						>
							<span>{ele}</span>
						</li>
					))}
				</ul>
			)}
		</div>
	);
};
