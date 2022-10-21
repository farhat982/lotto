import React from 'react';
import Lotto from './components/Lotto';
import './Style.css';
import ParticlesBg from 'particles-bg';

function App() {
  return (
    <div className="App">

        <ParticlesBg type="polygon" bg={true} />
        <Lotto />

    </div>
  );
}

export default App;
