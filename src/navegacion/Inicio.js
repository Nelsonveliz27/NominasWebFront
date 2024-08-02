import React from 'react'
import './Inicio.css';
import { Link } from 'react-router-dom';

export default function Inicio() {
  return (
        <section className="inicio">
            <div className="Proveedores">
                <article className="_Proveedores">
                <h2>PROVEEDORES</h2>
                <div className="Opciones">
                    <ul>
                        <Link to='/NuevoProveedor'>CREAR</Link>
                        <Link to='/ConsultarProveedor'></Link>
                        <Link href="Proveedor-editar.html">MODIFICAR</Link>
                        <Link href="">ELIMINAR</Link>
                    </ul>
                </div>
                </article>
            </div>
            <div className="Proveedores">
                <article className="_Proveedores">
                <h2>NOMINAS</h2>
                <div className="Opciones">
                    <ul>
                    <Link href="/">CREAR</Link>
                    <Link href="/">CONSULTAR</Link>
                    <Link href="/">MODIFICAR</Link>
                    <Link href="">ELIMINAR</Link>
                    </ul>
                </div>
                </article>
            </div>
            {/*<div class="Nomina" >
                    <h2>NOMINA</h2>
                </div>
                <div class="Salir" >
                    <h2>SALIR</h2>*/}
        </section>

  )
}
