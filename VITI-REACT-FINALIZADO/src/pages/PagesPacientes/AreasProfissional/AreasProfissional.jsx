import React from 'react';
import './AreasProfissional.css'; 

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import { AiOutlineSwapRight } from 'react-icons/Ai';
import { Link } from 'react-router-dom';



// Componente para a seção de áreas (Dermatologistas, Maquiadores, etc.)
const Area = ({ imageSrc, titleText, buttonText, especialidade }) => {

  const linkTo = `/servicosdoprofissional/${especialidade}`;

  return (
    <Card className='cardServico'>
    
      <Card.Body className='bodyCard'>  
        <Card.Img variant="top" src={imageSrc} style={{ borderRadius:5 , width:'100%', height:'45vh'}} /> 
        <Card.Title style={{color:'#fff', marginTop:30}}>{titleText}</Card.Title>
     
        {linkTo && (
          <Link to={linkTo}>
            <Button className='btnServico'>
              {buttonText}<AiOutlineSwapRight className="icon" />
            </Button>
          </Link>
           )}
      </Card.Body>
      </Card>
  );
};

// Componente principal
const AreasProfissional = () => {
  return (
    
<>
<div className='backAreas'>
        <div className="titulo-servicos">
          <h2 id="profissionais-qualidade">
            Aqui você encontra profissionais de qualidade</h2>
          <h2 id="area-desejada">Selecione a área desejada</h2>
        </div>

        <div className="areas">
          <div className="areas-cima">
         <div className="cardone">
            <Area  
              imageSrc="https://th.bing.com/th/id/OIG.wUd5vmYSIuaH_7phhNpS?pid=ImgGn"
              altText="Imagem de lookstudio no Freepik"
              titleText="DERMATOLOGIA"
              labelText="Descrição"
              buttonText='Saber mais'
              especialidade='DERMATOLOGIA '
              linkTo={'/servicosdoprofissional'}
              
            /> 
           </div>
           

            <Area
              imageSrc="https://th.bing.com/th/id/OIG.jmxnZdXifl.AcFgEfro6?pid=ImgGn"
              altText="Imagem de lookstudio no Freepik"
              titleText="MAQUIAGEM"
              labelText="Descrição"
              buttonText='Saber mais'
              especialidade='MAQUIAGEM'
              linkTo={'/servicosdoprofissional'}
            

            />
   
            <Area
              imageSrc="https://th.bing.com/th/id/OIG.hIMxhHenSAZpCnb5lDvL?pid=ImgGn"
              altText="Imagem de lookstudio no Freepik"
              titleText="COACH"
              labelText="Descrição"
              buttonText='Saber mais'
              especialidade='COACH'

              linkTo={'/servicosdoprofissional'}
            />
            {/* Repita o componente <Area> com as outras áreas */}
            <Area
              imageSrc="https://th.bing.com/th/id/OIG.HO24InRdATCOmcoYvqXU?pid=ImgGn  "
              altText="Imagem de lookstudio no Freepik"
              titleText="TATUAGEM"
              labelText="Descrição"
              buttonText='Saber mais'
              especialidade='TATUAGEM'

              linkTo={'/servicosdoprofissional'}
            />
            <Area
              imageSrc="https://th.bing.com/th/id/OIG.CBHm5uyFqO2NNoFtgniR?pid=ImgGn"
              altText="Imagem de lookstudio no Freepik"
              titleText="PSICOLOGO"
              labelText="Descrição"
              buttonText='Saber mais'
              especialidade='PSICOLOGO'

              linkTo={'/servicosdoprofissional'}
            />
            <Area
              imageSrc="https://th.bing.com/th/id/OIG.eJHNtAxPYZ7.Aq8bHpv3?pid=ImgGn"
              altText="Imagem de lookstudio no Freepik"
              titleText="CLINICA"
              labelText="Descrição"
              buttonText='Saber mais'
              especialidade='CLINICA'

              linkTo={'/servicosdoprofissional'}
            />
        
          </div>
        
         
        </div></div>
    </>
  );
};

export default AreasProfissional;
