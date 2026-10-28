import Header from "./components/Header"
import Inicio from "./pages/Inicio"
import Footer from "./components/Footer"

import { Routes, Route } from 'react-router';
import Explorar from "./pages/Explorar";
import Favoritos from "./pages/Favoritos";  

import type { Character } from "./types/character";
import { useState } from "react";


// === Handle Favoritos ===
function loadFavoritos() : Character[]
{
    return JSON.parse(localStorage.getItem('favoritos') || '[]');
}

function addToFavoritos(character: Character)
{
    const favoritos = loadFavoritos();
    favoritos.push(character);
    localStorage.setItem('favoritos', JSON.stringify(favoritos));
}

function removeFromFavoritos(character: Character)
{
    const favoritos = loadFavoritos();
    localStorage.setItem('favoritos', JSON.stringify(favoritos.filter(c => c.id != character.id)));
}

export function toggleFavorito(character: Character, favoritos: Character[], setFavoritos: any)
{
    const isFavorite = favoritos.find(c => c.id == character.id);

    if (isFavorite) {
        removeFromFavoritos(character);
    } else {
        addToFavoritos(character);
    }
    setFavoritos(loadFavoritos());
}
// ===================================================================================


function App() {

    const [favoritos, setFavoritos] = useState<Character[]>(loadFavoritos());

    return (
        <main className="flex flex-col justify-between min-h-screen">
            <Header/>

            <Routes>
                <Route path="/"          element={<Inicio/>}/>
                <Route path="/explorar"  element={<Explorar  favoritos={favoritos} setFavoritos={setFavoritos}/>}/>
                <Route path="/favoritos" element={<Favoritos favoritos={favoritos} setFavoritos={setFavoritos}/>}/>
            </Routes>

            <Footer/>
        </main>
    )
}

export default App
