import { useState } from "react";
import Title from "../components/Title";
import Link from "../components/Link";

import menu from "../assets/menu/menu.svg";
import close from "../assets/menu/close.svg";

function Header() {
  // Estado para controlar se o menu mobile está aberto
  const [isOpen, setIsOpen] = useState(false);

  return (
    // Cabeçalho fixo com fundo translúcido e borda inferior
    <header className="fixed z-40 w-full p-5 flex justify-between items-center border-b backdrop-blur-2xl">
      <Title size="text-3xl" title="Felipe" />
      
      {/* Navegação exibida apenas em telas grandes */}
      <nav className="hidden lg:flex flex-1/2 justify-end gap-[15px]">
        <Link href="#" content="Início" />
        <Link href="#about" content="Sobre Mim" />
        <Link href="#skill" content="Habilidades" />
        <Link href="#project" content="Projetos" />
        <Link href="#contact" content="Contato" />
      </nav>

      {/* Ícone do menu hambúrguer visível apenas em telas pequenas */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden p-2"
      >
        <img src={isOpen ? close : menu} alt="Menu" className="w-6 h-6" />
      </button>

      {/* Menu lateral para mobile com transição de slide */}
      <div
        className={`fixed top-0 left-0 h-full w-full bg-gray-900 text-white transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out lg:hidden`}
      >
        {/* Botão para fechar o menu */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 p-2"
        >
          <img src={close} alt="Fechar Menu" className="w-6 h-6" />
        </button>

        {/* Links do menu mobile */}
        <nav className="mt-16 bg-gray-900 flex flex-col space-y-4 p-4">
          <Link href="#" content="Início" onClick={() => setIsOpen(false)} />
          <Link href="#about" content="Sobre Mim" onClick={() => setIsOpen(false)} />
          <Link href="#skill" content="Habilidades" onClick={() => setIsOpen(false)} />
          <Link href="#project" content="Projetos" onClick={() => setIsOpen(false)} />
          <Link href="#contact" content="Contato" onClick={() => setIsOpen(false)} />
        </nav>

      </div>
    </header>
  );
}

export default Header;