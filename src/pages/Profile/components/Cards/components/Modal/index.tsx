import { Produto } from "../../../../../../Types/Produto";
import ModalStyles from "./styles"
import close from "./img/close.svg"

type ModalProps = {
    info: Produto;
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
};

export default function Modal({ info, isOpen, setIsOpen}: ModalProps) {
    const { nome, descricao, foto, porcao, preco } = info;
    if (isOpen) {
        return (
            <ModalStyles>
                <div className="modal">
                    <div className="div-image">
                    <img src={foto} alt="#" />
                    </div>
                    <div className="div-info">
                        <h3>{nome}</h3>
                        <p>{descricao}</p>
                        <p className="text-botton">{porcao}</p>

                        <button>Adicionar ao carrinho - {preco.toLocaleString('pt-br',{style:'currency', currency:'BRL'})}</button>
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