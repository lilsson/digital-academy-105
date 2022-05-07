import Greeting from './Geeting';
import Welcome from './Welcone';

import './App.css';

function App() {
  return (
    <div className="App">
      <Greeting title="Test Message" subTitle="subtitle" />
      <Welcome user="James Bond" />
   </div>
  );
}

export default App;
