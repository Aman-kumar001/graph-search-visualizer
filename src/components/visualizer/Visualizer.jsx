import { Button } from '@mui/material';
import styles from './visualizer.module.css';
import { useState } from 'react';
const Visualzer = () => {
	const [settings, setSettings] = useState({
		rows: 20,
		cols: 20,
		addBlockers: false,
		reset: false,
		start: false,
		target: false,
		startPos: [1, 1],
		endPos: [20, 20],
	});

	const grid = () => {
		let temp = [];
		for (let i = 1; i <= settings.rows; i++) {
			for (let j = 1; j <= settings.cols; j++) {
				temp.push(
					<div
						key={`${i}` + '-' + `${j}`}
						row={i}
						col={j}
						id={`${i}` + '-' + `${j}` + 'node'}
						blocker={false}
						className={
							styles.gridItem +
							' ' +
							(settings.startPos[0] == i && settings.startPos[1] == j
								? styles.startNode
								: '') +
							' ' +
							(settings.endPos[0] == i && settings.endPos[1] == j
								? styles.endNode
								: '')
						}
						onClick={(e) => {
							if (!settings.start) {
								setSettings({
									...settings,
									startPos: [i, j],
									start: true,
								});
							} else if (!settings.target) {
								setSettings({
									...settings,
									endPos: [i, j],
									target: true,
								});
							}
						}}
					></div>
				);
			}
		}
		return <div className={styles.gridWrapper}>{temp.map((item) => item)}</div>;
	};

	return (
		<div className={styles.container}>
			<div className={styles.btnContainer}>
				<Button
					variant='outlined'
					color='warning'
					onClick={() => {
						setSettings({ ...settings, addBlockers: false });
					}}
				>
					Reset
				</Button>
				<Button variant='outlined'>DFS</Button>
				<Button
					variant='outlined'
					onClick={() => {
						setSettings({ ...settings, addBlockers: false });
					}}
				>
					BFS
				</Button>
				<Button
					variant='outlined'
					onClick={() => {
						setSettings({ ...settings, addBlockers: false });
					}}
				>
					Dijkstra
				</Button>
				<Button
					variant={settings.addBlockers ? 'contained' : 'outlined'}
					onClick={() => {
						setSettings({ ...settings, addBlockers: !settings.addBlockers });
					}}
				>
					Add blockers
				</Button>
			</div>

			<div className={styles.gridCont}>{grid()}</div>
		</div>
	);
};

export default Visualzer;
