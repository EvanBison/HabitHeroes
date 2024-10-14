import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import styles from "./home.module.scss";

export default function Home() {
	const navigate = useNavigate();
	const [splitHeader, setSplitHeader] = useState<string[]>([]);

	const goToAccount = () => {
        navigate('/account');
    };

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
						<p className={styles.name}>Player Name<p className={styles.gold}>Gold: 453</p></p>
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
							<p>Stamina: 54</p>
							<p>Discipline: 45</p>
							<p>Strength: 89</p>
							<p>Health: 73</p>
							<p>Agility: 23</p>
							<p>Dexterity: 67</p>
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
						<h1 onClick={goToAccount}>Account</h1>
					</div>
				</div>


			</div>
		</div>
	);
};