import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Produccion.css';

const Produccion = () => {
    const navigate = useNavigate();

    const handleCreateNewLot = () => {
        // Redirige a la página de registro de producción
        navigate('/registro-produccion'); // Asegúrate de que esta ruta esté configurada
    };

    return (
        <div className="produccion-container">
        <h1>Producción</h1>
        <h2>Vinos</h2>
        <div className="vino-list">
            <div className="vino-item">
                <img src="pinotnoir.jpg" alt="2021 Pinot Noir" className="vino-image"/>
                <div className="vino-info">
                    <h3>2022 Pinot Noir</h3>
                    <p>203 Barriles</p>
                </div>
            </div>
            <div className="vino-item">
                <img src="Chardonnay.jpg" alt="2021 Chardonnay" className="vino-image"/>
                <div className="vino-info">
                    <h3>2021 Chardonnay</h3>
                    <p>185 Barriles</p>
                </div>
            </div>
            <div className="vino-item">
                <img src="Cabernet.jpg" alt="2021 Cabernet" className="vino-image"/>
                <div className="vino-info">
                    <h3>2021 Cabernet</h3>
                    <p>220 Barriles</p>
                </div>
            </div>
            <div className="vino-item">
                <img src="Sauvignon_blanc.jpg" alt="2021 Sauvignon Blanc" className="vino-image"/>
                <div className="vino-info">
                    <h3>2023 Sauvignon Blanc</h3>
                    <p>301 Barriles</p>
                </div>
            </div>
        </div>
        <button className="create-button" onClick={handleCreateNewLot}>
            Ingresar nueva Producción
        </button>
    </div>
);
};

export default Produccion;
