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
				<div className={styles.leftBox}>
					<div className={styles.guildBox}>
						<p className={styles.name}>Guild Name</p>
					</div>
					<div className={styles.playerBox}>
						<p className={styles.name}>Player Name</p>
						<div className={styles.badges}>
							<div>b1</div>
							<div>b2</div>
							<div>b3</div>
							<div>b4</div>
							<div>b5</div>
							<div>b6</div>
						</div>
						<div className={styles.stats}>
							<p className={styles.stat}>g</p>
						</div>
					</div>
					<div className={styles.bottomBox}>

					</div>
				</div>
				<div className={styles.rightBox}>
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