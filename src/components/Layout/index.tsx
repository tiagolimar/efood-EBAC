import { useState } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Footer"
import Sidebar from "../Sidebar";
import Cart from "../Cart";
import { GlobalStyles } from "../../globalStyles";

function Layout() {
    const [open, setOpen] = useState(false);
    return (
        <>
            <GlobalStyles />
            <Cart setOpen={setOpen} />
            <Sidebar open={open} setOpen={setOpen} />
            <Outlet />
            <Footer />
        </>
    )
}

export default Layout;