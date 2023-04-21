

const Iconos = ({imgFooters}) => {
  return (
    <section className="iconos">
      {
        imgFooters.map((icono)=>(
          <section>
            <img src={icono.img}/>
          </section>
          )
        )
      } 
    </section>
  )
}

export default Iconos