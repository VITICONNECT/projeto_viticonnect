import HomeCausas from '../../../components/HomeComponents/HomeCausas/HomeCausas'
import HomeConscientizacao from '../../../components/HomeComponents/HomeConscientizacao/HomeConscientizacao'
import HomeForum from '../../../components/HomeComponents/HomeForum/HomeForum'
import HomeNegocio from '../../../components/HomeComponents/HomeNegocio/HomeNegocio'
import Carousel from 'react-bootstrap/Carousel';
import banner from '../../../LoginAssets/bannerOFICIAL555.png'
import banner2 from '../../../LoginAssets/bannerOFICIAL444.png'
import img2 from '../../../LoginAssets/carrosel2.png'


import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"

import './home.css'


function Home() {

  const [sliderRef] = useKeenSlider(
    {
      loop: true,
    },
    [
      (slider) => {
        let timeout
        let mouseOver = false
        function clearNextTimeout() {
          clearTimeout(timeout)
        }
        function nextTimeout() {
          clearTimeout(timeout)
          if (mouseOver) return
          timeout = setTimeout(() => {
            slider.next()
          }, 2000)
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true
            clearNextTimeout()
          })
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false
            nextTimeout()
          })
          nextTimeout()
        })
        slider.on("dragStarted", clearNextTimeout)
        slider.on("animationEnded", nextTimeout)
        slider.on("updated", nextTimeout)
      },
    ]
  )

  return (
    <>
      <div className="home">

   {/*      <Carousel data-bs-theme="white"  >
          <Carousel.Item >
            <img
              className="c1 d-block w-100"
              src={img1}

            />

          </Carousel.Item>

          <Carousel.Item>
            <img
              className="c1 d-block w-100"
              src={img2}

            />

          </Carousel.Item>


        </Carousel>
 */}


<div ref={sliderRef} className="keen-slider">
        <div className="keen-slider__slide number-slide1 twentytwenty-handle"><img src={banner} alt="" /></div>
        <div className="keen-slider__slide number-slide2 twentytwenty-handle"><img src={banner2} alt="" /></div>
      </div>

 
 <div className="backHomeInicial">
     <HomeConscientizacao />

        <HomeCausas />
        <HomeForum />
        <HomeNegocio />
</div>



      </div>

    </>
  )
}

export default Home