import Header from "./components/Header"
import Inicio from "./pages/Inicio"
import Footer from "./components/Footer"
function App() {
    return (
        <main className="flex flex-col justify-between min-h-screen">
            <Header/>
            <Inicio/>
            <Footer/>
        </main>
    )
}

export default App
