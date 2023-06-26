import styles from './header.module.css';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
const Header = ({ setView, view }) => {
	return (
		<div className={styles.container}>
			<div className={styles.header}>
				<p onClick={() => setView('Graph')}>
					{' '}
					{view == 'Sort' ? <ArrowBackIosIcon /> : ''} Visualize Graph Algos
				</p>
				<p onClick={() => setView('Sort')}>
					Visualize Sorting Algos{view == 'Sort' ? '' : <ArrowForwardIosIcon />}
				</p>
			</div>
		</div>
	);
};

export default Header;
