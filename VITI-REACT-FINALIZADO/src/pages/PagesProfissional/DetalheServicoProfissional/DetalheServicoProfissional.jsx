import './DetalheServicoProfissional.css';
import React, { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import { GiExitDoor } from "react-icons/gi";
import { Link } from 'react-router-dom';
import Rating from '@mui/material/Rating';
import { FaCalendarAlt } from "react-icons/Fa";

import { FaHeart } from "react-icons/Fa";
import { HiMiniShoppingCart } from "react-icons/hi2";
import { useParams } from 'react-router-dom';
import axios from "axios";
import { MdConnectWithoutContact } from "react-icons/md";

import TextField from '@mui/material/TextField';



import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';


import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-cards';

import { EffectCards } from 'swiper/modules';



function DetalheServicoProfissional() {

  const { id } = useParams(); // Obtendo a ID do paciente dos parâmetros da URL
  const [profissional, setProfissional] = useState(null); // Estado para armazenar os detalhes do paciente



  const [value, setValue] = useState(0);
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));




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

    <div className='backDetalhe'>
      <div className="containerDetalhe">

        <Box sx={{ flexGrow: 10 }}>
          <Grid container spacing={10} margin={0}>
            <Grid xs={8} position={'relative'}>
              <Item className='blocoPefil'>
              {profissional ? ( // Verifica se paciente está carregado
                
           <div className='containerBlocoPerfil'>
                  <div className='containerPerfil1'>
                    <Avatar
                      alt="Foto perfil"
                      src={profissional.fotoperfil}
                      sx={{ width: 150, height: 150 }}
                    />
                    <div className='textNomeEmail flex'>
                   <p style={{color:'#05676E'}}>Especialidade: <span style={{color:'#4D1D4D'}}>{profissional.especialidade}</span></p>
                  <p style={{color:'#05676E'}}>Nome: <span style={{color:'#4D1D4D'}}>{profissional.nome}</span></p>
                      <p style={{color:'#05676E'}}> Contato: <span style={{color:'#4D1D4D'}}>{profissional.email}</span></p>
                    </div>



                    <Box style={{ paddingTop: '0px' }}
                      sx={{
                        '& > legend': { mt: 2 },
                      }}
                    >
                      <Rating
                        name="simple-controlled"
                        value={value}
                        onChange={(event, newValue) => {
                          setValue(newValue);
                        }}
                      />    </Box>
                  </div>

                  <div className='containerPerfilBio'>
                    <h3 style={{color:'#05676E'}}>Biografia</h3>
                    <span style={{color:'#4D1D4D'}}>{profissional.biografia}</span>
                  </div>
                  <div>
                    <Link to={'/calendarioprofissional'}> 
                  <button className='btnComprar' style={{background:'#a68ea6'}}>Agenda <FaCalendarAlt  className='icon flex' />
                      </button></Link>
                  </div>
                </div>


) : (
  <p>Carregando...</p> // Caso paciente ainda não tenha sido carregado
)}

              </Item>
            </Grid>
            <Grid xs={4}>
              <Item className='blocoTabela'>
                <h2>Meus Clientes</h2>

                <div>

                  <Swiper
                    effect={'cards'}
                    grabCursor={true}
                    modules={[EffectCards]}
                    className="mySwiper"
                  >
                    
                    <SwiperSlide style={{ flexDirection: 'column', display: 'flex', gap: '15px' }}>
                      <div style={{ display: 'block', fontWeight: '400' }}>
                        <Avatar
                      alt="Foto perfil"
                      src={''}
                      sx={{ width: 70, height: 70 }}
                    />
                      </div>
                      <div className='textCardSlider'>
                        <p><span>Nome</span></p>


                      </div>

                  

<Link to={'/chat'}>
                      <button className='btnComprar'>Contato <MdConnectWithoutContact className='icon flex' />
                      </button></Link>

                    </SwiperSlide>

                    <SwiperSlide style={{ flexDirection: 'column', display: 'flex', gap: '15px' }}>
                      <div style={{ display: 'block', fontWeight: '400' }}>
                        <Avatar
                      alt="Foto perfil"
                      src={''}
                      sx={{ width: 70, height: 70 }}
                    />
                      </div>
                      <div className='textCardSlider'>
                        <p><span>Nome</span></p>


                      </div>

                  


                      <Link to={'/chat'}>
                      <button className='btnComprar'>Contato <MdConnectWithoutContact className='icon flex' />
                      </button></Link>

                    </SwiperSlide>

                    <SwiperSlide style={{ flexDirection: 'column', display: 'flex', gap: '15px' }}>
                      <div style={{ display: 'block', fontWeight: '400' }}>
                        <Avatar
                      alt="Foto perfil"
                      src={''}
                      sx={{ width: 70, height: 70 }}
                    />
                      </div>
                      <div className='textCardSlider'>
                        <p><span>Nome</span></p>


                      </div>

                  

                      <Link to={'/chat'}>
                      <button className='btnComprar'>Contato <MdConnectWithoutContact className='icon flex' />
                      </button></Link>

                    </SwiperSlide>


                  </Swiper>


                </div>
              </Item>
            </Grid>
          </Grid>
          <Grid xs={8}>
            <Item className='blocoComentario'>
              <h2>Avaliações</h2>

              <Box
                component="form"
                sx={{
                  '& .MuiTextField-root': { m: 1, width: '95%' },
                }}
                noValidate
                autoComplete="off"


              >   <div>

                  <TextField
                    id="filled-multiline-static"
                    label="Envie Sua Mensagem..."
                    multiline
                    rows={4}
                    defaultValue=""
                    variant="filled"
                  />
                </div></Box>





            </Item>
          </Grid>

        </Box>

      </div>
    </div>









  );
}

export default DetalheServicoProfissional;
