import { Outlet } from "react-router-dom";
import Footer from "../Footer"
import { GlobalStyles } from "../../globalStyles";
import Sidebar from "../Sidebar";

function Layout() {
    return (
        <>
            <GlobalStyles />
            <Sidebar />
            <Outlet />
            <Footer />
        </>
    )
}

export default Layout;