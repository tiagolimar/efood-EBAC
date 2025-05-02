import { createGlobalStyle } from "styled-components";

const Cores ={
    laranjaClaro:'#FFF8F2',
    laranjaEscuro:'#E66767'
}

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        background-color: ${Cores.laranjaClaro};
        color: ${Cores.laranjaEscuro};
        font-family: 'Roboto';
    }

    body {
        overflow-x: hidden;
    }
`

export { Cores } ;