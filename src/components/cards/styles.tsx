import styled from "styled-components";

const CardsStyles = styled.div`
    border: 1px black solid;
    max-width: 472px;
    

    .subtitle {
        margin: 8px;
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
`

export default CardsStyles