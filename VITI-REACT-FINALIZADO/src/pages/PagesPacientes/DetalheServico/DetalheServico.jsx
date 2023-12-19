import './DetalheServico.css';
import React, { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import { GiExitDoor } from "react-icons/gi";
import { Link } from 'react-router-dom';
import Rating from '@mui/material/Rating';
import { FaCalendarAlt, FaHeart } from "react-icons/Fa";
import { HiMiniShoppingCart } from "react-icons/hi2";
import { useParams } from 'react-router-dom';
import axios from "axios";

import TextField from '@mui/material/TextField';



import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';


import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-cards';

import { EffectCards } from 'swiper/modules';



function DetalheServico() {
  const [value, setValue] = useState(0);
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));





  const { id } = useParams();
  const [detalhes, setDetalhes] = useState({ servico: {}, profissional: {} });

  useEffect(() => {
    const fetchDetalhesServico = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get(`http://localhost:8080/servicos/${id}/detalhes`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setDetalhes(response.data);
      } catch (error) {
        console.error('Erro ao buscar detalhes do serviço:', error);
      }
    };

    fetchDetalhesServico();
  }, [id]);









  return (

    <div className='backDetalhe'>
      <div className="containerDetalhe">


        <Link to='/areasprofissional' className='sairDetalhe'>
          <GiExitDoor className='iconDetalhe' />
        </Link>

        <Box sx={{ flexGrow: 10 }}>
          <Grid container spacing={10} margin={0}>
            <Grid xs={8} position={'relative'}>
              <Item className='blocoPefil'>
                {/*                   <h2>Informações Profissional</h2>
*/}              <div className='containerBlocoPerfil'>
                  <div className='containerPerfil1'>
                    <Avatar
                      alt="Foto perfil"
                      src={detalhes.profissional.fotoperfil}
                      sx={{ width: 150, height: 150 }}
                    />
                    <div className='textNomeEmail flex'>
                    <p style={{color:'#05676E'}}>Especialidade: <span style={{color:'#4D1D4D'}}>{detalhes.profissional.especialidade}</span></p>
                    <p style={{color:'#05676E'}}>Nome: <span style={{color:'#4D1D4D'}}>{detalhes.profissional.nome}</span></p>
                    <p style={{color:'#05676E'}}> Contato: <span style={{color:'#4D1D4D'}}>{detalhes.profissional.email}</span></p>

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
                    <h3>Biografia</h3>
                    <span>{detalhes.profissional.biografia}</span>
                  </div>
                  <div>
                    <Link to={'/calendariopaciente  '}> 
                  <button className='btnComprar'>Agenda <FaCalendarAlt  className='icon flex' />
                      </button></Link>
                  </div>
                </div>



              </Item>
            </Grid>
            <Grid xs={4}>
              <Item className='blocoTabela'>
                <h2>Tabela de preço</h2>

                <div>

                  <Swiper
                    effect={'cards'}
                    grabCursor={true}
                    modules={[EffectCards]}
                    className="mySwiper"
                  >
                    <SwiperSlide style={{ flexDirection: 'column', display: 'flex', gap: '20px' }}>
                      <div style={{ display: 'block', fontWeight: '400' }}>
                        Plano - Básico{ }
                      </div>
                      <div className='textCardSlider'>
                        <p><span><FaHeart /></span> Uma Consulta</p>
                        <p><span><FaHeart /></span> Acesso Chat</p>


                      </div>

                  

                      <Link to={'/comprar'}>
                      <button className='btnComprar'>Comprar <HiMiniShoppingCart className='icon flex' />
                      </button></Link>

                    </SwiperSlide>

                    <SwiperSlide style={{ flexDirection: 'column', display: 'flex', gap: '20px' }}>
                      <div style={{ display: 'block', fontWeight: '400' }}>
                        Plano - Médio{ }
                      </div>
                      <div className='textCardSlider'>
                        <p><span><FaHeart /></span> Duas Consultas{ }</p>
                        <p><span><FaHeart /></span> Acesso Chat</p>
                        <p><span><FaHeart /></span> Benefícios</p>

                      </div>

                 


                      <Link to={'/comprar'}>
                      <button className='btnComprar'>Comprar <HiMiniShoppingCart className='icon flex' />
                      </button></Link>


                    </SwiperSlide>

                    <SwiperSlide style={{ flexDirection: 'column', display: 'flex', gap: '10px' }}>
                      <div style={{ display: 'block', fontWeight: '400' }}>
                        Plano - Profissional{ }
                      </div>
                      <div className='textCardSlider'>
                        <p><span><FaHeart /></span> Quatro Consultas</p>
                        <p><span><FaHeart /></span> Acesso ao Chat</p>
                        <p><span><FaHeart /></span> Consultas Bônus!</p>

                      </div>


                      <Link to={'/comprar'}>
                      <button className='btnComprar'>Comprar <HiMiniShoppingCart className='icon flex' />
                      </button></Link>


                    </SwiperSlide>


                  </Swiper>


                </div>
              </Item>
            </Grid>
          </Grid>
            <Grid xs={8}>
              <Item className='blocoComentario'>
                <h2>Comentarios</h2>

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

export default DetalheServico;
