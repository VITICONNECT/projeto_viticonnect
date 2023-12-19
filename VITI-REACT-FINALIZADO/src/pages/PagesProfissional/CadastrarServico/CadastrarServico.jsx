import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import { Formik } from 'formik';
import * as yup from 'yup';
import React, {useState} from 'react';
import axios from 'axios';
import { AiOutlineSwapRight } from "react-icons/Ai";
import { useNavigate } from 'react-router-dom'; // Importe o useNavigate para navegação



import './cadastrarServico.css';

function CadastrarServico() {

  const [showAlert, setShowAlert] = useState(false);
  const navigate = useNavigate(); // useNavigate para navegação


  const initialValues = {
    titulo: '',
    descricao: '',
    imagem: '',
  };

  const schema = yup.object().shape({
    titulo: yup.string().required(),
    descricao: yup.string().required(),
    imagem: yup.string().required(),
  });

  const handleSubmit = async (values,{ resetForm }) => {
    try {

      const response = await axios.post('http://localhost:8080/servicos', values);
      console.log('Resposta do servidor:', response); 
      console.log('Serviço cadastrado com sucesso!', response.data);
      setShowAlert(true);

      resetForm(); 
      setTimeout(() => {
        setShowAlert(false);
        const userId = localStorage.getItem('userId');
        navigate(`/detalheservicoprofissional/${userId}`); // Navega para a página de detalhes do serviço
      }, 2000);
    } catch (error) {
      console.error('Ocorreu um erro ao cadastrar o serviço:', error);
      console.log('Resposta de erro do servidor:', error.response);
    }
  };
  
  

  return (
    <Formik initialValues={initialValues} validationSchema={schema} onSubmit={handleSubmit}>
      {({ handleChange, values, errors, handleSubmit }) => (
        <div className='backServicoCadastrar'>
        <div id='containerServico'>
          <div className='servicoFormulario'>
            <Form noValidate onSubmit={handleSubmit} className='w-20'>
              <h1 style={{color:'#fff'}}>CADASTRAR SERVIÇO</h1>
              {showAlert && (
                <div className='alert alert-success mt-3 text-center' role='alert'>
                  Serviço cadastrado com sucesso!
                </div>
              )}
              <Row className='mt-4'>
                <Form.Group as={Col} md='12' controlId='validationFormik01'>
                  <Form.Label>Titulo</Form.Label>
                  <Form.Control
                    type='text'
                    name='titulo'
                    placeholder='digite o titulo...'
                    value={values.titulo}
                    onChange={handleChange}
                    isInvalid={!!errors.titulo}
                  />
                </Form.Group>
                </Row>

                <Row>

                <Form.Group as={Col} md='12' controlId='validationFormik02'>
                  <Form.Label>Descrição</Form.Label>
                  <Form.Control
                    type='text'
                    name='descricao'
                    placeholder='digite a descrição...'
                    value={values.descricao}
                    onChange={handleChange}
                    isInvalid={!!errors.descricao}
                  />
                </Form.Group>

                </Row>

                <Row>

                <Form.Group as={Col} md='12' controlId='validationFormik03'>
                  <Form.Label>Imagem</Form.Label>
                  <Form.Control
                    type='text'
                    placeholder='Ex: http://...'
                    name='imagem'
                    value={values.imagem}
                    onChange={handleChange}
                    isInvalid={!!errors.imagem}
                  />
                </Form.Group>

              </Row>
              <Button className='btnCadastrar' type='submit'>
                Cadastrar Serviço  <AiOutlineSwapRight className='icon'/>
              </Button>
            </Form>
          </div>
        </div></div>
      )}
    </Formik>
  );
}

export default CadastrarServico;
