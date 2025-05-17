import styled from "styled-components";
import { Cores } from "../../../../globalStyles";

const CardsStyles = styled.div`
  max-width: 472px;
  margin-bottom: 64px;
  border: 1px ${Cores.laranjaEscuro} solid;
  background-color: white;

  * {
    background-color: white;
  }

  .card {
    position: relative;
  }

  .card-categories {
    position: absolute;
    display: flex;
    gap: 8px;
    background-color: transparent;
    right: 16px;
    top: 16px;
  }
  .card-img {
    width: 100%;
    height: 217px;
    object-fit: cover;
  }

  .card-categories .categories {
    width: fit-content;
    padding: 4px;
    color: white;
    background-color: ${Cores.laranjaEscuro};
    font-weight: normal;
  }

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

    }
  }
  .description {
    height: 100%;
    display: flex;
    flex-direction: column;
    padding-left: 8px;

    p {
      padding-left: 4px;
    }

    a {
      width: fit-content;
      padding: 4px;
      background-color: ${Cores.laranjaEscuro};
      color: white;
      margin-top: 16px;
      margin-bottom: 8px;
      text-decoration: none;
    }
  }
`;

export default CardsStyles;
