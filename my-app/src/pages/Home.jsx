import Title from "../components/Title";
import Paragraph from "../components/Paragraph";

function Home() {
    return (
        <section id="home">
            <div className="w-full h-dvh flex flex-col justify-center items-center gap-4">
                <Title size="text-3xl md:text-5xl" title="Evoluindo a cada linha de código"/>
                
                <Paragraph content="Desenvolvedor fullstack em constante aprendizado, focado em construir aplicações funcionais, modernas e bem estruturadas. Busco aprimorar minhas habilidades criando soluções que unem performance e boas práticas." />
            </div>
        </section>
    );
}

export default Home;