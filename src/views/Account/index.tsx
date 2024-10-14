import { useNavigate } from 'react-router-dom';
import { Tooltip } from 'react-tooltip'
import styles from "./account.module.scss";
import { useState } from 'react'

export default function Account() {
	const navigate = useNavigate();
	const goToHome = () => {
        navigate('/');
    };
	const [brightness, setBrightness] = useState(100)
	return (
		<>
			<div className={styles.container}>
				<h1>Settings</h1>
				<Tooltip className="tooltip" id="menu">Navigate to Menu</Tooltip>
				<div className="homeButton" onClick={goToHome} data-tooltip-id='menu'>
					<div /> <div /> <div />	
				</div>
				<div className={styles.settings}>
					{["Effects", "Sound", "Music", "Light", "Hints", "Weight", "Auto Save", "Check In", "Notifs"].map((setting, index) => (
						<div key={index}>
							<p>{setting}</p>
							<label className="switch">
								<input type="checkbox" defaultChecked={setting !== "Light" && setting !== "Weight" && setting !== "Check In"} />
								<span className="toggle"></span>
							</label>
						</div>
					))}
				</div>
				<div className={styles.settings}>
					{[{name:"Brightness", min:0, max:100}].map((setting, index) => (
						<div key={index}>
							<p>{setting.name}</p>
							<input type="range" min={setting.min} max={setting.max}  className="slider" value={brightness} onChange={e => setBrightness(e.target.value as any)} />
						</div>
					))}
				</div>
				<p>Creators: name, name, name</p>
			</div>
		</>
	)
}