import { Home, WriteNowPage } from "pages";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export function AppRoutes() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/home" element={<Home/>} />
                <Route path="/escrever-agora" element={<WriteNowPage/>} />
            </Routes>
        </BrowserRouter>
    );
}