import trash from './assests/lixeira-de-reciclagem.svg'
import imgProduto from './assests/pizza-margarita.png';
import StyleCard from './StyleCard';

function Card() {
    return (
        <StyleCard>
            <div className="card">
                <div className="card-header">
                    <img src={imgProduto} alt="imagem do produto" />
                </div>
                <div className="card-body">
                    <div className="card-info">
                        <h4>Nome do Produto</h4>
                        <p>R$ 00,00</p>
                    </div>
                    <button className="btn btn-primary">
                        <img src={trash} alt="botão apagar" />
                    </button>
                </div>
            </div>
        </StyleCard>
    )
}

export default Card