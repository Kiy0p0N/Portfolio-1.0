// src/components/About.jsx
import { motion } from "framer-motion";
import Felipe from "../assets/image/felipe.jpg";

const About = () => {
  return (
    <section
      id="about"
      className="flex min-h-screen items-center justify-center bg-black px-4 py-20 text-white"
    >
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 md:grid-cols-2">
        {/* Texto */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="mb-6 text-3xl font-bold text-teal-400 md:text-4xl">
            Sobre mim
          </h2>
          <p className="mb-6 text-lg leading-relaxed text-gray-300">
            Sou um desenvolvedor{" "}
            <span className="text-teal-400">fullstack</span> com paixão por
            criar experiências web modernas, acessíveis e eficientes. Tenho
            experiência com <strong>React, Node.js, TailwindCSS</strong> e estou
            sempre aprendendo novas tecnologias para evoluir como profissional e
            entregar soluções melhores.
          </p>
          <p className="mb-6 text-gray-400">
            Gosto de resolver problemas, escrever código limpo e trabalhar em
            projetos que realmente fazem a diferença. Meu foco está em construir
            interfaces intuitivas e backends escaláveis.
          </p>

          <h3 className="mb-2 font-medium text-teal-400">
            Principais tecnologias:
          </h3>
          <ul className="grid list-inside list-disc grid-cols-2 gap-2 text-sm text-gray-300">
            <li>React</li>
            <li>Node.js</li>
            <li>TailwindCSS</li>
            <li>PostgreSQL</li>
            <li>Express</li>
            <li>JavaScript</li>
          </ul>
        </motion.div>

        {/* Foto */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex h-[300px] w-full items-center justify-center overflow-hidden rounded-xl bg-gray-800 shadow-lg md:h-[400px]"
        >
          <img
            src={Felipe}
            alt="Uma foto de mim"
            className="h-full w-full object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default About;
