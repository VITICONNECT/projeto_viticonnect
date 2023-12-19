import './qmsmsTitulo.css'

import ManchaEsquerdaQmsms from '../../../img/mancha-esquerda-qmsms.png'

function QmsmsTitulo() {
    return (
        <>
        <div id='containerTitulo'>
            <div id='textosPrincipal'>
            <h1 id="t-principal-qmsms">Quem Somos</h1>

            <p id="p-inicial-qmsms">Nossa plataforma é voltada para pessoas com vitiligo. Desenvolvida
                por um grupo de 6 alunos do Instituto PROA, dedicados a criar algo que acolhesse e ajudasse pessoas com essa
                condição. Informando sobre a verdade da doença, com um fórum para debates e indicando ótimos profissionais,
                onde os próprios clientes indicam e avaliam.</p>
</div>
            <img id="mancha-esquerda-qmsms" src={ManchaEsquerdaQmsms} />
            </div>
        </>
    )
}

export default QmsmsTitulo