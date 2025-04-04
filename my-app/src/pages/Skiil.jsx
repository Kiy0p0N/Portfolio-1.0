import Paragraph from "../components/Paragraph";
import Title from "../components/Title";
import Technology from "../components/Technology";

import html from "../assets/technology/html-5.svg";
import css from "../assets/technology/css-3.svg";
import js from "../assets/technology/javascript.svg";
import jquery from "../assets/technology/jquery.svg";
import node from "../assets/technology/node-js.svg";
import express from "../assets/technology/express.svg";
import react from "../assets/technology/react.svg";
import tailwindcss from "../assets/technology/tailwindcss.svg";
import postgresql from "../assets/technology/postgresql.svg";
import python from "../assets/technology/python.svg";

function Skill() {
    return (
        <section id="skill">
            <div className="w-full pt-24 pb-24 flex flex-col justify-center items-center gap-4">
                <Title size="text-3xl md:text-5xl" title="Minhas habilidades" />

                <Paragraph content="Acredito na melhoria contínua e na busca constante por novos conhecimentos. Estou sempre explorando novas tecnologias, aprimorando minhas habilidades e me desafiando a evoluir profissionalmente. Para mim, aprender é um processo sem fim." />

                <div className="w-5/6 grid grid-cols-5 justify-center gap-[15px] lg:grid-cols-10">
                    <Technology img={html} alt="Logo do HTML-5" />
                    <Technology img={css} alt="Logo do CSS-3" />
                    <Technology img={js} alt="Logo do JavaScript" />
                    <Technology img={jquery} alt="Logo do jQuery" />
                    <Technology img={node} alt="Logo do Node-js" />
                    <Technology img={express} alt="Logo do Express" />
                    <Technology img={react} alt="Logo do React" />
                    <Technology img={tailwindcss} alt="Logo do Tailwincss" />
                    <Technology img={postgresql} alt="Logo do Postgresql" />
                    <Technology img={python} alt="Logo do Python" />

                </div>
            </div>
        </section>
    );
}

export default Skill;