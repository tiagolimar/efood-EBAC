import StylesHero from "./styles";
import logo from "../../../../image/logo.svg";
import { Link } from 'react-router-dom';

type HeroProps = {
    tipo:string;
    titulo:string;
    capa:string;
}
const Hero = ({tipo, titulo, capa} : HeroProps) => (
    <StylesHero>
        <header>
            <div className="header-top">
                <div className="header-container">
                    <div>
                        <h3>Restaurantes</h3>
                    </div>
                    <div id="container-logo">
                        <Link id="link-logo" to="/">
                            <img id="logo" src={logo} alt="Logo" />
                        </Link>
                    </div>
                    <div id="container-cart">
                        <p>0 produto(s) no carrinho</p>
                    </div>
                </div>
                
            </div>
            <div className="header-bottom">
                <div className="title">
                    <h3>{tipo}</h3>
                    <h2>{titulo}</h2>
                </div>
                <img src={capa} alt="banner do restaurante" />
            </div>
        </header>
    </StylesHero>
);

export default Hero;