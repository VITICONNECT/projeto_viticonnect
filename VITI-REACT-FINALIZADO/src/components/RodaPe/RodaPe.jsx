import './rodaPe.css'

import Logo from '../../img/logo.png'
import Whats from '../../img/Whats.png'
import Redes from '../../img/RedesSociais.png'

function RodaPe() {
    return (
        <div className="rodape">
            <div className="lado">
                <div className="colu">
                    <div className="logo">
                        <img src={Logo} alt="Logo da VITICONNECT" className="viti" />
                        <h1>VITICONNECT</h1>
                    </div>

                    <p>A primeira plataforma com foco em conectar e auxiliar detentores dessa condição.</p>

                    <img src={Whats} alt="Nos contate" className="whats" />
                </div>
                <div className="colu">
                    <h2>Home</h2>
                    <p>O que é vitiligo?</p>
                    <p>Como trabalhamos?</p>
                </div>
                <div className="colu">
                    <h2>Fórum</h2>
                    <p>Como funciona?</p>
                    <p>Termos de uso</p>
                </div>
                <div className="colu">
                    <h2>Serviços</h2>
                    <p>Como pago?</p>
                </div>
                <div className="colu">
                    <h2>Contato</h2>
                    <p>Segunda à Sexta: 9h às 21h</p>
                    <p>Sábado: 9h às 15h</p>
                </div>
            </div>

            <hr />

            <div className="rede">
                <img src={Redes} alt="Nossas redes sociais" className='redes' />
            </div>
        </div>
    )
}

export default RodaPe