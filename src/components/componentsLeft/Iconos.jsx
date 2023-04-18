

const Iconos = ({imgFooters}) => {
  return (
    <section>
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