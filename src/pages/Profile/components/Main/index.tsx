import Cards from "../Cards";
import MainStyles from "./styles";


const Main = ({ info }) => {
    const {cardapio} = info;
    return(
            <>
        <MainStyles>
            {cardapio.map((produto, key) =>(
                <Cards info ={produto} key={key} />
            ))}
        </MainStyles>
    </>
    )
}

export default Main