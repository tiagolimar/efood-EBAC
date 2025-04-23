import { Link } from "react-router-dom";
import StylesFooter from "./StylesFooter"
import logo from "../../image/logo.svg"
import facebook from "../../image/social-medias/facebook.svg"
import instagram from "../../image/social-medias/instagram.svg"
import twitter from "../../image/social-medias/twiter.svg"

function Footer() {
    return (
        <StylesFooter>
            <footer>
                <Link to="/">
                    <img id="logo" src={logo} alt="" />
                </Link>
                <div className="medias">
                    <img src={instagram} alt="icone do instagram" />
                    <img src={facebook} alt="icone do facebook" />
                    <img src={twitter} alt="icone do twitter" />
                </div>
                <div className="footer-text">
                    <p>A efood é uma plataforma para divulgação de estabelecimentos, a responsabilidade pela entrega, qualidade dos produtos é toda do estabelecimento contratado. </p>
                </div>
            </footer>
        </StylesFooter>
    )
}

export default Footer;