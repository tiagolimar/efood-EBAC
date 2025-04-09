import StylesHero from "./styles";
import logo from "../../../image/logo.svg";

const Hero = () => (
    <StylesHero>
        <div className="heroContainer">
            <img id="logo" src={logo} alt="Logo" />
            <span id="text">Viva experiências gatronomicas no conforto da sua casa</span>
        </div>
    </StylesHero>
);

export default Hero;
