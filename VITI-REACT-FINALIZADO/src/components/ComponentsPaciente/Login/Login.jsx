import React, { useState} from "react";
import "./Login.css";
import "../../../loginReset.css";
import Image from "../../../LoginAssets/vitimulher6.png";
  
import { Link, useNavigate } from "react-router-dom";

import { BsFillShieldLockFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { AiOutlineSwapRight } from "react-icons/Ai";
import jwt_decode from 'jwt-decode';

import axios from "axios"; 

// Mova os interceptadores de requisição e resposta para fora do componente
axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response && error.response.status === 403) {
      // Token expirado, redirecionar para a tela de login
      localStorage.removeItem("token");
      const navigate = useNavigate(); // Obtenha navigate de dentro do componente
      navigate("/loginpaciente");
    }
    return Promise.reject(error);
  }
);

axios.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    senha: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post(
        "http://localhost:8080/login/paciente",
        formData
      );
    
      console.log("Resposta do servidor:", response);
    
      const { token } = response.data;
    
      console.log("Token recebido:", token);
    
      const decodedToken = jwt_decode(token);
    
      const userId = decodedToken?.id; // Acessando o claim "id" do token
      const userEmail = decodedToken?.sub; // Se o email estiver em "sub"
    
      console.log("ID do Pacinte:", userId);
      console.log("Email do Pacinte:", userEmail);
    
      localStorage.setItem("token", token);
      localStorage.setItem("email", formData.email);
      localStorage.setItem("userId", userId); // Armazena o ID do usuário
    
      // Verificação do ID do profissional após armazenamento
      const storedUserId = localStorage.getItem('userId');
      console.log('ID do Pacinte armazenado:', storedUserId);
    
      setLoading(false);
      navigate("/homepaciente");
    } catch (error) {
      setLoading(false);
      console.error("Erro ao efetuar login:", error);
      setError("Credenciais inválidas. Por favor, verifique seus dados.");
    }};

  return (
    <div className="loginPage flex">
      <div className="container flex">
        <div className="videoDiv">
          <img src={Image} className="img1"/>

         

              <div className="footerDiv flex">
              <span className="text">Não tem conta?</span>

              <div>
              <Link to='/registercliente' className="btn flex" >
                <span>Cadastrar</span>
              <AiOutlineSwapRight className="icon" />
              </Link> 
            </div>
        
              </div>
              </div>
        <div
          className="formDiv flex"
        >
          <div className="headerDiv">
{/*             <img src={logo} alt="Logo Image" />
 */}            <h3>BEM-VINDO A VITICONNECT!</h3>   
                <p>CADA MANCHA CONTA</p>            
          </div>
          <form action="" className="form grid" onSubmit={handleSubmit}>
      
            <div className="inputDiv">
              <label htmlFor="username">Email</label>
              <div className="input flex">
              <MdEmail 
 className='icon'/>
                <input 
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Email"
                />
              </div>
            </div>
            <div className="inputDiv">
              <label htmlFor="password">Senha</label>
              <div className="input flex">
                <BsFillShieldLockFill className="icon" />
                <input
                     type="password"
                     name="senha"
                     value={formData.senha}
                     onChange={handleInputChange}
                     placeholder="Senha"
                     />
              </div>
            </div>
            <button type="submit" className="btn flex">
              <span>Login</span>
              <AiOutlineSwapRight className="icon" />
            </button>
            <span className="forgotPassword">
              Esqueceu a senha? Clique aqui
            </span>
          </form>

      
            <Link to={'/loginprofissional'}>
            <button type="submit" className="btnprof flex" >
                <span>Login Profissional</span>
              <AiOutlineSwapRight className="icon" />
              </button>
              </Link> 

            
          
        </div>
      </div>
    </div>
  );
};

export default Login;
