import { Link, useLocation } from "react-router-dom";
import './Menu.css'

import 'bootstrap/dist/css/bootstrap.min.css';


import Image from '../../LoginAssets/logo1.png'

import {AiOutlineSwapRight} from 'react-icons/Ai'
import { BsPersonCircle } from "react-icons/bs";
import MenuLink from "../MenuLink/MenuLink";




export default function Menu() {


  return (
    <header className="headerMenu">

   <div className="imgLogo">
   <img src={Image} className="logo1"/>
      </div>

      <nav className="navegacao">

        
        <MenuLink to="/">
          Home
         </MenuLink>   

         <MenuLink to="/forum">
           Fórum
         </MenuLink>  

         <MenuLink to="/quemsomos">
           Quem Somos?
         </MenuLink> 

         
          


      </nav>        

<div>
        <MenuLink to="/logincliente">
              <button type="submit" className="btnMenu" >
                <span>Login</span>
              <AiOutlineSwapRight className="icon"/>
         </button>
         </MenuLink>  

      {/*   <MenuLink to="/">
              <button type="submit" className="btnPerson" >
                <span></span>
                <BsPersonCircle className="icon"/>
         </button>
         </MenuLink>  */} 
  
   </div>

    </header>
  );
}
