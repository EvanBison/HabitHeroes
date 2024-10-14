import { useNavigate } from 'react-router-dom';
import { Tooltip } from 'react-tooltip'
import styles from "./account.module.scss";

export default function Account() {
	const navigate = useNavigate();
	const goToHome = () => {
        navigate('/');
    };
	return (
		<>
			<h1>Settings</h1>
			<Tooltip className="tooltip" id="menu">Navigate to Menu</Tooltip>
			<div className="homeButton" onClick={goToHome} data-tooltip-id='menu'>
				<div /> <div /> <div />	
			</div>
			<div className={styles.settingsDiv}>
				{["Effects", "Sound", "Music", "Light", "Hints", "Weight", "Auto Save", "Check In", "Notifs"].map((setting, index) => (
					<div key={index}>
						<p>{setting}</p>
						<label className="switch">
							<input type="checkbox" defaultChecked={setting !== "Light" && setting !== "Weight" && setting !== "Check In"} />
							<span className="slider"></span>
						</label>
					</div>
				))}
			</div>
			<div className={styles.rightBottomBox}>
				<p>Creators: name, name, name</p>
			</div>
		</>
	)
}