import { Link} from "react-router-dom";
import './MenuProfissional.css'
import { useEffect, useState } from "react";

import 'bootstrap/dist/css/bootstrap.min.css';


import Image from '../../../LoginAssets/logo1.png'

import {AiOutlineSwapRight} from 'react-icons/Ai'
import { BsPersonCircle } from "react-icons/bs";
import MenuLink from "../MenuLinkProfissional/MenuLinkProfissional";
import { useNavigate } from "react-router-dom";
import { FaUserPen } from "react-icons/fa6";
import { PiPersonSimpleRunBold } from "react-icons/pi";




export default function MenuProfissional() {

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
    console.log("id removido!")
    // Navegar para a página de login ou outra rota necessária após o logout
    navigate('/loginprofissional');
    // Ou qualquer outra lógica necessária após o logout
  };



  return (
    <header className="headerProfissional"> 

   <div className="imgLogo">
   <img src={Image} className="logo1"/>
      </div>

      <nav className="navegacao">

        
        <MenuLink to="/homeprofissional">
          Home
         </MenuLink>   

         <MenuLink to="/forumprofissional">
           Fórum
         </MenuLink>  

          <MenuLink to="/cadastroservico">
           Cadastrar Serviço
         </MenuLink> 

        
         <MenuLink to="/quemsomosprofissional">
           Quem Somos?
         </MenuLink> 

         
          


      </nav>        

<div className="sair flex">
  <Link to={`/verperfilprofissional/${id}`} className='btnPersonProfissional flex'><span><FaUserPen className="icon" /> {email}</span></Link>


<button onClick={handleLogout} className="btnMenuProfissional">
          <span><PiPersonSimpleRunBold className="icon" />Sair
</span>

        </button>
    
   </div>

    </header>
  );
}
