import CardsStyles from "./styles";
import pizzaMargarita from "../../../../image/pizza-margarita.png"

const Cards = () => (
    <CardsStyles>
        <div className="div-image">
            <img src={pizzaMargarita} alt="" />
        </div>
        <h3>Pizza Margarita</h3>
        <div className="description">
            <p>A clássica Marguerita: molho de tomate suculento, 
                mussarela derretida, manjericão fresco e um toque de azeite.
                Sabor e simplicidade!</p>
        </div>

        <button>Adicionar ao carrinho</button>
    </CardsStyles>
)

export default Cards