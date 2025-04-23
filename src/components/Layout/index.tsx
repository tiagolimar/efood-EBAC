import { Outlet } from "react-router-dom";
import Footer from "../Footer"
import { GlobalStyles } from "../../globalStyles";

function Layout() {
    return (
        <>
            <GlobalStyles />
            <Outlet />
            <Footer />
        </>
    )
}

export default Layout;