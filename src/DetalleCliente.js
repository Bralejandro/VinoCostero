import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './DetalleCliente.css';

const DetalleCliente = () => {
    const { id } = useParams(); // Obtenemos el ID del cliente desde la URL
    const [cliente, setCliente] = useState(null);

    useEffect(() => {
        const fetchCliente = async () => {
            try {
                const response = await fetch(`http://localhost:3001/clientes/${id}`); // Asegúrate de que este endpoint esté funcionando correctamente
                const data = await response.json();
                setCliente(data);
            } catch (error) {
                console.error('Error al obtener los detalles del cliente:', error);
            }
        };

        fetchCliente();
    }, [id]);

    if (!cliente) {
        return <div>Cargando detalles del cliente...</div>;
    }

    return (
        <div className="detalle-cliente-container">
            <h1>Datos del Cliente</h1>
            <div className="cliente-item">
                {/* Aquí se carga la imagen basada en el ID del cliente */}
                <img 
                    src={`/images/${cliente.cli_id}.jpg`}  // La imagen se llama con el ID del cliente (1.jpg, 2.jpg, etc.)
                    alt={cliente.cliNombres} 
                    className="cliente-image" 
                />
                <div className="cliente-detail">
                    <p><strong>Nombres:</strong> {cliente.cliNombres}</p>
                    <p><strong>Apellidos:</strong> {cliente.cliapellidos}</p>
                    <p><strong>Dirección:</strong> {cliente.clidireccion}</p>
                    <p><strong>Email:</strong> <a href={`mailto:${cliente.cliEmail}`}>{cliente.cliEmail}</a></p>
                    <p><strong>Teléfono:</strong> {cliente.clitelefono}</p>
                    <p><strong>Nit:</strong> {cliente.cliNit}</p>
                </div>
            </div>
        </div>
    );
};

export default DetalleCliente;
