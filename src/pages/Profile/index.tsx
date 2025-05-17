import Main from "./components/Main";
import Hero from "./components/Hero";
import useSWR from "swr";
import { useParams } from "react-router-dom";


function Profile() {
    const { id } = useParams();
    const url = "https://fake-api-tau.vercel.app/api/efood/restaurantes/" + id;

    const fetcher = (url: string) => fetch(url).then(res => res.json());

    const { data, error, isLoading } = useSWR( url, fetcher );

        if (error) return "An error has occured."
        if(isLoading) return "loading...";

    return (
        <>
            <Hero tipo={data.tipo} titulo={data.titulo} capa={data.capa} />
            <Main info={data} />
        </>
    );
}

export default Profile;