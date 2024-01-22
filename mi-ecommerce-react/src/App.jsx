import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './Componentes/NavBar/NavBar';
import ItemListContainer from './Componentes/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './Componentes/ItemDetailContainer/ItemDetailContainer';

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/categoria/:idCategoria' element={<ItemListContainer />} />
          <Route path='/item/:idItem' element={<ItemDetailContainer />} />
        </Routes>
      </BrowserRouter>
      <div className="container mt-5">
        <header className="text-center">
          <h1>Mi Proyecto React con Bootstrap (por ahora) </h1>
        </header>
        <div className="row justify-content-center">
          <div className="col-md-6">
            <p>¡Bienvenidos a la tienda sin nombre!</p>
            <a
              className="btn btn-primary"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Boton educativo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
