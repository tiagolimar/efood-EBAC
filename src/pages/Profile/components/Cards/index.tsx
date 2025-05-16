import CardsStyles from "./styles";
import pizzaMargarita from "../../../../image/pizza-margarita.png"
import Modal from "./components/Modal"
import { useState } from "react";

const Cards = () => {
    const [openModal, setOpenModal] = useState(false);
    return (
        <CardsStyles>
            <Modal isOpen={openModal} setIsOpen={setOpenModal} />
            <div className="div-image">
                <img src={pizzaMargarita} alt="imagem do produto" />
            </div>
            <h3>Pizza Margarita</h3>
            <div className="description">
                <p>A clássica Marguerita: molho de tomate suculento, 
                    mussarela derretida, manjericão fresco e um toque de azeite.
                    Sabor e simplicidade!</p>
            </div>

            <button onClick={() =>setOpenModal(true)} >Adicionar ao carrinho</button>
        </CardsStyles>
    )
}

export default Cards