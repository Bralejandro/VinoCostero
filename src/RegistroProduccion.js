import './RegistroProduccion.css';
import React, { useState } from 'react';

const RegistroProduccion = () => {
    const [idProduccion, setIdProduccion] = useState('');
    const [tipovino, setTipovino] = useState('');
    const [cantidad, setCantidad] = useState('');
    const [fechaProduccion, setFechaProduccion] = useState(''); // Nuevo campo para la fecha de producción

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch('http://localhost:3001/registrar', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    idProduccion,
                    tipovino,
                    cantidad,
                    fechaProduccion // Enviamos la fecha junto con los demás datos
                })
            });
            const data = await response.json();
            if (data.success) {
                alert('Registro completado con éxito');
            } else {
                throw new Error(data.message);
            }
        } catch (error) {
            alert('Error al registrar: ' + error.message);
        }
    };

    return (
        <div className="form-container">
            <h1 className="form-title">Registrar Nueva Producción</h1>
            <form onSubmit={handleSubmit}>
                <input
                    className="form-input"
                    type="text"
                    value={idProduccion}
                    onChange={(e) => setIdProduccion(e.target.value)}
                    placeholder="Id_Produccion"
                    required
                />
                <input
                    className="form-input"
                    type="text"
                    value={tipovino}
                    onChange={(e) => setTipovino(e.target.value)}
                    placeholder="Tipo de vino"
                    required
                />
                <input
                    className="form-input"
                    type="number"
                    value={cantidad}
                    onChange={(e) => setCantidad(e.target.value)}
                    placeholder="Cantidad Producida"
                    required
                />
                <input
                    className="form-input"
                    type="date"
                    value={fechaProduccion}
                    onChange={(e) => setFechaProduccion(e.target.value)}
                    placeholder="Fecha Producción"
                    required
                />
                <button className="form-button" type="submit">GUARDAR</button>
            </form>
        </div>
    );
};

export default RegistroProduccion;
