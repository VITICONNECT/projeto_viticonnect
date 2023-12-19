import './qmsmsTipografia.css'

import ManchaDireitaQmsms from '../../../img/mancha-direita-qmsms.png'

function QmsmsTipografia() {
    return (
        <>
<div id='containerMancha'>

    <div id='textosTipografia'>
            <h1 className="tipografia-qmsms">Tipografia</h1>

            <p className="fonte-qmsms">A fonte "Oswald" tem um estilo geométrico, com letras e formas simples e limpas, conhecida por
                sua legibilidade e versatilidade, é popular em várias aplicações de design por ser uma opção moderna e
                elegante.</p>
</div>
            <img id="mancha-direita-qmsms" src={ManchaDireitaQmsms} />
            
            </div>
        </>
    )
}

export default QmsmsTipografia