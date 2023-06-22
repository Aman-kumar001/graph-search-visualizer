import { useState } from 'react';
import './App.css';
import Header from './components/header/Header';
import Note from './components/helpers/Note';
import Visualzer from './components/visualizer/Visualizer';
import Sorting from './components/visualizer/Sorting';

function App() {
	const [view, setView] = useState('Graph');
	return (
		<div style={{ backgroundColor: '#FAF0E4', height: '100vh' }}>
			<Header setView={setView} view={view} />
			<div className='App'>
				{view === 'Graph' && <Note />}
				{view === 'Graph' && <Visualzer />}
				{view === 'Sort' && <Sorting />}
			</div>
		</div>
	);
}

export default App;
