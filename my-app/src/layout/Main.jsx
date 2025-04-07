// Importa as seções principais do site, cada uma representando uma parte da página
import Home from "../pages/Home";
import About from "../pages/About";
import Skill from "../pages/Skiil";
import Project from "../pages/Project";
import Contact from "../pages/Contact";

function Main() {
    return (
        // Elemento <main> que agrupa o conteúdo central do site
        <main>
            {/* Seção inicial do site (hero) */}
            <Home />

            {/* Seção "Sobre Mim" */}
            <About />

            {/* Seção de Habilidades */}
            <Skill />

            {/* Seção de Projetos */}
            <Project />

            {/* Seção de Contato */}
            <Contact />
        </main>
    );
}

export default Main;