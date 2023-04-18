import imagen1 from "../carpetaImagenes/imagen2.jpg"
import imagen2 from "../carpetaImagenes/imagen3.jpg"
import imagen3 from "../carpetaImagenes/imagen4.jpg"

const FooterNav = ({imagenesFooter}) => {
  return (
    <section>
        <img src={imagenesFooter.imagen1}>
        <img src={imagenesFooter.imagen2}>
        <img src={imagenesFooter.imagen3}>
    </section>
    
  )
}

export default FooterNav