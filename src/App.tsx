import BarGraph from './components/BarGraph/BarGraph';
import './scss/App.scss';
import { data } from './lib/data';


function App() {
  return (
    <div className='App'>
      <div className='container'>
        <BarGraph data={data} />
      </div>
    </div>
  );
}

export default App;
