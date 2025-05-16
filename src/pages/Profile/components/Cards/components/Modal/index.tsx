import pizzaMargarita from "../../../../../../image/pizza-margarita.png"
import ModalStyles from "./styles"
import close from "./img/close.svg"

export default function Modal({isOpen, setIsOpen}) {
    if (isOpen) {
        return (
            <ModalStyles>
                <div className="modal">
                    <div className="div-image">
                    <img src={pizzaMargarita} alt="#" />
                    </div>
                    <div className="div-info">
                        <h3>Pizza Margarita</h3>
                        <p>
                            A pizza Margherita é uma pizza clássica da culinária italiana, 
                            reconhecida por sua simplicidade e sabor inigualável. Ela é feita 
                            com uma base de massa fina e crocante, coberta com molho de tomate 
                            fresco, queijo mussarela de alta qualidade, manjericão 
                            fresco e azeite de oliva extra-virgem. A combinação de 
                            sabores é perfeita, com o molho de tomate suculento e ligeiramente 
                            ácido, o queijo derretido e cremoso e as folhas de manjericão 
                            frescas, que adicionam um toque de sabor herbáceo. É uma pizza 
                            simples, mas deliciosa, que agrada a todos os paladares e é uma 
                            ótima opção para qualquer ocasião.Serve: de 2 a 3 pessoas
                        </p>
                        <p className="text-botton">Serve de 2 a 3 pessoas</p>

                        <button>Adicionar ao carrinho - R$ 60,90</button>
                    </div>
                    <div className="div-close">
                        <img src={close} height={16} alt="Botão para fechar" onClick={() => setIsOpen(!isOpen)} />
                    </div>
                </div>
            </ModalStyles>
        )
    }

    return null
}