import { useEffect, useState } from "react";
import styles from "./home.module.scss";

export default function Home() {
	const [splitHeader, setSplitHeader] = useState<string[]>([]);

	useEffect(() => {
		const headerText = "Wellness Warriors";
		const splitText = headerText.split("");

		setSplitHeader(splitText);
	}, []);

	return (
		<div>
			<div className={styles.title}>
				{splitHeader.map((char, index) => (
					<h1 key={index} className={styles.bubble}>
						{char === " " ? "-" : char}
					</h1>
				))}
			</div>
			<div className={styles.pageContainer}>
				<div className={`${styles.leftBox} ${styles.profile}`}>
					<div className={styles.pfp}>
						<div className={styles.image}>
							<p>Picture</p>
						</div>
						<p className={styles.name}>username</p>
					</div>
					<div className={styles.badges}></div>
					<div className={styles.info}></div>
				</div>
				<div className={styles.midBox}>
					<div className={`${styles.questBox} ${styles.button}`}></div>
					<div className={`${styles.battleBox} ${styles.button}`}></div>
					<div className={`${styles.chatBox} ${styles.button}`}></div>
					<div className={`${styles.healthBox} ${styles.button}`}></div>
					<div className={`${styles.timeTrialBox} ${styles.button}`}></div>
					<div className={`${styles.addExerciseBox} ${styles.button}`}></div>
				</div>


			</div>
		</div>
	);
};