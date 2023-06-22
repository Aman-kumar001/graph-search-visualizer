import styles from './header.module.css';
const Header = ({ setView, view }) => {
	return (
		<div className={styles.container}>
			<div className={styles.header}>
				<p onClick={() => setView('Graph')}>
					{' '}
					{view == 'Sort' ? '< ' : ''} Visualize Graph Algos
				</p>
				<p onClick={() => setView('Sort')}>
					Visualize Sorting Algos{view == 'Sort' ? '' : ' >'}
				</p>
			</div>
		</div>
	);
};

export default Header;
