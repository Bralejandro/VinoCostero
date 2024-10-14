import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Inicio from './Inicio';
import Produccion from './Produccion';
import RegistroProduccion from './RegistroProduccion';
import Clientes from './Clientes';
import DetalleCliente from './DetalleCliente';
import EditarCliente from './EditarCliente'; // Importa la vista de edición

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Inicio />} />
                <Route path="/produccion" element={<Produccion />} />
                <Route path="/registro-produccion" element={<RegistroProduccion />} />
                <Route path="/clientes" element={<Clientes />} />
                <Route path="/clientes/:id" element={<DetalleCliente />} />
                <Route path="/clientes/editar/:id" element={<EditarCliente />} /> {/* Nueva ruta para editar */}
            </Routes>
        </Router>
    );
};

export default App;
