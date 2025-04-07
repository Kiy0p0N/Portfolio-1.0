import ImgSocial from "../components/ImgSocial";

import instagram from "../assets/social/instagram.svg";
import github from "../assets/social/github.svg";
import linkedin from "../assets/social/linkedin.svg";

// Rodapé responsivo com ano e ícones sociais
function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="bg-blue-950 w-full p-5 flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
            {/* Texto de direitos autorais */}
            <p className="text-center md:text-left">
                Copyright &copy; {year} Felipe.
            </p>

            {/* Ícones de redes sociais */}
            <div className="flex justify-center md:justify-end gap-4">
                <ImgSocial
                    href="https://www.instagram.com/felp.zip/"
                    src={instagram}
                    alt="Logo do Instagram"
                />
                <ImgSocial
                    href="https://www.linkedin.com/in/felipe-cesar-rodrigues/"
                    src={linkedin}
                    alt="Logo do LinkedIn"
                />
                <ImgSocial
                    href="https://github.com/Kiy0p0N"
                    src={github}
                    alt="Logo do Github"
                />
            </div>
        </footer>
    );
}

export default Footer;
