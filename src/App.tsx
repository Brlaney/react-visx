import BarGraph from './components/BarGraph';
import Example from './components/Example';
import './scss/App.scss';


function App() {
  return (
    <div className='App'>
      <div className='container'>
        <Example width={1000} height={500} />
      </div>
    </div>
  );
}

export default App;
