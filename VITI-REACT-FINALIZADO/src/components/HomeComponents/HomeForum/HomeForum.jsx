import './homeForum.css'

import GrupoDePessoas from '../../../img/grupo-de-pessoas.png'

function HomeForum() {
    return (
        <>
        <div>
            <h1 id="como-trabalhamos">Como Trabalhamos?</h1>

            <div className="parte-forum">

                <div className="forum-home">
                    <h2>Fórum</h2>
                    <p>Nós temos um sistema de chat que conecta todos para poderem debater sobre suas vivências</p>
                </div>

                <img src={GrupoDePessoas} alt="Grupo de pessoas com vitiligo" title="Grupo de pessoas com vitiligo" />
            </div>
            
            </div>
        </>
    )
}

export default HomeForum