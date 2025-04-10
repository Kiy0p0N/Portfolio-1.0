import { FaWhatsapp, FaLinkedin, FaInstagram, FaGithub} from "react-icons/fa";

// Componente para exibir um ícone de rede social com link externo
function Social() {
    return (
        <div className="flex gap-6 flex-wrap justify-center">
            <a
                href="https://wa.me/5535910144269"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-500 text-4xl hover:scale-110 transition"
                aria-label="WhatsApp"
            >
                <FaWhatsapp />
            </a>
            <a
                href="https://www.linkedin.com/in/felipe-cesar-rodrigues"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 text-4xl hover:scale-110 transition"
                aria-label="LinkedIn"
            >
                <FaLinkedin />
            </a>
            <a
                href="https://instagram.com/felp.zip"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-500 text-4xl hover:scale-110 transition"
                aria-label="Instagram"
            >
                <FaInstagram />
            </a>
            <a
                href="https://github.com/kiy0p0N"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-4xl hover:scale-110 transition"
                aria-label="GitHub"
            >
                <FaGithub />
            </a>
        </div>
    );
}

export default Social;
