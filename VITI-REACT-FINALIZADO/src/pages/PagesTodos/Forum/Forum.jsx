import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';

import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import { AiOutlineSwapRight } from "react-icons/Ai";
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import './Forum.css';

function Forum() {
  const [value, setValue] = useState(0);
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));


  const [validated, setValidated] = useState(false);
  const [messages, setMessages] = useState([]);
  const [showAlert, setShowAlert] = useState(false);

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


  const fetchForumMessages = async () => {
    try {
      const authToken = localStorage.getItem('token');
      const response = await fetch('http://localhost:8080/postagens', {
        headers: {
          'Authorization': `Bearer ${authToken}`,
        },
      });

      if (response.ok) {
        const data = await response.json();
        const messagesWithUserDetails = await Promise.all(
          data.content.map(async (message) => {
            const userDetailsResponse = await fetch(`http://localhost:8080/postagens/${message.id}`, {
              headers: {
                'Authorization': `Bearer ${authToken}`,
              },
            });

            if (userDetailsResponse.ok) {
              const userDetails = await userDetailsResponse.json();
              // Adicione os detalhes do usuário à mensagem
              return {
                ...message, nomeUsuario: userDetails.nomeUsuario, fotoPerfilUsuario: userDetails.fotoPerfilUsuario, especialidade: userDetails.especialidade // Adicione a especialidade aqui
              };
            }
            return message;
          })
        );

        setMessages(messagesWithUserDetails);
      } else {
        throw new Error('Erro ao buscar mensagens do fórum');
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchForumMessages();
  }, []);

  useEffect(() => {
    fetchForumMessages();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;

    if (form.checkValidity() === false) {
      event.stopPropagation();
      setValidated(true);
      return;
    }

    const data = {
      titulo: form.elements['validationCustom01'].value,
      mensagem: form.elements['exampleForm.ControlTextarea1'].value,
    };

    const authToken = localStorage.getItem('token');

    try {
      const response = await fetch('http://localhost:8080/postagens', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${authToken}`,
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        fetchForumMessages();
        form.reset();
        setValidated(false);
        setShowAlert(true);
        setTimeout(() => setShowAlert(false), 3000);

      } else {
        throw new Error('Erro ao postar mensagem no fórum');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className='backForum '>
      <div className='containerForm'>
        <div className='forum'>
          {showAlert && (
            <div className='alert alert-success' role='alert'>
              Publicação enviada com sucesso!
            </div>
          )}
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <h1 style={{ color: '#fff' }}>FORUM VITICONNECT</h1>

            <Row className="mt-5">
              <Form.Group as={Col} md="15" controlId="validationCustom01">
                <Form.Label>Titulo</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="digite o titulo..."
                />
                <Form.Control.Feedback>Otimo titulo!</Form.Control.Feedback>
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Mensagem</Form.Label>
                <Form.Control as="textarea" rows={3} placeholder="digite sua mensagem..." style={{ resize: 'none' }} />
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group className="mb-2 d-flex">
                <Form.Check
                  className='mx-2 p-1'
                  required
                  label="Li e estou de acordo com os termos de uso!"
                  feedbackType="invalid"
                />
                <Form.Check
                  className='mx-4 p-1'
                  label="Anônimo"
                />
              </Form.Group>
            </Row>
            <Button className='btnForum' type="submit">Postar <AiOutlineSwapRight className='icon' />
            </Button>
          </Form>



        </div>

      </div>

      <div className="messageList">



        <h1>Publicações</h1>
        {messages.map((message) => (
          <Card className='cardMensagem' key={message.id}>

            <Card.Body>

              <Stack direction="row" spacing={1} style={{ alignItems: 'center', fontSize: '1.5rem' }}>

                <Avatar alt="Remy Sharp" src={message.fotoPerfilUsuario} />
                <p style={{ color: '#fff', alignItems: 'center' }}>{message.nomeUsuario} <span style={{ fontSize: '1rem', color: '#4D1D4D' }}> {message.especialidade}</span> <span style={{ color: '#000', fontSize: '1rem', }}>  </span></p>
              </Stack>
              <br />
              <Card.Title style={{ color: '#4D1D4D' }}>{message.titulo}</Card.Title>
              <Card.Text style={{ color: '#fff' }}>{message.mensagem}</Card.Text>
              <span style={{ color: '#4D1D4D' }}>Data Publicação: {formatarData(message.dataPostagem)}</span>

            </Card.Body>
            <Box>
               <Grid xs={8}>
              <Item className='blocoComentario'>
                <h2>Faça Seu Comentario</h2>

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
                      label="Envie Seu Comentario.."
                      multiline
                      rows={1}
                      defaultValue=""
                      variant="filled"
                    />
                  </div></Box>





              </Item>
            </Grid>
            </Box>


          </Card>



        ))}

      </div>

    </div>
  );
}

export default Forum;
