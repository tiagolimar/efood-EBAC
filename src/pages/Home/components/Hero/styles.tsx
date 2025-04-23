import styled from "styled-components";
import image from "../../../../../src/image/fundo.png"

const StylesHero = styled.header`
    background-image: url(${image});
    background-size: cover;  
    background-position: center;
    background-repeat: no-repeat;
    width: 100%;  
    height: 384px;

    .heroContainer {
        display: flex;
        flex-direction: column;
        background-color: transparent;
        text-align: center;

        a {
            background-color: transparent;
        }

        #logo {
            margin: 40px auto;
            height: 57.5px;
            width: 125px;
        }
        
        #text {
            margin: 40px auto;
            text-align: center;
            width: 539px;
            height: 84px;
            font-weight: 900;
            font-size: 36px;
            background-color: transparent;
        }
    }
`

export default StylesHero