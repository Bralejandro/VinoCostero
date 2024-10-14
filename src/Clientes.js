import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Clientes.css';

const Clientes = () => {
    const [clientes, setClientes] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchClientes = async () => {
            try {
                const response = await fetch('http://localhost:3001/clientes');
                const data = await response.json();
                setClientes(data);
            } catch (error) {
                console.error('Error al obtener los clientes:', error);
            }
        };

        fetchClientes();
    }, []);

    const handleView = (id) => {
        navigate(`/clientes/${id}`);
    };

    const handleEdit = (id) => {
        navigate(`/clientes/editar/${id}`); // Redirigir a la vista de edición
    };

    return (
        <div className="clientes-container">
            <h1>Clientes</h1>
            {clientes.map(cliente => (
                <div key={cliente.cli_id} className="cliente-item">
                    <div className="cliente-info">
                        <img 
                            src={`/images/${cliente.cli_id}.jpg`}  // Imagen basada en el ID del cliente
                            alt={cliente.cliNombres} 
                            className="cliente-image" 
                        />
                        <div className="cliente-detail">
                            <strong>{cliente.cliNombres} {cliente.cliapellidos}</strong>
                            <p>{cliente.clitelefono}</p>
                        </div>
                    </div>
                    <div className="cliente-actions">
                        <button className="btn btn-ver" onClick={() => handleView(cliente.cli_id)}>Ver</button>
                        <button className="btn btn-editar" onClick={() => handleEdit(cliente.cli_id)}>Editar</button>
                    </div>
                </div>
            ))}
            <button className="btn btn-agregar">Agregar nuevo cliente</button>
        </div>
    );
};

export default Clientes;
