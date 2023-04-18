import Boton from "./components/Boton"
import Imagenes from "./components/Imagenes"
import imagen1 from "./carpetaImagenes/imagen1.jpg"
import imagen2 from "./carpetaImagenes/imagen2.jpg"
import imagen3 from "./carpetaImagenes/imagen3.jpg"
import imagen4 from "./carpetaImagenes/imagen4.jpg"


const SeccionRight = () => {
    const imagenes = [
        {
          nombre:"imagen1",
          img:imagen1,
        },
    
        {
          nombre:"imagen2",
          img:imagen2,
        },
    
        {
          nombre:"imagen3",
          img:imagen3,
        },
    
        {
          nombre:"imagen4",
          img:imagen4,
        }
        
    
      ]
  return (
    <div>
        <Boton/>
        <Imagenes imagenes={imagenes}/>
    </div>
  )
}

export default SeccionRight