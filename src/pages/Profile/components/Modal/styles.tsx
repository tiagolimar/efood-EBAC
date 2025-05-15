import styled from "styled-components";
import { Cores } from "../../../../globalStyles";

const ModalStyles = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5); /* tela escura */
    z-index: 1000;
    .modal {
        position: fixed;
        max-width: 1024px;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: ${Cores.laranjaEscuro};
        color: black;
        display: flex;
        margin: auto;
        border: 1px red solid;
        * {
            background-color: transparent;
            color: white;
        }
        img {
            margin: 32px;
            width: 280px; 
            height: 280px;
        }
        .div-info {
            h3 {
                margin: 32px 0 16px;
            }
            .text-botton {
                margin: 16px 0;
            }
            button {
                cursor: pointer;
                background-color: white;
                color: ${Cores.laranjaEscuro};
                width: 218px;
                height: 28px;
                font-weight: 700;
                font-size: 14px;
                border: none;
            }
        }
    }
`

export default ModalStyles;