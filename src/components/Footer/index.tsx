import { Link } from "react-router-dom";
import StylesFooter from "./styles";
import logo from "../../image/logo.svg";
import facebook from "../../image/social-medias/facebook.svg";
import instagram from "../../image/social-medias/instagram.svg";
import twitter from "../../image/social-medias/twitter.svg";

function Footer() {
    return (
        <StylesFooter>
            <footer>
                <Link to="/">
                    <img id="logo" src={logo} alt="Logo" />
                </Link>
                <div className="medias">
                    <img src={instagram} alt="ícone do instagram" />
                    <img src={facebook} alt="ícone do facebook" />
                    <img src={twitter} alt="ícone do twitter" />
                </div>
                <div className="footer-text">
                    <p>A efood é uma plataforma para divulgação de estabelecimentos, a responsabilidade pela entrega, qualidade dos produtos é toda do estabelecimento contratado.</p>
                </div>
            </footer>
        </StylesFooter>
    );
}

export default Footer;
