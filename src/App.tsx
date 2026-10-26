import Header from "./components/Header"
import Inicio from "./pages/Inicio"
import Footer from "./components/Footer"

import { Routes, Route } from 'react-router';

function App() {
    return (
        <main className="flex flex-col justify-between min-h-screen">
            <Header/>

            <Routes>
                <Route path="/" element={<Inicio/>}/>
            </Routes>

            <Footer/>
        </main>
    )
}

export default App
