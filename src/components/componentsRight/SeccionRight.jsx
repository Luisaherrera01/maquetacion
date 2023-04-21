import Boton from "../componentsRight/Boton"
import Imagenes from "../componentsRight/Imagenes"
import imagen1 from "../../carpetaImagenes/imagen1.jpg"
import imagen2 from "../../carpetaImagenes/imagen2.jpg"
import imagen3 from "../../carpetaImagenes/imagen3.jpg"
import imagen4 from "../../carpetaImagenes/imagen4.jpg"
import "./styleRight.css"


const SeccionRight = () => {
    const imagenes = [
        {
          nombre:"Lorem ipsum dolor ",
          img:imagen1, 
        },
        {
          nombre:"Lorem ipsum dolor ",
          img:imagen2,
        },
        {
          nombre:"Lorem ipsum dolor ",
          img:imagen3,
        },
        {
          nombre:"Lorem ipsum dolor ",
          img:imagen4,
        }   
      ]
  return (
    <section className="fondoRight">
        <Boton/>
        <Imagenes imagenes={imagenes}/>
    </section>
  )
}

export default SeccionRight