import ImgNav from "../componentsLeft/ImgNav"
import Nav from "../componentsLeft/Nav"
import FooterNav from "../componentsLeft/FooterNav"
import "../../components/componentsLeft/styleLeft.css"


const Header = () => {
  return (
    <section className="header">
        <ImgNav/>
        <Nav/>
        <FooterNav/>
    </section>
  )
}

export default Header
