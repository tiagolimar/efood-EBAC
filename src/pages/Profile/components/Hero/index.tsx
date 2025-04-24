import StylesHero from "./styles";
import logo from "../../../../image/logo.svg";
import MassaItaliana from "../../../../image/massa-italiana.jpg"
import { Link } from 'react-router-dom';

const Hero = () => (
    <StylesHero>
        <header>
            <div className="header-top">
                <h3>Restaurantes</h3>
                <Link to="/">
                    <img id="logo" src={logo} alt="Logo" />
                </Link>
                <p>0 produto(s) no carrinho</p>
            </div>
            <div className="header-bottom">
                <div className="title">
                    <h3>Italiana</h3>
                    <h2>La Dolce Vita Trattoria</h2>
                </div>
                <img src={MassaItaliana} alt="foto de uma massa italiana" />
            </div>
        </header>
    </StylesHero>
);

export default Hero;