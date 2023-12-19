import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import './servicosCliente.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { GiExitDoor } from "react-icons/gi";
import { AiOutlineSwapRight } from 'react-icons/Ai';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';

function ServicosCliente() {
  const navigate = useNavigate();
  const { especialidade } = useParams();
  const [servicos, setServicos] = useState([]);
  

  const formatarData = (data) => {
    const dataFormatada = new Date(data).toLocaleString('pt-BR', {
      day: 'numeric',
      month: 'numeric',
      year: 'numeric',
      hour: 'numeric', 
      minute: 'numeric',
    });
    return dataFormatada;
  };

  useEffect(() => {
    const fetchServicosPorEspecialidade = async (token, especialidade) => {
      try {
        const response = await fetch(`http://localhost:8080/servicos/especialidade/${especialidade}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (response.ok) {
          const data = await response.json();
          console.log('Dados da API por especialidade:', data);
          if (Array.isArray(data.content)) {
            setServicos(data.content);
          } else {
            throw new Error('Resposta da API por especialidade não contém um array válido');
          }
        } else {
          throw new Error('Erro ao obter serviços por especialidade');
        }
      } catch (error) {
        console.error(error);
      }
    };

    const authToken = localStorage.getItem('token');
    if (authToken && especialidade) {
      fetchServicosPorEspecialidade(authToken, especialidade);
    } else {
      fetchServicos(authToken);
    }
  }, [especialidade]);

  const fetchServicos = async (token) => {
    try {
      const response = await fetch('http://localhost:8080/servicos', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.ok) {
        const data = await response.json();
        console.log('Dados da API:', data);
        if (Array.isArray(data.content)) {
          setServicos(data.content);
        } else {
          throw new Error('Resposta da API não contém um array válido');
        }
      } else {
        throw new Error('Erro ao obter serviços');
      }
    } catch (error) {
      console.error(error);
    }
  };

  
  return (
    <div className='backServicos'>
      <div className='containerServico'>
        
        <div>
        <Link to='/areasprofissional' className='flex'>
          <GiExitDoor className='iconServicos' />
        </Link>
        <h1>ÁREA - <span className='especialidade'>{especialidade}</span></h1></div>
        <div className='cardContainer'>
          
          {servicos.map((servico) => (
            <div key={servico.id} className='cardItem'>
              <Card className='cardServico'>
                <Card.Img variant="top" style={{ borderRadius:5 , width:'100%', height:'45vh', padding:'10px'}} src={servico.imagem} />
                <Card.Body className='cardBody'>
                  <div className='texts'>
                  <Card.Title style={{color:'#a68ea6'}}>{servico.titulo}</Card.Title>
                  <Card.Text>{servico.descricao}</Card.Text>
             
                  <Link to={`/detalheservico/${servico.id}`}>
                  <Button className='btnServico'>
                    Contratar <AiOutlineSwapRight className="icon" />
                  </Button>

                  </Link></div>
                  <br />
                  <span style={{color:'#fff'}}>Criado por {servico.nomeProfissional}</span>
                  <br />
                          <span style={{color:'#a68ea6'}}>Publicado - {formatarData(servico.data)}</span>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ServicosCliente;
