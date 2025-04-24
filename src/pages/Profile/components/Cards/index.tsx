import CardsStyles from "./styles";
import sushiImage from "../../../../image/sushi.png";

const Cards = () => (
    <CardsStyles>
        <div className="card">
            <div className="card-img">
                <img src={sushiImage} alt="Sushi" />
            </div>
            <div className="card-content">
                <h2>Pizza Marguerita</h2>
                <p>A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!</p>
                <button>Adicionar ao carrinho</button>
            </div>
        </div>
    </CardsStyles>
)

export default Cards