import {BrowserRouter, Routes, Route} from "react-router-dom";
import MenuNavegacion from "./navegacion/MenuNavegacion";
import NuevoProveedor from "./proveedores/NuevoProveedor/NuevoProveedor";
import Inicio from "./navegacion/Inicio";
import ConsultarProveedor from "./proveedores/NuevoProveedor/ConsultarProveedor";
import ModificarProveedor from "./proveedores/NuevoProveedor/ModificarProveedor";


function App() {
    return(
        <div className="conatiner">
            
            <BrowserRouter>
            <MenuNavegacion/>
            
            <Routes>
                <Route exact path='/' element={<Inicio/>}/>
                <Route exact path='/NuevoProveedor' element={<NuevoProveedor/>}/>
                <Route exact path='/ConsultarProveedor' element={<ConsultarProveedor/>}/>
                <Route exact path='/ModificarProveedor/:id' element={<ModificarProveedor/>}/>
            </Routes>
            </BrowserRouter>
            
        </div>
        
    );   
}

export default App;