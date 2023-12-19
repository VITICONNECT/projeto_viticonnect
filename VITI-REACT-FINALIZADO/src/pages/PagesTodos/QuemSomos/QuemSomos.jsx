

import QmsmsParteRosa from '../../../components/QuemSomoComponents/QmsmsParteRosa/QmsmsParteRosa'
import QmsmsParteVerde from '../../../components/QuemSomoComponents/QmsmsParteVerde/QmsmsParteVerde'
import QmsmsTipografia from '../../../components/QuemSomoComponents/QmsmsTipografia/QmsmsTipografia'
import QmsmsTitulo from '../../../components/QuemSomoComponents/QmsmsTitulo/QmsmsTitulo'
import ManchaEsquerdaQmsms from '../../../img/mancha-esquerda-qmsms.png'
import mobile from './equipe/mobile.png'
import HomemVerde from '../../../img/homem.png'
import MulherRosa from '../../../img/mulher.png'
import ManchaDireitaQmsms from '../../../img/mancha-direita-qmsms.png'
import { GiThreeFriends } from "react-icons/gi";
import logo from './equipe/logo.png'
import { MdOutlineVisibility } from "react-icons/md";
import { FaListCheck } from "react-icons/fa6";

import { FaHandHoldingHeart } from "react-icons/Fa";
import { LuHeartHandshake } from "react-icons/lu";
import { GiHeartShield } from "react-icons/gi";


import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import { FaHeart } from "react-icons/Fa";
import { HiMiniShoppingCart } from "react-icons/hi2";

import { EffectCards } from 'swiper/modules';

import gustavo from './equipe/gustavo_freitas_scrum_full.png'
import igor from './equipe/igor_rodrigues_full.png'
import juan from './equipe/juan_pires_po_back.png'
import nicole from './equipe/nicole_lins_front.png'
import sabrina from './equipe/sabrina_becker_front.png'
import jonatas from './equipe/jonatas_fernandes_financeiro_front.png'


import './quemSomos.css'

