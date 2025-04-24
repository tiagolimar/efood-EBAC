import styled from "styled-components";
import image from "../../../../image/fundo.png"

const StylesHero = styled.header`

    width: 100%;

    * {
        background-color: transparent;
    }

    header {
        height: 384px;
    }

    header-top {
        background-image: url(${image});
        background-size: cover;  
        background-position: center;
        background-repeat: no-repeat;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 64px 128px;
        height: 50px;
    }

    border-bottom {
        height: 256px;
        position: relative;

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            filter: brightness(0.5);
        }

        .title {
            position: absolute;
            width: 100%;
            height: 100%;
            margin-left: 128px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            padding: 16px 0;
            z-index: 1;
        }

        h3, h2 {
            color: white;
            font-size: 32px;
        }

        h3 {
            font-weight: lighter;
        }
    }
`

export default StylesHero