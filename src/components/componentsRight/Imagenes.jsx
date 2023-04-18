
const Imagenes = ({imagenes}) =>{
    return(
        <section classname="imagenes">
            <section>
                {
                    imagenes.map((imagen)=>(
                        <section>
                            <img src={imagen.img}/>
                            <p>{imagen.nombre}</p>
                        </section>
                    ))
                }
            </section>

        </section>
    )
}

export default Imagenes