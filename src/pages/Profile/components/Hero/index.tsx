import StylesHero from "./styles";
import logo from "../../../../image/logo.svg";
import massaItaliana from "../../../../image/massa-italiana.png";
import { Link } from 'react-router-dom';

const Hero = () => (
    <StylesHero>
        <header>
            <div className="header-top">
                <h3>Restaurantes</h3>
                <Link to="/">
                    <img id="logo" src={logo} alt="Logo" />
                </Link>
                <h4>0 produto(s) no carrinho</h4>
            </div>
            <div className="header-bottom">
                <div className="title">
                    <h3>Italiana</h3>
                    <h2>La Dolce Vita Trattoria</h2>
                </div>
                <img src={massaItaliana} alt="foto de uma massa italiana" />
            </div>
        </header>
    </StylesHero>
);

export default Hero;
