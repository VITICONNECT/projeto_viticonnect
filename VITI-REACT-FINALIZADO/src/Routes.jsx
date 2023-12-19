import './App.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PerfilProfissional from './pages/PagesProfissional/PerfilProfissional/PerfilProfissional';
import PerfilPaciente from './pages/PagesPacientes/PerfilPaciente/PerfilPaciente';
import Home from './pages/PagesTodos/Home/Home';
import QuemSomos from './pages/PagesTodos/QuemSomos/QuemSomos';
import MenuPaciente from './components/ComponentsPaciente/MenuPaciente/MenuPaciente';
import ServicosCliente from './pages/PagesPacientes/ServicosCliente/ServicosCliente';
import Forum from './pages/PagesTodos/Forum/Forum';
import Login from './components/ComponentsPaciente/Login/Login';
import Register from './components/ComponentsPaciente/Register/Register';
import LoginProfissional from './components/ComponenstProfissional/LoginProfissional/LoginProfissional';
import RegisterProfissional from './components/ComponenstProfissional/RegisterProfissional/RegisterProfissional';
import MenuProfissional from './components/ComponenstProfissional/MenuProfissional/MenuProfissional';
import ClienteProfissional from './pages/PagesProfissional/ClienteProfissional/ClienteProfissional';
import CadastrarServico from './pages/PagesProfissional/CadastrarServico/CadastrarServico';
import Menu from './components/Menu/Menu';
import RodaPe from './components/RodaPe/RodaPe';
import AreasProfissional from './pages/PagesPacientes/AreasProfissional/AreasProfissional';
import DetalheServico from './pages/PagesPacientes/DetalheServico/DetalheServico';
import VerPerfilPaciente from './pages/PagesPacientes/VerPerfilPaciente/VerPerfilPaciente';
import VerPerfilProfissional from './pages/PagesProfissional/VerPerfilProfissional/VerPerfilProfissional';
import DetalheServicoProfissional from './pages/PagesProfissional/DetalheServicoProfissional/DetalheServicoProfissional';
import MeusPedidos from './pages/PagesPacientes/MeusPedidos/MeusPedidos';
import MinhasCompras from './pages/PagesPacientes/MinhasCompras/MinhasCompras';
import Calendario from './pages/PagesPacientes/Calendario/Calendario';
import Chat from './pages/PagesPacientes/Chat/Chat';






console.log(window.location)
function AppRoutes() {
  return (
    <BrowserRouter>

      <Routes>

        {/* paginas para todos*/}
        <Route path="/" element={<div><Menu /><Home /><RodaPe /></div>} />
        <Route path="/forum" element={<div><Menu /><Forum /><RodaPe/></div>} />
        <Route path="/quemsomos" element={<div><Menu /><QuemSomos /></div>} />

        {/* paginas cliente/paciente*/}
        <Route path="/logincliente" element={<Login />} />  
        <Route path="/registercliente" element={<Register />} />
        <Route path="/homepaciente" element={<div><MenuPaciente /><Home /><RodaPe /></div>} />
        <Route path="/verperfil/:id" element={<div><MenuPaciente /><VerPerfilPaciente /></div>} />
        <Route path="/servicosdoprofissional/:especialidade" element={<div><MenuPaciente /><ServicosCliente /></div>} />
        <Route path="/comprar" element={<div><MenuPaciente /><MinhasCompras /></div>} />
        <Route path="/calendarioprofissional" element={<div><MenuProfissional /><Calendario /></div>} />
        <Route path="/calendariopaciente" element={<div><MenuPaciente /><Calendario /></div>} />
        <Route path="/meuspedidos" element={<div><MenuPaciente /><MeusPedidos /></div>} />


        <Route
          path="//detalheservico/:id"
          element={
            <div>
              <MenuPaciente />
              <DetalheServico />
            </div>
          }
        />

        <Route path="/forumcliente" element={<div><MenuPaciente /><Forum /><RodaPe/></div>} />
        <Route path="/quemsomoscliente" element={<div><MenuPaciente /><QuemSomos /></div>} />
        <Route path="/areasprofissional" element={<div><MenuPaciente /><AreasProfissional /><RodaPe/></div>} />



        <Route path="/perfilpaciente" element={<div><MenuPaciente /><PerfilPaciente /></div>} />



        {/* paginas profissional*/}
        <Route path="/loginprofissional" element={<LoginProfissional />} />
        <Route path="/registerprofissional" element={<RegisterProfissional />} />
        <Route path="/homeprofissional" element={<div><MenuProfissional /><Home /><RodaPe /></div>} />
        <Route path="/clienteprofissional" element={<div><MenuProfissional /><ClienteProfissional /></div>} />
        <Route path="/cadastroservico" element={<div><MenuProfissional /><CadastrarServico /></div>} />
        <Route path="/perfilprofissional" element={<div><MenuProfissional /><PerfilProfissional /></div>} />
        <Route path="/forumprofissional" element={<div><MenuProfissional /><Forum /></div>} />
        <Route path="/quemsomosprofissional" element={<div><MenuProfissional /><QuemSomos /></div>} />
        <Route path="/verperfilprofissional/:id" element={<div><MenuProfissional/><VerPerfilProfissional /></div>} />
        <Route path="/detalheservicoprofissional/:id" element={<div><MenuProfissional /><DetalheServicoProfissional /></div>} />
        <Route path="/chat" element={<div><MenuProfissional /><Chat /></div>} />





        <Route path="*" element={<div>Página não econtada</div>} />
      </Routes>
    </BrowserRouter>
  )



} export default AppRoutes