import Title from "../components/Title";
import Button from "../components/Button";
import curriculo from "../../public/curriculo-ti.pdf";

function About() {
    return (
        <section id="about">
            <div className="w-full pt-24 pb-16 flex flex-col justify-center items-center gap-8 px-4 text-center">
                
                {/* Título principal */}
                <Title size="text-4xl md:text-5xl" title="Sobre mim" />

                {/* Frase de impacto */}
                <h2 className="text-lg md:text-xl font-light italic text-blue-300">
                    Transformando ideias em soluções com criatividade e código.
                </h2>

                {/* Conteúdo textual */}
                <div className="max-w-4xl space-y-5 text-base md:text-lg leading-relaxed text-white/90">
                    <p>
                        Olá! Me chamo <strong className="text-blue-400">Felipe Cesar Rodrigues</strong>, sou um desenvolvedor <strong>fullstack</strong> apaixonado por tecnologia e desafios. Atualmente curso <strong>Análise e Desenvolvimento de Sistemas</strong> e estou sempre em busca de aprimorar minhas habilidades.
                    </p>

                    <p>
                        Tenho grande interesse em construir aplicações com foco em <strong>boas práticas, performance e usabilidade</strong>. Também venho explorando áreas como <strong>machine learning</strong> e o potencial da <strong>inteligência artificial</strong> em soluções digitais.
                    </p>

                    <p>
                        Neste momento, estou envolvido em projetos pessoais e expandindo meu portfólio. Gosto de trabalhar tanto no <strong>frontend</strong> quanto no <strong>backend</strong>, buscando sempre evoluir como profissional e como pessoa.
                    </p>

                    <p className="text-white/80 italic">
                        Vamos construir algo incrível juntos? Estou aberto a novas ideias e colaborações!
                    </p>
                </div>

                {/* Botão de currículo */}
                <Button
                    href={curriculo}
                    download="Curriculo-Felipe.pdf"
                    content="📄 Baixar currículo"
                />
            </div>
        </section>
    );
}

export default About;
