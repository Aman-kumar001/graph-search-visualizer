import './App.css';
import Header from './components/header/Header';
import Note from './components/helpers/Note';
import Visualzer from './components/visualizer/Visualizer';

function App() {
	return (
		<div style={{ backgroundColor: '#FAF0E4', height: '100vh' }}>
			<Header />
			<div className='App'>
				<Note />
				<Visualzer />
			</div>
		</div>
	);
}

export default App;
