import { useState } from "react";

import Cards from "../Cards";
import MainStyles from "./styles";
import Modal from "../Modal";

const Main = () => {
    const [openModal, setOpenModal] = useState(false)
    return(
            <>
        <button onClick={() => setOpenModal(true)}>aperte para o modal</button>
        <Modal isOpen={openModal}/>
        <MainStyles>
            <Cards />
            <Cards />
            <Cards />
            <Cards />
            <Cards />
            <Cards />
        </MainStyles>
    </>
    )
}

export default Main