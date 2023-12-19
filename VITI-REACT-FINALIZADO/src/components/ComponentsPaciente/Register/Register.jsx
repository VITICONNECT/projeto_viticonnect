import React, { useState } from "react";
import "./Register.css";
import "../../../loginReset.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";




import Image from "../../../LoginAssets/vitimulher6.png";
import logo from "../../../LoginAssets/logo.png";


import { FaUserShield } from "react-icons/Fa";
import { BsFillShieldLockFill } from "react-icons/bs";
import { BiRename } from "react-icons/bi";

import { AiOutlineSwapRight } from "react-icons/Ai";
import { MdMarkEmailRead } from 'react-icons/md'

const Register = () => {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    senha: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:8080/pacientes",
        formData
      );
      console.log("Cadastro realizado com sucesso!:", response.data);
      navigate('/loginCliente');
    } catch (error) {
      console.error("Erro ao cadastrar:", error);
    }
  };

  return (
    <div className="registerPage flex">
      <div className="container flex">
        <div className="videoDiv">
          <img src={Image} className="img1" />


          <div className="footerDiv flex">
            <span className="text">Já tem uma conta?</span>

            <div>
              <Link to={'/logincliente'} className="btn flex">
                <span>Entrar</span>
                <AiOutlineSwapRight className="icon" />
              </Link>
            </div>
          </div>
        </div>

        <div
          className="formDiv flex">
          <div className="headerDiv">
            {/*             <img src={logo} alt="Logo Image" />
 */}            <h3>BEM-VINDO A VITICONNECT!</h3>
            <p>CADA MANCHA CONTA</p>

          </div>


          <form action="" className="form grid" onSubmit={handleSubmit}>



            <div className="inputDiv">
              <label htmlFor="nome">Nome</label>
              <div className="input flex">
                <BiRename className="icon" />
                <input
                  type="text"
                  id="nome"
                  name="nome"
                  placeholder="Insira seu Nome"
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="inputDiv">
              <label htmlFor="email">Email</label>
              <div className="input flex">
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

            <div className="inputDiv">
              <label htmlFor="password">Senha</label>
              <div className="input flex">
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

            <button type="submit" className="btn flex">
              <span>Cadastrar</span>
              <AiOutlineSwapRight className="icon" />
            </button>

          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
