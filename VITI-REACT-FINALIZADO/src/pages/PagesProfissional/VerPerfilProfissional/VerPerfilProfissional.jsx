import './VerPerfilProfissional.css';
import React, { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import { GiExitDoor } from "react-icons/gi";
import { Link } from 'react-router-dom';
import Rating from '@mui/material/Rating';
import { FaHeart } from "react-icons/Fa";
import { HiMiniShoppingCart } from "react-icons/hi2";
import axios from "axios";
import { MdModeEditOutline } from "react-icons/md";
import { AiOutlineSwapRight } from "react-icons/Ai";
import { useParams } from 'react-router-dom';

import TextField from '@mui/material/TextField';



import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';


import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-cards';

import { EffectCards } from 'swiper/modules';



function VerPerfilProfissional() {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  const { id } = useParams(); // Obtendo a ID do paciente dos parâmetros da URL
  const [profissional, setProfissional] = useState(null); // Estado para armazenar os detalhes do paciente

  useEffect(() => {
    const storedToken = localStorage.getItem('token'); // Pegar o token do localStorage

    // Verificar se o token existe antes de fazer a requisição
    if (storedToken) {
      axios.get(`http://localhost:8080/profissionais/${id}`, {
        headers: {
          Authorization: `Bearer ${storedToken}`, // Incluir o token no cabeçalho
        },
      })
        .then(response => {
          setProfissional(response.data); // Define os detalhes do paciente no estado
        })
        .catch(error => {
          console.error('Erro ao buscar detalhes do profissional:', error);
        });
    }
  }, [id]);


  
  return (

    <div className='backPerfilProfissional'>
      <div className="containerProfissional">


      

        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={5} margin={0}>
            <Grid xs={7} position={'relative'}>
              <Item className='blocoPefilProfissional'>
                 {profissional ? ( // Verifica se paciente está carregado
              <div className='containerBlocoPerfilProfissional'>
                  <div className='containerPerfilProfissional'>
                    <Avatar
                      alt="Foto perfil"
                      src={profissional.fotoperfil}
                      sx={{ width: 150, height: 150 }}
                    />
                    <div className='textNomeEmailProfissional flex'>
                    <p style={{color:'#05676E'}}>Especialidade: <span style={{color:'#4D1D4D'}}>{profissional.especialidade}</span></p>
                      <p style={{color:'#05676E'}}>Nome: <span style={{color:'#4D1D4D'}}>{profissional.nome}</span></p>
                      <p style={{color:'#05676E'}}> Contato: <span style={{color:'#4D1D4D'}}>{profissional.email}</span></p>
                      </div>


                      

                  </div>

                  <div className='containerPerfilBioProfissional'>
                    <h3 style={{color:'#05676E'}}>Biografia</h3>
                    <span style={{color:'#4D1D4D'}}>{profissional.biografia}</span>
                  </div>
                </div>

) : (
  <p>Carregando...</p> // Caso paciente ainda não tenha sido carregado
)}

              </Item>
            </Grid>
            <Grid xs={5}>
              <Item className='blocoTabelaProfissional'>
                <h2>VITICONNECT</h2>

                <div>

                  <Swiper
                    effect={'cards'}
                    grabCursor={true}
                    modules={[EffectCards]}
                    className="mySwiperProfissional"
                  >
                    <SwiperSlide style={{ flexDirection: 'column', display: 'flex', gap: '10px' }}>
                      <div style={{ display: 'block', fontWeight: '400' }}>
                        Meu Perfil
                      </div>
                      <div className='textCardSliderProfissional'>
                        <p><span></span> </p>


                      </div>



<Link to='/perfilprofissional'>
                      <button className='btnComprarProfissional '>Editar Perfil       <AiOutlineSwapRight
                        className='icon ' />
                      </button></Link>
<Link to={`/detalheservicoprofissional/${id}`}>
                      <button className='btnComprarProfissional '>Visão geral       <AiOutlineSwapRight
                        className='icon ' />
                      </button></Link>

                    </SwiperSlide>




                  </Swiper>


                </div>
              </Item>
            </Grid>
          </Grid>


        </Box>

      </div>
    </div>









  );
}

export default VerPerfilProfissional;
