import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";
import "./RegisterProfissional.css";
import "../../../loginReset.css";
import Image from "../../../LoginAssets/m4.png";
import { BiRename } from "react-icons/bi";
import { FaUserShield } from "react-icons/Fa";
import { BsFillShieldLockFill } from "react-icons/bs";
import { AiOutlineSwapRight } from "react-icons/Ai";
import {MdMarkEmailRead} from 'react-icons/md'

const RegisterProfissional = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    senha: "",
    especialidade: "",
  });


  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:8080/profissionais",
        formData
      );
      console.log("Cadastro realizado com sucesso!:", response.data);
      navigate('/loginProfissional');      
    } catch (error) {
      console.error("Erro ao cadastrar:", error);
    }
  };

  return (
    <div className="registerPage flex">
      <div className="container flex">
        <div className="fundo2">
          <img src={Image} className="img12" />

          <div className="footerDiv2 flex">
            <span className="text2">Já tem uma conta?</span>

            <div>
            <Link to='/loginProfissional' className="btnProfissional flex" >
              <span>Entrar</span>
              <AiOutlineSwapRight className="icon" />
            </Link> 
            </div>
          </div>    

        </div>

        <div className="formDivProfissional flex">
          <div className="headerDivProfissional">
            <h3>BEM-VINDO A VITICONNECT!</h3>
            <p>CADA MANCHA CONTA</p>
          </div>

          <form action="" className="formProfissional grid" onSubmit={handleSubmit}>
            <div className="inputDivProfissional">
              <label htmlFor="nome">Nome</label>
              <div className="inputProfissional flex">
                <FaUserShield className="icon" />
                <input
                  type="text"
                  id="nome"
                  name="nome"
                  placeholder="Insira seu Nome"
                  onChange={handleInputChange}
                />
              </div>
            </div>

            <div className="inputDivProfissional">
              <label htmlFor="email">Email</label>
              <div className="inputProfissional flex">
                <MdMarkEmailRead className="icon" />
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Insira seu Email"
                  onChange={handleInputChange}
                />
              </div>
            </div>

            <div className="inputDivProfissional">
              <label htmlFor="senha">Senha</label>
              <div className="inputProfissional flex">
                <BsFillShieldLockFill className="icon" />
                <input
                  type="password"
                  id="senha"
                  name="senha"
                  placeholder="Insira sua Senha"
                  onChange={handleInputChange}
                />
              </div>
            </div>

            <div className="inputDivProfissional">
              <label htmlFor="especialidade">Especialidade</label>
              <div className="inputProfissional flex">
                <BiRename className="icon" />
                <input
                  type="text"
                  id="especialidade"
                  name="especialidade"
                  placeholder="Ex: TATUAGEM"
                  onChange={handleInputChange}
                />
              </div>
            </div>  
            
             <button style={{marginTop:'20px'}} type="submit" className="btnProfissional flex">
              <span>Cadastrar</span>
              <AiOutlineSwapRight className="icon" />
            </button>

          </form>
          
         
        </div>
      </div>
    </div>
  );
};

export default RegisterProfissional;

 