import React from 'react';
import NavBar from './Componentes/NavBar/NavBar';
import ItemListContainer from './Componentes/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './Componentes/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CarritoProvider } from './Componentes/context/CarritoContext';
//import Productos from './Componentes/Productos/Productos';
import Cart from './Componentes/Cart/Cart';
import Checkout from './Componentes/Chekout/Chekout';


const App = () => {
  return (
    <>
      <BrowserRouter>
        <CarritoProvider>
          <NavBar />
          <Routes>
            <Route path='/' element={ <ItemListContainer /> } />
            <Route path='/categoria/:idCategoria' element={ <ItemListContainer /> } />
            <Route path='/item/:idItem' element={ <ItemDetailContainer /> } />
            <Route path='/cart' element = {<Cart/>} />
            <Route path='/checkout' element = {<Checkout/>} />
          </Routes>
        </CarritoProvider>
      </BrowserRouter>
    </>
  )
}

export default App