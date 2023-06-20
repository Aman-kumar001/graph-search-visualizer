import './App.css';
import Header from './components/header/Header';
import Visualzer from './components/visualizer/Visualizer';

function App() {
	return (
		<div style={{ backgroundColor: '#FAF0E4', height: '100vh' }}>
			<Header />
			<div className='App'>
				<Visualzer />
			</div>
		</div>
	);
}

export default App;
