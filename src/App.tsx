import Header from "./components/Header"
import Inicio from "./pages/Inicio"
import Footer from "./components/Footer"

import { Routes, Route } from 'react-router';
import Explorar from "./pages/Explorar";
import Favoritos from "./pages/Favoritos";

function App() {
    return (
        <main className="flex flex-col justify-between min-h-screen">
            <Header/>

            <Routes>
                <Route path="/"          element={<Inicio/>}/>
                <Route path="/explorar"  element={<Explorar/>}/>
                <Route path="/favoritos" element={<Favoritos/>}/>
            </Routes>

            <Footer/>
        </main>
    )
}

export default App
