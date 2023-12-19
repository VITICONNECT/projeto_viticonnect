import './homeNegocio.css'

import MulherHome from '../../../img/mulher-home.png'

function HomeNegocio() {
    return (
        <>
            <div className="parte-negocio">

                <img src={MulherHome} alt="Mulher com vitiligo" title="Mulher com vitiligo" />

                <div className="negocio-home">
                    <h2>Negócio</h2>
                    <p>Também conectamos vocês com profissionais expecializados para que possam se ajudar em varias áreas
                    </p>
                </div>
            </div>
        </>
    )
}

export default HomeNegocio