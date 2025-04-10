import Social from "../components/Social";

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
                <Social />
            </div>
        </footer>
    );
}

export default Footer;
