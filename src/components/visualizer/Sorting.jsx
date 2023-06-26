import { useEffect, useState } from 'react';
import styles from './visualizer.module.css';
import { Button, Slider } from '@mui/material';
import { CreateArray } from '../helpers/CreateArray';
import { BubbleSort } from '../Algorithms/BubbleSort';
import { SelectionSort } from '../Algorithms/SelectionSort';
import { Render, RenderArray } from '../helpers/RenderArray';
import { InsertionSort } from '../Algorithms/InsertionSort';
import { MergeSort } from '../Algorithms/MergeSort';
import { QuickSort } from '../Algorithms/QuickSort';
import { HeapSort } from '../Algorithms/HeapSort';

const Sorting = () => {
	const [settings, setSettings] = useState({
		rows: 50,
		cols: 60,
		inputs: [],
		speed: 100,
	});
	useEffect(() => {
		if (window.innerWidth < 768) {
			setSettings({ ...settings, rows: 50, cols: 40 });
		}
	}, []);

	function resetGrid(row, col) {
		for (var i = 0; i < col; i++) {
			for (var j = 0; j < row; j++) {
				Render(row, settings.rows, i, 'none');
			}
		}
	}

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
			<div className={styles.btnContainerSort}>
				<Button
					variant='contained'
					className={styles.btn}
					onClick={() => {
						if (settings.inputs.length > 0)
							resetGrid(settings.rows, settings.cols);
						let temp = CreateArray(settings.rows, settings.cols);
						console.log(temp);
						setSettings({ ...settings, inputs: temp });
						RenderArray(temp, settings.rows, settings.cols);
					}}
				>
					Generate {settings.inputs.length > 0 ? 'New' : ''}
				</Button>
				<div>
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
					<Button
						variant='outlined'
						className={styles.btn}
						onClick={() => {
							InsertionSort(settings);
						}}
					>
						Insertion Sort
					</Button>
					{/* </div>
				<div> */}
					<Button
						variant='outlined'
						className={styles.btn}
						onClick={() => {
							MergeSort(settings);
						}}
					>
						Merge Sort
					</Button>
					<Button
						variant='outlined'
						className={styles.btn}
						onClick={() => {
							QuickSort(settings);
						}}
					>
						Quick Sort
					</Button>
					<Button
						variant='outlined'
						className={styles.btn}
						onClick={() => {
							HeapSort(settings);
						}}
					>
						Heap Sort
					</Button>
				</div>
			</div>
			<div></div>
			<div className={styles.gridCont}>{grid()}</div>
		</div>
	);
};

export default Sorting;
