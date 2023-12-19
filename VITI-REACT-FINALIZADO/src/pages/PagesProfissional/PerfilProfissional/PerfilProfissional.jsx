  import './PerfilProfissional.css';
  import Button from 'react-bootstrap/Button';
  import Col from 'react-bootstrap/Col';
  import Form from 'react-bootstrap/Form';
  import InputGroup from 'react-bootstrap/InputGroup';
  import Row from 'react-bootstrap/Row';
  import { useState, useEffect } from 'react'; 

  import { Formik,Field, ErrorMessage } from 'formik';
  import * as yup from 'yup';
  import { AiOutlineSwapLeft, AiOutlineSwapRight } from "react-icons/Ai";

  import axios from 'axios';
  import jwt_decode from 'jwt-decode'; 
import { Link, useNavigate } from 'react-router-dom';

  function PerfilProfissional() {
    const [token, setToken] = useState('');
    const [id, setId] = useState(""); // Se o ID do paciente estiver disponível aqui
    const [showAlert, setShowAlert] = useState(false);
    const navigate = useNavigate(); // useNavigate para navegação

    useEffect(() => {
      const storedToken = localStorage.getItem('token');
      const storedId = localStorage.getItem("userId"); // Obtendo o ID do localStorage

      if (storedToken) {
        setToken(storedToken);
      }
      if (storedId) {
        setId(storedId); // Define o ID no estado
      }
    }, []);

    const initialValues = {
      fotoperfil: '',
      cpf: '',
      telefone: '',
      biografia: '',
      endereco: {
        bairro: '',
        cep: '',
        numero: '',
        logradouro: '',
        cidade: '',
        uf: ''
      }
    };

    const schema = yup.object().shape({
      fotoperfil: yup.string().notRequired(),
      cpf: yup.string().notRequired(),
      telefone: yup.string().notRequired(),
      biografia: yup.string().notRequired(),
      endereco: yup.object().shape({
        bairro: yup.string().required(),
        cep: yup.string().notRequired(),
        numero: yup.string().notRequired(),
        logradouro: yup.string().notRequired(),
        cidade: yup.string().notRequired(),
        uf: yup.string().notRequired()
      })
    });
    
    const validationSchema = yup.object().shape({
      fotoperfil: yup.string().notRequired(),
      cpf: yup.string().notRequired(),
      telefone: yup.string().notRequired(),
      biografia: yup.string().notRequired(),
      endereco: yup.object().notRequired({
        bairro: yup.string().notRequired(),
        cep: yup.string().notRequired(),
        numero: yup.string().notRequired(),
        logradouro: yup.string().notRequired(),
        cidade: yup.string().notRequired(),
        uf: yup.string().notRequired()
      })
    });

    const handleFormSubmit = async (values, { resetForm }) => {
      try {
        const decoded = jwt_decode(token);
        const userId = decoded.id;
    
        // Filtra apenas os campos preenchidos
        const filteredValues = Object.keys(values).reduce((acc, key) => {
          if (values[key] !== '' && values[key] !== null && values[key] !== undefined) {
            if (typeof values[key] === 'object' && !Array.isArray(values[key])) {
              // Se o valor for um objeto, verifique os subcampos
              const subFields = Object.keys(values[key]).reduce((subAcc, subKey) => {
                if (values[key][subKey] !== '' && values[key][subKey] !== null && values[key][subKey] !== undefined) {
                  return { ...subAcc, [subKey]: values[key][subKey] };
                }
                return subAcc;
              }, {});
              if (Object.keys(subFields).length > 0) {
                return { ...acc, [key]: subFields };
              }
            } else {
              return { ...acc, [key]: values[key] };
            }
          }
          return acc;
        }, {});
    
        const response = await axios.put(`http://localhost:8080/profissionais/${userId}`, {
          id: userId,
          ...filteredValues,
        }, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
    
        console.log('Resposta do servidor:', response);
        console.log('Dados atualizados com sucesso!', response.data);
    
        setShowAlert(true); // Mostra a mensagem de sucesso
    
        setTimeout(() => {
          setShowAlert(false); // Esconde a mensagem após 2 segundos
          resetForm(); // Reseta o formulário após esconder a mensagem
          const userId = localStorage.getItem('userId');
    
          navigate(`/verperfilprofissional/${id}`)
    
        }, 2000);
      } catch (error) {
        console.error('Ocorreu um erro ao tentar atualizar perfil:', error);
        console.log('Resposta de erro do servidor:', error.response);
      }
    };
    return (
      <Formik initialValues={initialValues} onSubmit={handleFormSubmit}>
        {({ handleChange, values, errors, handleSubmit }) => (
          <div className='backPerfilProfissional'>
            <div id='containerPerfilProfssional'>
              <div className='servicoPerfilProfssional'>
                <Form noValidate onSubmit={handleSubmit} className='w-20'>
                  <Row className='mt-4'>            
                   
                      {showAlert && (
                <div className='alert alert-success mt-3 text-center' role='alert'>
                  Dados Atualizados!
                </div>
              )}
                      <h1 id='h1ServicoPerfilProfssional'>ATUALIZAR CADASTRO</h1>

                    <Form.Group as={Col} md='7' controlId='validationFormik01'>
                      <Form.Label>CPF</Form.Label>
                      <Form.Control
                        type='text'
                        name='cpf'
                        placeholder='Digite o CPF...'
                        value={values.cpf}
                        onChange={handleChange}
                        className={`form-control ${errors.cpf ? 'is-invalid' : ''}`}
                        />
                        <ErrorMessage name="cpf" component="div" className="invalid-feedback" />
                    </Form.Group>
    
                    <Form.Group as={Col} md='5' controlId='validationFormik02'>
                      <Form.Label>Telefone</Form.Label>
                      <Form.Control
                        type='text'
                        name='telefone'
                        placeholder='Digite o telefone...'
                        value={values.telefone}
                        onChange={handleChange}
                        className={`form-control ${errors.telefone ? 'is-invalid' : ''}`}
                        />
                        <ErrorMessage name="telefone" component="div" className="invalid-feedback" />
                    </Form.Group>
                  </Row>
    
                  <Row className='mt-4'>
              


                    <Form.Group as={Col} md='12' controlId='validationFormik03'>
                      <Form.Label>Biografia</Form.Label>
                      <Form.Control
                      style={{ resize: 'none' }}
                        as='textarea'
                        placeholder='Digite a biografia...'
                        name='biografia'
                        value={values.biografia}
                        onChange={handleChange}
                        className={`form-control ${errors.biografia ? 'is-invalid' : ''}`}
                        />
                        <ErrorMessage name="biografia" component="div" className="invalid-feedback" />
                    </Form.Group>

            



                  </Row>
    
                  <Row className='mt-4'>




                

                    <Form.Group as={Col} md='5' controlId='validationFormik04'>
                      <Form.Label>Foto Perfil</Form.Label>
                      <Form.Control
                        type='text'
                        placeholder='Ex: http://...'
                        name='fotoperfil'
                        value={values.fotoperfil}
                        onChange={handleChange}
                        className={`form-control ${errors.fotoperfil ? 'is-invalid' : ''}`}
                        />
                        <ErrorMessage name="fotoperfil" component="div" className="invalid-feedback" />
                    </Form.Group>
    
                    <Form.Group as={Col} md='5' controlId='validationFormik05'>
                      <Form.Label>Bairro</Form.Label>
                      <Form.Control
                        type='text'
                        placeholder='Digite o bairro...'
                        name='endereco.bairro'
                        value={values.endereco.bairro}
                        onChange={handleChange}
                        className={`form-control ${errors.bairro ? 'is-invalid' : ''}`}
                        />
                        <ErrorMessage name="bairro" component="div" className="invalid-feedback" />
                    </Form.Group>

                    <Form.Group as={Col} md='2' controlId='validationFormik05'>
                      <Form.Label>UF</Form.Label>
                      <Form.Control
                        type='text'
                        placeholder='Digite o uf...'
                        name='endereco.uf'
                        value={values.endereco.uf}
                        onChange={handleChange}
                        className={`form-control ${errors.uf ? 'is-invalid' : ''}`}
                        />
                        <ErrorMessage name="uf" component="div" className="invalid-feedback" />
                    </Form.Group>

                  
                  

                    
                  </Row>
                  
                  <Row className='mt-4'>
                


                    <Form.Group as={Col} md='3' controlId='validationFormik06'>
                      <Form.Label>Cep</Form.Label>
                      <Form.Control
                        type='text'
                        placeholder='Digite o cep...'
                        name='endereco.cep'
                        value={values.endereco.cep}
                        onChange={handleChange}
                        className={`form-control ${errors.cep ? 'is-invalid' : ''}`}
                        />
                        <ErrorMessage name="cep" component="div" className="invalid-feedback" />
                    </Form.Group>

                    <Form.Group as={Col} md='3' controlId='validationFormik07'>
                      <Form.Label>Numero</Form.Label>
                      <Form.Control
                        type='text'
                        placeholder='Digite o numero...'
                        name='endereco.numero'
                        value={values.endereco.numero}
                        onChange={handleChange}
                        className={`form-control ${errors.numero ? 'is-invalid' : ''}`}
                        />
                        <ErrorMessage name="numero" component="div" className="invalid-feedback" />
                    </Form.Group>

                    <Form.Group as={Col} md='3' controlId='validationFormik08'>
                      <Form.Label>Logradouro</Form.Label>
                      <Form.Control
                        type='text'
                        placeholder='Digite o Logradouro...'
                        name='endereco.logradouro'
                        value={values.endereco.logradouro}
                        onChange={handleChange}
                        className={`form-control ${errors.logradouro ? 'is-invalid' : ''}`}
                        />
                        <ErrorMessage name="logradouro" component="div" className="invalid-feedback" />
                    </Form.Group>

                    <Form.Group as={Col} md='3' controlId='validationFormik09'>
                      <Form.Label>Cidade</Form.Label>
                      <Form.Control
                        type='text'
                        placeholder='Digite o cidade...'
                        name='endereco.cidade'
                        value={values.endereco.cidade}
                        onChange={handleChange}
                        className={`form-control ${errors.cidade ? 'is-invalid' : ''}`}
                        />
                        <ErrorMessage name="cidade" component="div" className="invalid-feedback" />
                    </Form.Group>




                    </Row>
                    
                    <Row className='mt-4'>
                  
                  <Button className='btnAtualizar' type='submit'>
                    Atualizar Dados <AiOutlineSwapRight className="icon" />
                  </Button>
                    </Row>
    
                
                </Form>
              </div>
            </div>
          </div>
        )}
      </Formik>
    );
  }

  export default PerfilProfissional;
