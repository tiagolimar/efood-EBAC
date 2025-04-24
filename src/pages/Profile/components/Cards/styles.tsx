import styled from "styled-components";

const CardsStyles = styled.div`
    flex: 1 1 256px;
    background-color: #E66767;
    padding: 8px;

    *{
        background-color: transparent;
        color: #fff;
    }

    .card-img{
        overflow: hidden;

        img{
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }

    .card-content{
        h2{
            font-size: 16px;
            line-height: 100%;
            margin: 8px 0;
        }

        p{
            font-size: 14px;
            line-height: 22px;
            font-weight: 300;
        }

        button{
            margin-top: 8px;
            background-color: #fff;
            color: #E66767;
            border: none;
            padding: 4px 0;
            width: 100%;
            cursor: pointer;
            font-size: 14px;
            font-weight: bold;
            transition: all 0.3s ease-in-out;

            &:hover{
                background-color: #bb4545;
                color: #fff;
            }
        }
    }
`

export default CardsStyles