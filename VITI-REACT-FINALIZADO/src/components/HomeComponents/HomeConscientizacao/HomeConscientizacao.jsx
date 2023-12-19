import './homeConscientizacao.css'

import SegundoGrupoDePessoas from '../../../img/grupo-de-pessoass.png'

function HomeConscientizacao() {
    return(
        <>
            <div className="conscientizacao">
                    <img src={SegundoGrupoDePessoas} alt="Grupo de pessoas com vitiligo"
                        title="Grupo de pessoas com vitiligo" />

                    <div>
                        <h3>Conscientização e Aceitação</h3>
                        <p>O vitiligo pode ter um impacto significativo na autoestima e na saúde mental das pessoas afetadas. A
                            aparência visível das manchas brancas pode levar a sentimentos de constrangimento, isolamento social
                            e ansiedade. A conscientização sobre os aspectos psicossociais do vitiligo é crucial para promover a
                            compreensão e a aceitação, tanto por parte da pessoa afetada quanto da sociedade em geral. E com
                            esse objetivo criamos a VITICONNECT.</p>
                    </div>
                </div>
        </>
    )
}

export default HomeConscientizacao