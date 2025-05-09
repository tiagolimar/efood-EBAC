import styled from "styled-components";
import { Cores } from "../../../../globalStyles";

const CardsStyles = styled.div`
    max-width: 472px;
    margin-bottom: 64px;
    border: 1px ${Cores.laranjaEscuro} solid;
    background-color: white;

    .card{
        position: relative;
    }

    .card-categories{
        position: absolute;
        display: flex;
        gap: 8px;
        background-color: transparent;
        right: 16px;
        top: 16px;
    }

    .card-categories .categories{
        width: fit-content;
        padding: 4px;
        background-color: ${Cores.laranjaEscuro};
        color: white;
        font-weight: normal;
    }
    
    .subtitle {
        margin: 8px;
        padding-bottom: 16px;
        display: flex;
        justify-content: space-between;

        div {
            width: 56px;
            height: 24px;
            display: flex;
            justify-content: space-between;
            align-items: center;

            #nota {
                font-weight: 700;
                font-size: 18px;
            }

            img {
                width: 21px;
            }
            
        }
    }

    .description {
        display: flex;
        flex-direction: column;
        padding-left: 8px;

        p{
            padding-left: 4px ;
        }

        a{
            width: fit-content;
            padding: 4px;
            background-color: ${Cores.laranjaEscuro};
            color: white;
            margin-top: 16px;
            margin-bottom: 8px;
            text-decoration: none;
        }
    }
`

export default CardsStyles