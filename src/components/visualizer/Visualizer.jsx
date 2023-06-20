import { Button } from '@mui/material';
import styles from './visualizer.module.css';
import { useState } from 'react';
const Visualzer = () => {
	const [settings, setSettings] = useState({
		rows: 10,
		cols: 10,
	});
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
		</div>
	);
};

export default Visualzer;
