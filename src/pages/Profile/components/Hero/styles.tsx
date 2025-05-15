import styled from "styled-components";
import image from "../../../../image/fundo.png"

const StylesHero = styled.header`

    width: 100%;
    margin-bottom: 128px;

    * {
        background-color: transparent;
    }

    header {
        height: 384px;
    }

    .header-top {
        background-image: url(${image});
        background-size: cover;  
        background-position: center;
        background-repeat: no-repeat;
        align-items: center;
        height: 186px;

        .header-container {
            max-width: 1024px;
            margin: auto;
            display: flex;
            align-items: center;

            div {
                margin-top: 40px;
                width: 33%;
            }

            #container-logo {
                text-align: center;
            }

            #container-cart {
                text-align: end;
            }
        }
    }

    .header-bottom {
        height: 256px;
        position: relative;

        img {
            width: 100%;
            height: 256px;
            object-fit: cover;
            filter: brightness(0.5);
        }

        .title {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 1024px;
            height: 100%;
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