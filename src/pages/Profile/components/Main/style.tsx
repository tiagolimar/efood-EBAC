import styled from "styled-components"

const MainStyles = styled.section`
    margin: 64px 128px;
    display: flex;
    gap: 32px;
    flex-wrap: wrap;
    
    @media (max-width: 768px) {
        margin: 32px 64px;
    }
`

export default MainStyles