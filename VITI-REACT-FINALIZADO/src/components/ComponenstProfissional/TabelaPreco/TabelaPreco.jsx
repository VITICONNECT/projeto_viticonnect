import './tabelaPreco.css'

function TabelaPreco() {
    return (
        <>
            <div className="tabela">
                <div className="titulo">Básica</div>
                <div className="disc">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</div>
                <div className="preco">
                    <span>R$</span>20,00
                </div>

                <div className="check"> <span>&#10003;</span> A Nicole é linda</div>
                <div className="check"> <span>&#10003;</span> A Nicole é linda</div>
                <div className="check"> <span>&#10003;</span> A Nicole é linda</div>
            </div>
        </>
    )
}

export default TabelaPreco