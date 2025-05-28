import { useState } from "react";
import StylesSidebar from "./Styles";
import shoppingCart from "../../image/shopping-cart-svgrepo-com.svg";
import Card from "./components/Card";

const Sidebar = () => {
    const [open, setOpen] = useState(true);

    return (
        <StylesSidebar className={open ? "open" : ""}>
            <div className="offcanvas">
                <div className="div-button" onClick={() => setOpen(!open)}>
                    <img src={shoppingCart} alt="Carrinho" />
                </div>

                <div className="cards-product">
                    <Card />
                    <Card />
                    <Card />
                </div>

                <div className="total">
                    <div className="total-info">
                        <h4>Valor Total</h4>
                        <p>R$ 00,00</p>
                    </div>
                    <button className="btn btn-primary">Continuar com a entrega</button>
                </div>
            </div>
        </StylesSidebar>
    );
};

export default Sidebar;