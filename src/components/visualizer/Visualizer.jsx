import { Button } from '@mui/material';
import styles from './visualizer.module.css';
import { useState } from 'react';
const Visualzer = () => {
	const [settings, setSettings] = useState({
		rows: 20,
		cols: 20,
	});

	const grid = () => {
		let temp = [];
		for (let i = 0; i < settings.rows; i++) {
			for (let j = 0; j < settings.cols; j++) {
				temp.push(
					<div row={i + 1} col={j + 1} className={styles.gridItem}></div>
				);
			}
		}
		return <div className={styles.gridWrapper}>{temp.map((item) => item)}</div>;
	};

	return (
		<div className={styles.container}>
			<div className={styles.btnContainer}>
				<Button variant='outlined' color='warning'>
					Reset
				</Button>
				<Button variant='outlined'>DFS</Button>
				<Button variant='outlined'>BFS</Button>
				<Button variant='outlined'>Dijkstra</Button>
			</div>

			<div className={styles.gridCont}>{grid()}</div>
		</div>
	);
};

export default Visualzer;
