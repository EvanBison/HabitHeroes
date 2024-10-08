import styles from "./account.module.scss";

export default function Account() {
	return (
		<>
			<div className={styles.rightTopBox}>
				<h1>Settings</h1>
				<div className={styles.settings}>
					{["Effects", "Sound", "Music", "Light", "Hints", "Weight", "Auto Save", "Check In", "Notifs"].map((setting, index) => (
						<div key={index}>
							<p>{setting}</p>
							<label className={styles.switch}>
								<input type="checkbox" defaultChecked={setting !== "Light" && setting !== "Weight" && setting !== "Check In"} />
								<span className={styles.slider}></span>
							</label>
						</div>
					))}
				</div>
			</div>
			<div className={styles.rightBottomBox}>
				<p>Creators: name, name, name</p>
			</div>
		</>
	)
}