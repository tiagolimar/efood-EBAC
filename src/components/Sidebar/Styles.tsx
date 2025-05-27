import styled from "styled-components"
import { Cores } from "../../globalStyles"

const StylesSidebar = styled.div`
.div-button {
    position: fixed;
    z-index: 1;
    top: 50px;
    right: 0;
    margin: none;
    height: 38px;
    width: 64px;
    border: none;
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
    display: flex;
    background-color: ${Cores.laranjaEscuro};
    color: white;
    cursor: pointer;
    transition: background-color 0.3s ease;
    &:hover {
        background-color: #fa4141;
    }
    img {
        height: 24px;
        background-color: transparent;
        margin: auto;
    }
}
.cart-sidebar {
    height: 100vh;
    width: 360px;
    background-color: ${Cores.laranjaEscuro};
    

}
`

export default StylesSidebar