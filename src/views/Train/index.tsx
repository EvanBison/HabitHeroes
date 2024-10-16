import { useNavigate } from 'react-router-dom';
import { Tooltip } from 'react-tooltip'
import styles from "./train.module.scss";
import { useState, useEffect } from 'react'

export default function Account() {
	const navigate = useNavigate();
	const goToHome = () => {
        navigate('/');
    };
	
	

	return (
		<>

			<div className={styles.container}>
				<h1 className={styles.header}>Training Ground</h1>
				<Tooltip className="tooltip" id="menu" place='right'>Navigate to Menu</Tooltip>
				<div className="homeButton" onClick={goToHome} data-tooltip-id='menu'>
					<div /> <div /> <div />	
				</div>

				<div className={styles.contents}>
					<div>
						<h1>Objectives</h1>
						<table>
							<tr>
								<th>Exercise</th>
								<th>Reps</th>
								<th>Fail</th>
								<th>Complete</th>
							</tr>
							<tr>
								<th>Pushups</th>
								<th>x15</th>
								<th>
									<button>X</button>
								</th>
								<th>
									<button>✔</button>
								</th>
							</tr>
							<tr>
								<th>Situps</th>
								<th>x20</th>
								<th>
									<button>X</button>
								</th>
								<th>
									<button>✔</button>
								</th>
							</tr>
							<tr>
								<th>Pullups</th>
								<th>x8</th>
								<th>
									<button>X</button>
								</th>
								<th>
									<button>✔</button>
								</th>
							</tr>
						</table>
					</div>
					<div>
						<h1>Progress</h1>
					</div>
				</div>
				
			</div>
		</>
	)
}