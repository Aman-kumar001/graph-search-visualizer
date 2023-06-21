import { Button } from '@mui/material';
import styles from './visualizer.module.css';
import { useState } from 'react';
import { BFS } from '../Bfs/Bfs';
import { HighlightShortestPath } from '../helpers/HighlightShortestPath';
const Visualzer = () => {
	const [settings, setSettings] = useState({
		rows: 20,
		cols: 20,
		addBlockers: false,
		reset: false,
		start: false,
		target: false,
		startPos: [-1, -1],
		endPos: [-1, -1],
		addingBlockers: false,
		blockers: [],
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
						blocker={0}
						visited={1}
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
							} else if (settings.addingBlockers) {
								if (
									!settings.blockers.includes(`${i}` + '-' + `${j}`) &&
									!(settings.startPos[0] == i && settings.startPos[1] == j) &&
									!(settings.endPos[0] == i && settings.endPos[1] == j)
								) {
									document.getElementById(
										`${i}` + '-' + `${j}` + 'node'
									).style.backgroundColor = 'brown';
									setSettings({
										...settings,
										blockers: [...settings.blockers, `${i}` + '-' + `${j}`],
									});
								}
							}
						}}
					></div>
				);
			}
		}
		return (
			<div className={styles.gridWrapper} id='gridWrap'>
				{temp.map((item) => item)}
			</div>
		);
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
				<Button
					variant='outlined'
					onClick={() => {
						setSettings({ ...settings, addBlockers: false });
						if (settings.start && settings.target) {
						} else {
							alert('Please select start and target node');
						}
					}}
				>
					DFS
				</Button>
				<Button
					variant='outlined'
					onClick={() => {
						setSettings({ ...settings, addBlockers: false });
						if (settings.start && settings.target) {
							BFS(
								settings.startPos,
								settings.endPos,
								settings.rows,
								settings.cols,
								settings.blockers,
								function (path, dis, parent) {
									HighlightShortestPath(path, dis, parent);
								}
							);
						} else {
							alert('Please select start and target node');
						}
					}}
				>
					BFS
				</Button>
				<Button
					variant='outlined'
					onClick={() => {
						setSettings({ ...settings, addBlockers: false });
						if (settings.start && settings.target) {
						} else {
							alert('Please select start and target node');
						}
					}}
				>
					Dijkstra
				</Button>
				<Button
					disabled={!settings.start || !settings.target}
					variant={settings.addBlockers ? 'contained' : 'outlined'}
					onClick={() => {
						setSettings({
							...settings,
							addingBlockers: !settings.addingBlockers,
						});
					}}
				>
					{!settings.addBlockers ? `Add blockers` : `Done`}
				</Button>
			</div>

			<div className={styles.gridCont}>{grid()}</div>
		</div>
	);
};

export default Visualzer;
