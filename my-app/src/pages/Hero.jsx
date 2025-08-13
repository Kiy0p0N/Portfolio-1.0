// src/components/Hero.jsx
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="home"
      className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-black via-gray-900 to-black px-4 text-center text-white"
    >
      {/* Subtítulo */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="mb-2 text-lg font-medium text-teal-400 md:text-xl"
      >
        Olá, me chamo
      </motion.h2>

      {/* Nome */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="mb-4 text-4xl font-bold md:text-6xl"
      >
        Felipe Cesar
      </motion.h1>

      {/* Descrição */}
      <motion.p
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="mb-8 max-w-xl text-xl font-light text-gray-300 md:text-2xl"
      >
        Sou um{" "}
        <span className="font-medium text-teal-400">
          Desenvolvedor Fullstack
        </span>{" "}
        apaixonado por transformar ideias em soluções digitais funcionais e
        modernas.
      </motion.p>

      {/* Botão */}
      <motion.a
        href="/projetos"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.8, duration: 0.4 }}
        className="inline-block rounded-lg bg-teal-500 px-6 py-3 font-semibold text-white transition hover:bg-teal-600"
      >
        Ver Projetos
      </motion.a>
    </section>
  );
};

export default Hero;
