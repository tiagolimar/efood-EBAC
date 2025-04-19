import CardsStyles from "./styles";
import sushiImage from "../../../image/sushi.png"
import star from "../../../image/estrela.svg"

const Cards = () => (
    <CardsStyles>
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
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, incidunt exercitationem. Dolorum asperiores quia enim, veniam dolorem sit a obcaecati possimus libero cum dolore non,
            ipsa optio mollitia perspiciatis nobis?
        </p>
        <button>Saiba mais</button>
    </CardsStyles>
)

export default Cards