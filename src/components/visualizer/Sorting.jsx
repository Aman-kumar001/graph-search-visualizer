import { useEffect, useState } from 'react';
import styles from './visualizer.module.css';
import { Button } from '@mui/material';
import { CreateArray } from '../helpers/CreateArray';
import { BubbleSort } from '../Algorithms/BubbleSort';
import { SelectionSort } from '../Algorithms/SelectionSort';
import { RenderArray } from '../helpers/RenderArray';

const Sorting = () => {
	const [settings, setSettings] = useState({
		rows: 50,
		cols: 60,
		inputs: [],
	});
	useEffect(() => {
		if (window.innerWidth < 768) {
			setSettings({ ...settings, rows: 50, cols: 40 });
		}
	}, []);
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
						className={styles.gridItemSorting}
					></div>
				);
			}
		}
		return (
			<div className={styles.gridWrapperSorting} id='gridWrap'>
				{temp.map((item) => item)}
			</div>
		);
	};
	return (
		<div className={styles.container}>
			<div className={styles.btnContainer}>
				<Button
					variant='contained'
					className={styles.btn}
					onClick={() => {
						let temp = CreateArray(settings.rows, settings.cols);
						console.log(temp);
						setSettings({ ...settings, inputs: temp });
						RenderArray(temp, settings.rows, settings.cols);
					}}
				>
					Generate
				</Button>
				<Button
					variant='outlined'
					className={styles.btn}
					onClick={() => {
						BubbleSort(settings, setSettings).then(() => {});
					}}
				>
					Bubble Sort
				</Button>
				<Button
					variant='outlined'
					className={styles.btn}
					onClick={() => {
						SelectionSort(settings, setSettings).then(() => {});
					}}
				>
					Selection Sort
				</Button>
				<Button variant='outlined' className={styles.btn}>
					Insertion Sort
				</Button>
				<Button variant='outlined' className={styles.btn}>
					Merge Sort
				</Button>
				<Button variant='outlined' className={styles.btn}>
					Quick Sort
				</Button>
				<Button variant='outlined' className={styles.btn}>
					Heap Sort
				</Button>
			</div>
			<div className={styles.gridCont}>{grid()}</div>
		</div>
	);
};

export default Sorting;
