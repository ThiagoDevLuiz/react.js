import './App.css';
import ManageData from './components/ManageData';
import ListRender from './components/ListRender';

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
      <ManageData/>
      <ListRender/>
    </div>
  );
}

export default App;
