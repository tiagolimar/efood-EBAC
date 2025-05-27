import { useState } from "react";
import StylesSidebar from "./Styles";
import shoppingCart from "../../image/shopping-cart-svgrepo-com.svg";

const Sidebar = () => {
    const [open, setOpen] = useState(false);

    return (
        <StylesSidebar className={open ? "open" : ""}>
            <div className="div-button" onClick={() => setOpen(!open)}>
                <img src={shoppingCart} alt="Carrinho" />
            </div>

            <div className="cart-sidebar">
                <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt
                error architecto dolor? Facilis pariatur eaque ipsa distinctio
                doloremque, dicta quos similique officia. Sunt saepe maiores nihil
                nostrum perspiciatis dignissimos corrupti!
                </p>
            </div>
        </StylesSidebar>
    );
};

export default Sidebar;