function QuemSomos() {
    return (
        <>

            <div className='backQSM'>
                <div className='containerqsm'>

                    <div className='containerTeam'>

                        <h1>Nossa equipe</h1>

                        <div className='vitiTeam'>

                            <div className='containergustavo'>
                                <img src={gustavo} alt="" />
                                <span>Gustavo</span>
                                <span style={{fontSize:'1rem', color:'#05676E'}}>Scrum Master</span>
                                </div>

                            <div className='containergustavo'>
                                <img src={igor} alt="" />
                                <span>Igor</span>
                                <span style={{fontSize:'1rem', color:'#05676E'}}>Full-Stack</span>

                                </div>

                            <div className='containergustavo'>
                                <img src={jonatas} alt="" />
                                <span>Jonatas</span>
                                <span style={{fontSize:'1rem', color:'#05676E'}}>Financeiro</span>

                                </div>
                            <div className='containergustavo'>
                                <img src={juan} alt="" />
                                <span>Juan</span>
                                <span style={{fontSize:'1rem', color:'#05676E'}}>Product Owner</span>

                                </div>
                            <div className='containergustavo'>
                                <img src={nicole} alt="" />
                                <span>Nicole</span>
                                <span style={{fontSize:'1rem', color:'#05676E'}}>Front-End</span>

                                </div>

                            <div className='containergustavo'>
                                <img src={sabrina} alt="" />
                                <span>Sabrina</span>
                                <span style={{fontSize:'1rem', color:'#05676E'}}>Designer</span>

                                </div>


                        </div>


                    </div>

                    <div className='qsmtitulo'>

                        <div id='textosPrincipal'>
                            <h1>Quem Somos</h1>
                            <span>Nossa plataforma é voltada para pessoas com vitiligo. Desenvolvida
                                por um grupo de 6 alunos do Instituto PROA, dedicados a criar algo que acolhesse e ajudasse pessoas com essa
                                condição. Informando sobre a verdade da doença, com um fórum para debates e indicando ótimos profissionais,
                                onde os próprios clientes indicam e avaliam.</span>

                            <img id="mancha-esquerda-qmsms" src={ManchaEsquerdaQmsms} />
                        </div>

                    </div>


                    <div className='imglogologo'>
                        <img src={logo} alt="" />
                        <h1>VITICONNECT LOGO</h1>
                    </div>





                    <div className='qsmverde'>

                        <h1 id="t-verde-qmsms">Plataforma</h1>

                        <div className="parte-verde-qmsms">

                            <p>O ciano uma variação mais suave entre as cores azul e verde, representa um sensação de renovação, suavidade e esperança. Algo positivo para uma plataforma que promove a inclusão e aceitamento.</p>
                            <img src={HomemVerde} alt="Homem com Vitiligo" title="Homem com Vitiligo" />
                        </div>

                    </div>
                    <div className='qsmrosa'>

                        <div className="parte-rosa-qmsms">

                            <img src={MulherRosa} alt="Mulher com vitiligo" title="Mulher com vitiligo" />
                            <p>O Lilás é uma mistura de azul e vermelho, duas cores que, quando combinadas, simbolizam diversidade. Isso pode ser interpretado como um símbolo da diversidade da condição humana, incluindo a variedade de experiências e identidades das pessoas com vitiligo.</p>
                        </div>


                    </div>
                    <div id='containerMancha'>

                        <div id='textosTipografia'>
                            <h1 className="tipografia-qmsms">Tipografia</h1>

                            <p className="fonte-qmsms">A fonte "Oswald" tem um estilo geométrico, com letras e formas simples e limpas, conhecida por
                                sua legibilidade e versatilidade, é popular em várias aplicações de design por ser uma opção moderna e
                                elegante.</p>
                        </div>
                        <img id="mancha-direita-qmsms" src={ManchaDireitaQmsms} />

                    </div>

                    <div className='futuro'>

                        <div className='containerFuturo'>


                            <div className='missaovalores'>

                                <div>

                                    <div>

                                        <Swiper
                                            effect={'cards'}
                                            grabCursor={true}
                                            modules={[EffectCards]}
                                            className="mySwiperQuem"
                                        >
                                            <SwiperSlide style={{ flexDirection: 'column', display: 'flex', gap: '20px' }}>
                                                <div style={{ display: 'block', fontWeight: '400' }}>
                                                    Missão <FaListCheck />

                                                </div>
                                                <div className='textCardSliderQuem'>
                                                    <span>Empoderar e proporcionar uma comunidade acolhedora para aqueles que convivem com o vitiligo, estabelecendo parcerias com profissionais que ofereçam serviços específicos para esse público. Além disso, buscamos informar e conscientizar a população sobre essa condição inofensiva, promovendo a aceitação e a compreensão
                                                    </span>


                                                </div>



                                            </SwiperSlide>

                                            <SwiperSlide style={{ flexDirection: 'column', display: 'flex', gap: '20px' }}>
                                                <div style={{ display: 'block', fontWeight: '400' }}>
                                                    Visão      <MdOutlineVisibility />
                                                </div>
                                                <div className='textCardSliderQuem'>
                                                    <span>Expandir nossa influência para alcançar um público mais amplo, tornando-nos a principal referência. Almejamos o crescimento contínuo, estabelecendo conexões duradouras fundamentadas na confiança e na entrega de serviços de alta qualidade.
                                                    </span>


                                                </div>


                                            </SwiperSlide>

                                            <SwiperSlide style={{ flexDirection: 'column', display: 'flex', gap: '20px' }}>
                                                <div style={{ display: 'flex', fontWeight: '400', gap: '10px' }}>
                                                    Valores <FaHandHoldingHeart />

                                                </div>
                                                <div className='textCardSliderQuem'>
                                                    <p><span><FaHeart /></span> Inclusão</p>
                                                    <p><span><LuHeartHandshake />
                                                    </span> Empatia</p>
                                                    <p><span><GiThreeFriends />
                                                    </span> Respeito </p>
                                                    <p><span><GiHeartShield />
                                                    </span> Segurança </p>

                                                </div>
                                            </SwiperSlide>
                                        </Swiper>
                                    </div>
                                </div>




                            </div>








                            <div className='futuromobile'>
                                <img src={mobile} alt="" />

                                <div className='textfuturo'>
                                    <h1>Próximos passos...</h1>

                                </div>

                            </div>



                        </div>

                    </div>





                </div>

            </div>
        </>
    )
}

export default QuemSomos