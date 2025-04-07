import { useState, useEffect } from "react";
import Title from "../components/Title";

function Home() {
    const [time, setTime] = useState(new Date().getHours());  // Estado que armazena a hora atual (atualiza a cada segundo)
    const [fullText, setFullText] = useState("");  // Texto completo que será "digitado"
    const [displayText, setDisplayText] = useState("");  // Texto que está sendo exibido (letra por letra)
    const [typingIndex, setTypingIndex] = useState(0);  // Índice atual da digitação

    // Atualiza o horário a cada 1 segundo
    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date().getHours());
        }, 1000);

        return () => clearInterval(interval);  // Limpa o intervalo ao desmontar
    }, []);

    // Atualiza o texto com a saudação de acordo com o horário
    useEffect(() => {
        let greeting;

        if (time < 12) {
            greeting = "Bom dia!";
        } else if (time < 18) {
            greeting = "Boa tarde!";
        } else {
            greeting = "Boa noite!";
        }

        setFullText(`<Olá, Mundo! ${greeting} />`);
        setDisplayText("");  // Reseta o texto exibido
        setTypingIndex(0);  // Reinicia o índice de digitação
    }, [time]);

    // Animação de digitação (escreve uma letra por vez)
    useEffect(() => {
        if (typingIndex < fullText.length) {
            const timeout = setTimeout(() => {
                setDisplayText((prev) => prev + fullText[typingIndex]);
                setTypingIndex((prev) => prev + 1);
            }, 100);  // Velocidade da digitação (100ms por letra)

            return () => clearTimeout(timeout);  // Limpa o timeout se reiniciar
        }
    }, [typingIndex, fullText]);

    return (
        <section id="home">
            <div className="w-full h-dvh flex justify-center items-center">
                <Title size="text-4xl md:text-7xl" title={displayText}/>
            </div>
        </section>
    );
}

export default Home;