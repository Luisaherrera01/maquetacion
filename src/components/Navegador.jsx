import FooterNav from "./FooterNav"
import ImgNav from "./ImgNav"
import UlNav from "./UlNav"


const Navegador = () => {
    const enlaces = {
        enlace1:"Enlace1",
        enlace2:"Enlace2",
        enlace3:"Enlace3"
    }
    const imagenesFooter = [
        {img:"imagen1"},
        {img:"imagen2"},
        {img:"imagen3"}
    ]
  return (
    <section>
        <ImgNav/>
        <UlNav enlaces={enlaces}/>
        <FooterNav imagenesFooter={imagenesFooter}/>
    </section>
  )
}

export default Navegador
