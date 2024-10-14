// Inicio.js (barra lateral)
import './Inicio.css';
import { Link } from 'react-router-dom';

const Inicio = () => {
    return (
        <div className="inicio-container">
            <div className="sidebar">
                <h2>Módulos</h2>
                <ul>
                    <li><Link to="/produccion">Producción</Link></li>
                    <li><Link to="/clientes">Clientes</Link></li>
                    <li><Link to="/modulo3">Proveedores</Link></li>
                    <li><Link to="/modulo4">Embarques</Link></li>
                    <li><Link to="/modulo5">Registro de Catas</Link></li>
                </ul>
            </div>
            <div className="content">
                <h1>Bienvenido</h1>
                <p>Selecciona en el panel izquierdo los módulos de la plataforma Vino Costero.</p>
            </div>
        </div>
    );
};

export default Inicio;
