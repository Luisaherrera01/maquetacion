import Enlaces from "../componentsLeft/Enlaces"

const Nav = () => {
    const enlaces = {
        enlace1:"Enlace1",
        enlace2:"Enlace2",
        enlace3:"Enlace3"
    }
  return (
    <div className="listaEnlaces">
        <Enlaces enlaces={enlaces}/>
    </div>
  )
}

export default Nav