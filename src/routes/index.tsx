import { Home, Curriculo } from "pages";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export function AppRoutes() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/home" element={<Home/>} />
                <Route path="/curriculo" element={<Curriculo/>} />
            </Routes>
        </BrowserRouter>
    );
}