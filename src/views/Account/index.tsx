import { useNavigate } from 'react-router-dom';
import { Tooltip } from 'react-tooltip'
import styles from "./account.module.scss";
import { useState, useEffect } from 'react'

export default function Account() {
	const navigate = useNavigate();
	const goToHome = () => {
        navigate('/');
    };
	
	const [brightness, setBrightness] = useState<number>(() => {
		const savedBrightness = localStorage.getItem('pageBrightness');

		return savedBrightness ? Number(savedBrightness) : 100; // default 100
	});
	const [colorAdjustment, setColorAdjustment] = useState<number>(() => { 
		const savedColorAdjustment = localStorage.getItem("pageColorAdjustment");

		return savedColorAdjustment ? Number(savedColorAdjustment) : 0; // default 0
	});
	
	//change 
	useEffect(() => {
		document.documentElement.style.setProperty('--brightness', `${brightness}`);
		localStorage.setItem('pageBrightness', String(brightness));
	}, [brightness]);

	useEffect(() => {
		document.documentElement.style.setProperty('--colorAdjustment', `hsl(${colorAdjustment}deg, 50%, 50%)`);
		localStorage.setItem('pageColorAdjustment', String(colorAdjustment));
	}, [colorAdjustment]);

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
					<div>
						<p>Brightness</p>
						<input type="range"
							min={10}
							max={100} 
							className="slider" 
							value={brightness} 
							onChange={e => setBrightness(Number(e.target.value))} />
					</div>
					<div>
						<p>Color Adjustment</p>
						<input type="range"
							min={0}
							max={360} 
							className="slider" 
							value={colorAdjustment} 
							onChange={e => setColorAdjustment(Number(e.target.value))} />
					</div>
				</div>
				<p>Creators: name, name, name</p>
			</div>
		</>
	)
}