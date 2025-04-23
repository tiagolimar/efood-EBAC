import StylesHero from "./styles";
import logo from "../../../../image/logo.svg";
import { Link } from "react-router-dom";

const Hero = () => (
    <StylesHero>
        <div className="heroContainer">
            <Link to='/'>
                <img id="logo" src={logo} alt="Logo" />
            </Link>
            <span id="text">Viva experiências gatronomicas no conforto da sua casa</span>
        </div>
    </StylesHero>
);

export default Hero;
