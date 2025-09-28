import { motion } from "framer-motion";
import { projects } from "../utils/projects";
import { ArrowUpRight } from "lucide-react";

const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen bg-black px-6 py-20 text-white"
    >
      <div className="mx-auto max-w-6xl">
        {/* Cabeçalho fixo da página */}
        <motion.h2
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="sticky top-0 z-10 mb-12 bg-black/90 py-4 text-4xl font-bold text-teal-400 backdrop-blur-sm"
        >
          Meus Projetos
        </motion.h2>

        {/* Versão desktop - tabela minimalista */}
        <div className="hidden md:block">
          <table className="w-full border-collapse text-left">
            <thead>
              <tr className="border-b border-gray-800 text-sm text-gray-400">
                <th className="pb-3 font-medium">Projeto</th>
                <th className="pb-3 font-medium">Feito para</th>
                <th className="pb-3 font-medium">Tecnologias</th>
                <th className="pb-3 font-medium">Link</th>
              </tr>
            </thead>
            <tbody>
              {projects.map((project, index) => (
                <motion.tr
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="border-b border-gray-900 transition-colors hover:bg-gray-900/30"
                >
                  <td className="py-4 font-medium">{project.title}</td>
                  <td className="py-4 text-gray-400">{project.madeAt}</td>
                  <td className="py-4">
                    <div className="flex flex-wrap gap-2">
                      {project.techs.map((tech, i) => (
                        <span
                          key={i}
                          className="rounded-full bg-gray-800 px-2 py-1 text-xs text-teal-400"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="py-4">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex gap-1 text-sm text-teal-400 hover:underline"
                    >
                      {new URL(project.link).hostname} <ArrowUpRight />
                    </a>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Versão mobile no estilo de tabela */}
        <div className="block md:hidden">
          <table className="w-full border-collapse text-left">
            <thead>
              <tr className="border-b border-gray-800 text-sm text-gray-400">
                <th className="pb-3 font-medium">Projeto</th>
                <th className="pb-3 font-medium">Link</th>
              </tr>
            </thead>
            <tbody>
              {projects.map((project, index) => (
                <motion.tr
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="border-b border-gray-900 transition-colors hover:bg-gray-900/30"
                >
                  <td className="py-4 font-medium">{project.title}</td>
                  <td className="py-4">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-teal-400 hover:underline"
                    >
                      ↗
                    </a>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Projects;
