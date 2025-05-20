import { Restaurante } from "../../../../Types/Restaurante";
import Cards from "../Cards"
import MainStyles from "./style";
import useSWR from "swr";

const Main = () => {
    const fetcher = (url:string) => fetch(url).then(res => res.json());
    const url = " https://fake-api-tau.vercel.app/api/efood/restaurantes";

    const {data, error, isLoading } = useSWR( url, fetcher );

    if (error) return "An error occured";
    if (isLoading) return "Loading...";

    return (
        <MainStyles>
            {
                data.map((restaurante : Restaurante, key:number) =>(
                    <Cards info={restaurante} key={key} />
                ))
            }
        </MainStyles>
    )
}

export default Main