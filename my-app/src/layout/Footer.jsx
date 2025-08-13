// src/components/Footer.jsx
import { Github, Linkedin, Mail, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black py-8 text-gray-300">
      <div className="mx-auto flex max-w-7xl flex-col items-center space-y-6 px-4 text-center">
        {/* Nome ou Logo */}
        <h2 className="text-xl font-semibold text-white">
          Felipe<span className="text-teal-400">Cesar</span>
        </h2>

        {/* Redes sociais */}
        <div className="flex space-x-6">
          <a
            href="https://github.com/Kiy0p0N"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-teal-400"
          >
            <Github size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/felipe-cesar-rodrigues/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-teal-400"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="/contato"
            className="transition hover:text-teal-400"
          >
            <Mail size={24} />
          </a>
          <a
            href="https://www.instagram.com/felp.zip/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-teal-400"
          >
            <Instagram size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
