import React from 'react';
import './servicosAvaliacao.css'; 

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import iconeM from './img/icone-maquiagem.png';
import maquiagemImg from './img/maquiagem.png';
import Derma from './img/dermatologista.jpg';

import Dropdown from 'react-bootstrap/Dropdown';

import { CiStar } from "react-icons/ci";


import { AiOutlineSwapRight } from 'react-icons/Ai';
import { Link } from 'react-router-dom';



// Componente para a seção de áreas (Dermatologistas, Maquiadores, etc.)
const Area = ({ imageSrc, titleText, labelText,buttonText,linkTo }) => {
  return (
    <Card className='cardServico' style={{ width: '25rem', borderRadius:10,  borderWidth:5, borderColor:'#05676E'}}>
    
      <Card.Body style={{background: '#05676E'}}>  
        <Card.Img variant="top" src={imageSrc} style={{ borderRadius:30}} /> 
        <Card.Title style={{color:'white', marginTop:20}}>{titleText}</Card.Title>
     
        {linkTo && (
          <Link to={linkTo}>
            <Button className='btnServicoAvaliacao'>
              {buttonText}<AiOutlineSwapRight className="icon" />
            </Button>
          </Link>
           )}
           <CiStar style={{width:30,height:30, color:'#fff', cursor:'pointer'}}/>
           <CiStar style={{width:30,height:30, color:'#fff', cursor:'pointer'}}/>
           <CiStar style={{width:30,height:30, color:'#fff', cursor:'pointer'}}/>
           <CiStar style={{width:30,height:30, color:'#fff', cursor:'pointer'}}/>
           <CiStar style={{width:30,height:30, color:'#fff', cursor:'pointer'}}/>
      </Card.Body>
      </Card>
  );
};

// Componente principal
const ServicosAvaliacoes = () => {
  return (
    
<>
        <div className="titulo-servicosAvaliacao">
          <h1 id="profissionais-qualidadeAvaliacao">
            Dermartologista</h1>


        </div>

        
        <Dropdown style={{ marginBottom:20, float: 'right'}}>
       <Dropdown.Toggle variant="success" id="dropdown-basic">
        Sua Região
        </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">São Paulo</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Rio de Janeiro</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Minas Gerais</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>

        <div className="areasAvaliacao">
          <div className="areas-cimaAvaliacao">
         <div className="cardoneAvaliacao">
            <Area  
              imageSrc={Derma}
              altText="Imagem de lookstudio no Freepik"
              titleText="Profissioanal"
              iconSrc={iconeM}
              labelText="Descrição"
              buttonText='Contratar'
              linkTo={'/'}
              
              
            /> 
           </div>
           

            <Area
              imageSrc={maquiagemImg}
              altText="Imagem de lookstudio no Freepik"
              titleText="Profissioanal"
              iconSrc={iconeM}
              labelText="Descrição"
              buttonText='Contratar'
              linkTo={'/'}
            

            />
    
           
          </div>
         


         
        </div>
    </>
  );
};

export default ServicosAvaliacoes;
