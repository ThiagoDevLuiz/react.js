import './App.css';
import { useEffect, useState } from 'react';
import ManageData from './components/ManageData';
import ListRender from './components/ListRender';
import ConditionalRender from './components/ConditionalRender';
import ShowUserName from './components/ShowUserName';
import CarDetails from './components/CarDetails';
import Fragment from './components/Fragment';
import axios from 'axios';


import City from './assets/city.jpg';

function App() {
  
  const getData = async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
    console.log(response.data)
  }
    
  useEffect(() => {
    getData()
  }, [])
  
  
  // const name = 'Pedro';
  const [userName] = useState('Renata');

  const cars = [
    { id: 1, brand: 'Ferrari', color: 'Amarelo', newCar: true, km: 0 },
    { id: 2, brand: 'KIA', color: 'Branco', newCar: false, km: 4545 },
    { id: 3, brand: 'Renault', color: 'Azul', newCar: false, km: 230 },
  ];

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

      <ManageData />
      <ListRender />
      <ConditionalRender />

      {/* props */}
      <ShowUserName name={userName} />

      {/* destructuring */}
      <CarDetails brand="BMW" km={200} color="Preto" newCar={false} />

      {/* reaproveitamento de componentes */}
      <CarDetails brand="Mercedes" color="Vermelho" km={0} newCar={true} />
      <CarDetails brand="Mustang" color="Branco" km={4500} newCar={false} />

      {/* loop em array de objetos */}
      {cars.map(car => (
        <CarDetails
          brand={car.brand}
          color={car.color}
          km={car.km}
          newCar={car.newCar}
        />
      ))}

      {/* fragment */}
      <Fragment propFragment="teste"/>

      {/* Treinando API e useEffect */}
      <button onClick={getData}>clica aqui</button>
    </div>
  );
}

export default App;
