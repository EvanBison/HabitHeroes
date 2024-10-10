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
						<div className={styles.lvlBar}>
							<p className={styles.level}>Level:3</p>
							<progress value="40" max="100"></progress>
						</div>
						<div className={styles.stats}>
							
						</div>
					</div>
					<div className={styles.bottomBox}>

					</div>
				</div>
				<div className={styles.rightBox}>
					<div className={`${styles.questBox} ${styles.button}`}>
						<h1>Train</h1>
					</div>
					<div className={`${styles.battleBox} ${styles.button}`}>
						<h1>Daily</h1>
					</div>
					<div className={`${styles.chatBox} ${styles.button}`}>
						<h1>Timed</h1>
					</div>
					<div className={`${styles.healthBox} ${styles.button}`}>
						<h1>Exercise</h1>
					</div>
					<div className={`${styles.timeTrialBox} ${styles.button}`}>
						<h1>Progress</h1>
					</div>
					<div className={`${styles.addExerciseBox} ${styles.button}`}>
						<h1>Settings</h1>
					</div>
				</div>


			</div>
		</div>
	);
};