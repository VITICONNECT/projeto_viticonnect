import './MenuPaciente.css'

import 'bootstrap/dist/css/bootstrap.min.css';

import { useEffect, useState } from "react";

import Image from '../../../LoginAssets/logo1.png'

import { FaPen } from "react-icons/fa6";
import { FaUserPen } from "react-icons/fa6";

import MenuLink from "../MenuLinkPaciente/MenuLinkPaciente";
import { Link, useNavigate } from "react-router-dom";
import { GoPersonFill } from "react-icons/go";

import { PiPersonSimpleRunBold } from "react-icons/pi";




export default function MenuPaciente() {  
  
  const [email, setEmail] = useState("");
  const [id, setId] = useState(""); // Se o ID do paciente estiver disponível aqui

  useEffect(() => {
    const storedEmail = localStorage.getItem("email");
    const storedId = localStorage.getItem("userId"); // Obtendo o ID do localStorage

    if (storedEmail) {
      setEmail(storedEmail);
    }
    if (storedId) {
      setId(storedId); // Define o ID no estado
    }
  }, []);
  
  const navigate = useNavigate();

  const handleLogout = () => {
    // Limpar o token do localStorage
    localStorage.removeItem('token');
    localStorage.removeItem('id');

    console.log("token removido = logout")
    // Navegar para a página de login ou outra rota necessária após o logout
    navigate('/logincliente');
    // Ou qualquer outra lógica necessária após o logout
  };



  return (
    <header className='headerPaciente'>

   <div className="imgLogo">
   <img src={Image} className="logo1"/>
      </div>

      <nav className="navegacao">

        
        <MenuLink to="/homepaciente">
          Home
         </MenuLink>   

         <MenuLink to="/forumcliente">
           Fórum
         </MenuLink>  

          <MenuLink to="/areasprofissional">
           Serviços
         </MenuLink> 

        
         <MenuLink to="/quemsomoscliente">
           Quem Somos?
         </MenuLink> 

         
          


      </nav>        

<div className="sair flex">
  <Link to={`/verperfil/${id}`} className='btnPersonPaciente'><span><FaUserPen className="icon" /> {email}</span></Link>


<button onClick={handleLogout} className="btnMenuPaciente">
          <span>Sair<PiPersonSimpleRunBold className="icon" />
</span>

        </button>
    
   </div>

    </header>
  );
}
