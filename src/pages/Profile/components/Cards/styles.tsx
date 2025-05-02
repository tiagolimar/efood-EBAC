import styled from "styled-components";
import { Cores } from "../../../../globalStyles";

const CardsStyles = styled.div`
    width: 320px;
    background-color: ${Cores.laranjaEscuro};
    margin-bottom: 32px;

    .div-image {
        width: 304px;
        margin: 8px auto;
        background-color: transparent;
        img {
            max-width: 100%;
        }
    }

    h3 {
    background-color: transparent;
    color: #FFEBD9;
    margin-left: 8px;
    }

    .description {
        background-color: transparent;
        p {
            color: #FFEBD9;
            background-color: transparent;
            margin: 8px;
        }
    }

    button {
        width: 304px;
        height: 24px;
        margin: 0 8px;
        font-size: 14px;
        font-weight: 700;
        border: none;
        margin-bottom: 8px;
    }

`

export default CardsStyles