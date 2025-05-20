import { Produto } from "../../../../Types/Produto";
import { Restaurante } from "../../../../Types/Restaurante";
import Cards from "../Cards";
import MainStyles from "./styles";


type MainProps = {
    info: Restaurante;
};

const Main = ({ info }:MainProps) => {
    const {cardapio} = info;
    return(
            <>
        <MainStyles>
            {cardapio.map((produto : Produto, key:number) =>(
                <Cards info ={produto} key={key} />
            ))}
        </MainStyles>
    </>
    )
}

export default Main