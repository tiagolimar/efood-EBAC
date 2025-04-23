import styled from "styled-components";

const StylesFooter = styled.header`
    footer{
        background-color: #FFEBD9;
        padding: 32px 0;
        text-align: center;
        position: relative;
        bottom: 0;
        width: 100%;
        font-size: 14px;
        display: flex;
        flex-direction: column;
        gap:16px;

        a, div, p{
            background-color: #FFEBD9;
        }

        .medias{
            display: flex;
            justify-content: center;
            gap: 16px;
            margin-bottom: 64px;
        }

        .footer-text{
            margin: 0 auto;
            text-align: center;
            width: 50%;
        }
    }
`

export default StylesFooter