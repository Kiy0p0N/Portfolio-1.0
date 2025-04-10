import Title from "../components/Title";
import Social from "../components/Social";

function Contact() {
    return (
        <section id="contact">
            <div className="w-full pt-24 pb-24 flex flex-col items-center gap-6">
                
                <Title size="text-3xl md:text-5xl" title="Entre em contato" />

                <p className="text-center max-w-xl text-white/80 text-sm md:text-base px-4">
                    Ficarei feliz em conversar sobre projetos, colaborações ou responder dúvidas. Me chame em qualquer rede abaixo!
                </p>

                {/* Ícones sociais (Instagram, GitHub, LinkedIn, etc.) */}
                <Social />

                {/* Texto para incentivar o uso do formulário */}
                <p className="text-center max-w-xl text-lg text-gray-300">
                    Ou me envie uma mensagem!
                </p>

                {/* Formulário de contato usando FormSubmit */}
                <form
                    action="https://formsubmit.co/de6ecd8061e2f3481c12bdcfdeb1a1d7"  // Endereço de destino das mensagens
                    method="POST"
                    className="w-11/12 md:w-2/3 lg:w-1/2 bg-slate-800 p-6 rounded-2xl flex flex-col gap-4 shadow-md"
                >
                    {/* Campo de nome */}
                    <input
                        type="text"
                        name="name"
                        placeholder="Seu nome"
                        required
                        className="p-3 rounded-lg bg-slate-700 placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    
                    {/* Campo de e-mail */}
                    <input
                        type="email"
                        name="email"
                        placeholder="Seu e-mail"
                        required
                        className="p-3 rounded-lg bg-slate-700 placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    
                    {/* Campo de mensagem */}
                    <textarea
                        name="message"
                        placeholder="Sua mensagem"
                        rows="5"
                        required
                        className="p-3 rounded-lg bg-slate-700 placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                    ></textarea>

                    {/* Impede verificação de captcha (reCAPTCHA) automática */}
                    <input type="hidden" name="_captcha" value="false" />

                    {/* Redireciona para o seu portfólio após o envio */}
                    <input type="hidden" name="_next" value="https://portfolio-1-0-steel.vercel.app/" />

                    {/* Botão de envio */}
                    <button
                        type="submit"
                        className="bg-blue-600 hover:bg-blue-700 transition-colors duration-300 py-3 rounded-lg font-bold text-white"
                    >
                        Enviar mensagem
                    </button>
                </form>
            </div>
        </section>
    );
}

export default Contact;