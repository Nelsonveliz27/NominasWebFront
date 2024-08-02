import React, { useEffect, useState } from 'react'
import './ConsultaProveedor.css'
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function ConsultarProveedor() {
  
    const urlBase = "http://localhost:8080/Proveedores-Kovacs/proveedores";
    
    const[proveedores, setProveedores] = useState([]);

    useEffect(() =>  {
        cargarProveedores();
    }, []);

    const cargarProveedores = async ( ) => {
        const resultado =await axios.get(urlBase);
        console.log("resultaod de cargar proveedores");
        console.log(resultado.data);
        setProveedores(resultado.data);
    }
    
    return (
    <div >       
        <section className="Subtitulo">
            <h2>CONSULTA PROVEEDOR</h2>
        </section>
        
        <table className="tblConsultaProveedor" >
        <thead>
            <tr>
            <th scope="col">Rut</th>
            <th scope="col">Nombre</th>
            <th scope="col">Nro de Cuenta</th>
            <th scope="col">Banco</th>
            <th scope="col">Mail</th>
            <th scope="col">Sucursal</th>
            </tr>
        </thead>
        <tbody>
            {
            //iteramos el arreglo de proveedores
            proveedores.map((proveedor, indice) =>( 
            <tr key={indice}>
                <th scope="row">{proveedor.idProv}</th>
                <td>{proveedor.nombreProv}</td>
                <td>{proveedor.numeroCtaProv}</td>
                <td>{proveedor.codigoCtaProv}</td>
                <td>{proveedor.emailProv}</td>
                <td>{proveedor.sucursalProv}</td>
                <td className='btn-modif-elim'>
                    <div>
                        <Link to={`/ModificarProveedor/${proveedor.idProv}`}
                        className='btn-modificar'>Modificar</Link>
                    </div>
                </td>
            </tr>
            ))
            }
        </tbody>
        </table>    
    </div>
  )
}