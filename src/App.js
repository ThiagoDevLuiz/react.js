import './App.css';

import City from './assets/city.jpg'

function App() {
  return (
    <div className="App">
      <h1>Avançando em React</h1>
      {/* imagem em public */}
      <div>
        <img src="/img1.jpg" alt="Paisagem" />
      </div>
      {/* imagem em assets */}
      <div>
        <img src={City} alt="Cidade" />
      </div>
    </div>
  );
}

export default App;
