import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './EditarCliente.css';

const EditarCliente = () => {
    const { id } = useParams(); // Obtener el ID del cliente desde la URL
    const navigate = useNavigate();
    const [cliente, setCliente] = useState({
        cliNombres: '',
        cliapellidos: '',
        clidireccion: '',
        cliEmail: '',
        clitelefono: '',
        cliNit: ''
    });

    // Obtener los detalles del cliente para editar
    useEffect(() => {
        const fetchCliente = async () => {
            try {
                const response = await fetch(`http://localhost:3001/clientes/${id}`);
                const data = await response.json();
                setCliente(data);
            } catch (error) {
                console.error('Error al obtener los detalles del cliente:', error);
            }
        };

        fetchCliente();
    }, [id]);

    // Manejar cambios en los campos
    const handleChange = (e) => {
        setCliente({
            ...cliente,
            [e.target.name]: e.target.value
        });
    };

    // Manejar la actualización del cliente
    const handleUpdate = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`http://localhost:3001/clientes/${id}`, {
                method: 'PUT',  // Usamos el método PUT para actualizar los datos
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(cliente)  // Enviamos los datos del cliente en formato JSON
            });

            if (response.ok) {
                alert('Cliente actualizado correctamente');
                navigate('/clientes'); // Redirige a la lista de clientes después de guardar
            } else {
                alert('Error al actualizar el cliente');
            }
        } catch (error) {
            console.error('Error al actualizar el cliente:', error);
        }
    };

    return (
        <div className="editar-cliente-container">
            <h1>Modificar Cliente</h1>
            <form onSubmit={handleUpdate}>
                <div className="cliente-item">
                    <img 
                        src={`/images/${cliente.cli_id}.jpg`}  // La imagen se llama con el ID del cliente (1.jpg, 2.jpg, etc.)
                        alt={cliente.cliNombres} 
                        className="cliente-image" 
                    />
                    <div className="cliente-detail">
                        <p><strong>Nombres:</strong> <input type="text" name="cliNombres" value={cliente.cliNombres} onChange={handleChange} /></p>
                        <p><strong>Apellidos:</strong> <input type="text" name="cliapellidos" value={cliente.cliapellidos} onChange={handleChange} /></p>
                        <p><strong>Dirección:</strong> <input type="text" name="clidireccion" value={cliente.clidireccion} onChange={handleChange} /></p>
                        <p><strong>Email:</strong> <input type="email" name="cliEmail" value={cliente.cliEmail} onChange={handleChange} /></p>
                        <p><strong>Teléfono:</strong> <input type="text" name="clitelefono" value={cliente.clitelefono} onChange={handleChange} /></p>
                        <p><strong>Nit:</strong> <input type="text" name="cliNit" value={cliente.cliNit} onChange={handleChange} /></p>
                    </div>
                </div>
                <button type="submit" className="btn-guardar">Guardar Cambios</button>
            </form>
        </div>
    );
};

export default EditarCliente;
