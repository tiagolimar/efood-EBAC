import CardsStyles from "./styles";
import sushiImage from "../../../../image/sushi.png"
import star from "../../../../image/estrela.svg"
import { Link } from "react-router-dom";

const CardsPlus = () => (
    <CardsStyles>
        <div className="card">
            <div className="card-categories">
                <h4 className="categories">Destaque da semana</h4>
                <h4 className="categories">Japonesa</h4>
            </div>
            <img src={sushiImage} alt="" />
            <div className="subtitle">
                <h3>Hioki Sushi</h3>
                <div>
                    <div id="nota">4.9</div>
                    <div>
                        <img src={star} alt="estrela" />
                    </div>
                </div>
            </div>
            <div className="description">
                <p>
                    Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis.
                    Entrega rápida, embalagens cuidadosas e qualidade garantida.<br/>Experimente o Japão sem sair do lar com nosso delivery!
                </p>
                <Link to='/perfil'>Saiba mais</Link>
            </div>
        </div>

        
    </CardsStyles>
)

export default CardsPlus