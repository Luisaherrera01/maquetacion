import Iconos from "./Iconos"
import icono1 from "../../carpetaImagenes/icono1.jpg"
import icono2 from "../../carpetaImagenes/icono2.jpg"
import icono3 from "../../carpetaImagenes/icono3.jpg"


const FooterNav = () => {
  const imgFooters = [
    {
      img:icono1
    },
    {
      img:icono2
    },
    {
      img:icono3
    }
]
  return (
    <section>
      <Iconos imgFooters={imgFooters}/>
    </section>
    
  )
}

export default FooterNav