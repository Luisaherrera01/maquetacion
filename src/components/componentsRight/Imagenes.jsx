
const Imagenes = ({imagenes}) =>{
    return(
        <section className="imgRight">
            
                {
                    imagenes.map((imagen)=>(
                        
                        <section>
                            <img src={imagen.img}/>
                            
                            <section className="cardInfo">
                                <p>{imagen.nombre}</p>
                            </section>
                        </section>
                    ))
                }
            

        </section>
    )
}

export default Imagenes