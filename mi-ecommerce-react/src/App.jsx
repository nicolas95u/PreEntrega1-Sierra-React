import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Componentes/NavBar/NavBar';

function App() {
  return (
    <div>
      <NavBar />
      <div className="container mt-5">
        <header className="text-center">
          <h1>Mi Proyecto React con Bootstrap (por ahora) </h1>
        </header>

        <div className="row justify-content-center">
          <div className="col-md-6">
            <p>
              ¡Bienvenidos a la tienda sin nombre!
            </p>

            <a
              className="btn btn-primary"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Boton que no hace nada
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
