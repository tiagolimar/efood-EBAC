import CardsStyles from "./styles";
import star from "../../../../image/estrela.svg";
import { Link } from "react-router-dom";

const Cards = ({ info }) => {
  const { titulo, descricao, avaliacao, tipo, capa, id } = info;

  return (
    <CardsStyles>
      <div className="card">
        <div className="card-categories">
          <h4 className="categories">{tipo}</h4>
        </div>
        <img className="card-img" src={capa} alt="" />
        <div className="subtitle">
          <h3>{titulo}</h3>
          <div>
            <div id="nota">{avaliacao}</div>
            <div>
              <img src={star} alt="estrela" />
            </div>
          </div>
        </div>
        <div className="description">
          <p>{descricao}</p>
          <Link to={`/perfil/${id}`}>Saiba mais</Link>
        </div>
      </div>
    </CardsStyles>
  );
};

export default Cards;
