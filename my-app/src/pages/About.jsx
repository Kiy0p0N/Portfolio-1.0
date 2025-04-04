import Title from "../components/Title";
import Paragraph from "../components/Paragraph";
import Button from "../components/Button";

import curriculo from "../../public/curriculo-ti.pdf"

function About() {
    return (
        <section id="about">
            <div className="w-full pt-24 pb-16 flex flex-col justify-center items-center gap-4">
                <Title size="text-3xl md:text-5xl" title="Sobre mim" />

                <Paragraph content="Olá! Me chamo Felipe Cesar Rodrigues, sou um desenvolvedor fullstack em constante aprendizado, apaixonado por tecnologia e resolução de problemas. Atualmente, curso Análise e Desenvolvimento de Sistemas e estou sempre buscando aprimorar minhas habilidades, tanto no desenvolvimento frontend quanto backend." />

                <Paragraph content="Tenho interesse em criar aplicações bem estruturadas, focadas em performance, boas práticas e usabilidade. Além disso, estou explorando machine learning para entender como a inteligência artificial pode potencializar soluções digitais." />

                <Paragraph content="Atualmente, estou trabalhando em projetos pessoais e aprimorando meu portfólio para consolidar minha jornada como desenvolvedor. Se você quiser trocar ideias ou colaborar em algum projeto, estou sempre aberto a novas oportunidades!" />

                <Button href={curriculo} download="Curriculo-Felipe.pdf" content="Baixar currículo"/>
            </div>
        </section>
    );
}

export default About;