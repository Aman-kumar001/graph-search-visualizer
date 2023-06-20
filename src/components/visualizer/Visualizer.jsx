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
		startPos: [0, 0],
		endPos: [21, 21],
	});

	const grid = () => {
		let temp = [];
		for (let i = 0; i < settings.rows; i++) {
			for (let j = 0; j < settings.cols; j++) {
				temp.push(
					<div
						key={`${i}` + '-' + `${j}`}
						row={i + 1}
						col={j + 1}
						className={{
							...styles.gridItem,
							...(settings.startPos[0] === i + 1 &&
							settings.startPos[1] === j + 1
								? styles.startNode
								: '' + ' ' + settings.endPos[0] === i + 1 &&
								  settings.endPos[1] === j + 1
								? styles.endNode
								: ''),
						}}
						onClick={(e) => {
							if (!settings.startPos) {
								setSettings({ ...settings, startPos: [i + 1, j + 1] });
							} else if (!settings.endPos) {
								setSettings({ ...settings, endPos: [i + 1, j + 1] });
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
