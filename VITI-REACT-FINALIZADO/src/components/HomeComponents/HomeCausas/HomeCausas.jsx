import './homeCausas.css'

import HomemHome from '../../../img/homem-home.png'
import PrimeiraManchaHome from '../../../img/mancha-um-home.png'

function HomeCausas() {
    return (
        <>
            <div className="causas-vitiligo">
                <h3>Causas do Vitiligo</h3>
                <p>As causas exatas do vitiligo ainda não são totalmente compreendidas. No entanto,
                    existem várias teorias sobre o que pode desencadear o vitiligo. Acredita-se que fatores genéticos
                    desempenham um papel significativo, já que a condição muitas vezes ocorre em famílias. Além disso, o
                    vitiligo está associado a distúrbios autoimunes, indicando que o sistema imunológico pode atacar
                    erroneamente os melanócitos. Fatores ambientais, como estresse e exposição a substâncias químicas,
                    também foram sugeridos como possíveis desencadeadores.</p>

                <img id="homem-home" src={HomemHome} />
                <img id="primeira-mancha-home" src={PrimeiraManchaHome} />
            </div>
        </>
    )
}

export default HomeCausas