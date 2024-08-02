import axios from 'axios';
import React, { useState } from 'react';
import './NuevoProveedor.css';
import { useNavigate } from 'react-router-dom';

export default function NuevoProveedor() {
  let navegacion = useNavigate();
  
  const [proveedor, setProveedor] = useState({
    rutProv: "",
    nombreProv: "",
    numeroCtaProv: "", // Cambiado para coincidir con el backend
    codigoCtaProv: "", // Cambiado para coincidir con el backend
    emailProv: "",
    sucursalProv: ""
  });

  const { rutProv, nombreProv, numeroCtaProv, codigoCtaProv, emailProv, sucursalProv } = proveedor;

  const onInputChange = (e) => {
    setProveedor({ ...proveedor, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const urlBase = "http://localhost:8080/Proveedores-Kovacs/proveedores";
      await axios.post(urlBase, proveedor);
      navegacion('/');
    } catch (error) {
      console.error("Error al guardar el proveedor", error);
    }
  };

  return (
    <>
      <section className="Subtitulo">
        <h2>NUEVO PROVEEDOR</h2>
      </section>

      <form onSubmit={onSubmit}>
        <div className="Container-Proveedor">
          <div className="Datos-Proveedor">
            <label htmlFor="rutProv" className="form-label">RUT</label>
            <input type="text" name="rutProv" id="rutProv" required value={rutProv} onChange={onInputChange} />

            <label htmlFor="nombreProv" className="form-label">Nombre</label>
            <input type="text" name="nombreProv" id="nombreProv" required value={nombreProv} onChange={onInputChange} />

            <label htmlFor="numeroCtaProv" className="form-label">Numero de Cuenta</label>
            <input type="number" name="numeroCtaProv" id="numeroCtaProv" required value={numeroCtaProv} onChange={onInputChange} />

            <label htmlFor="codigoCtaProv" className="form-label">Codigo de Cuenta</label>
            <input type="number" name="codigoCtaProv" id="codigoCtaProv" required value={codigoCtaProv} onChange={onInputChange} />

            <label htmlFor="emailProv" className="form-label">E-mail</label>
            <input type="email" name="emailProv" id="emailProv" required value={emailProv} onChange={onInputChange} />

            <label htmlFor="sucursalProv" className="form-label">Sucursal</label>
            <input type="text" name="sucursalProv" id="sucursalProv" required value={sucursalProv} onChange={onInputChange} />

            <div className="buttons">
              <a href="Inicio.html" className='buttones' id="buttona">Limpiar</a>
              <button type="submit" className='buttones' id="button">Guardar</button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}
