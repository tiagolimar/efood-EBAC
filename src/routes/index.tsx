import { Routes, Route, BrowserRouter } from "react-router-dom"
import Layout from "../components/Layout";
import Home from "../pages/Home"
import Profile from "../pages/Profile"


export function App() {
    return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="/perfil" element={<Profile />} />
            </Route>
        </Routes>
    </BrowserRouter>
    );
}

export default App