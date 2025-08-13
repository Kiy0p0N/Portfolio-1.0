import { motion } from "framer-motion";
import { MessageCircle, Instagram, Linkedin } from "lucide-react";

const Contact = () => {
  const contacts = [
    {
      name: "WhatsApp",
      icon: <MessageCircle size={40} className="mb-4 text-green-400" />,
      link: "https://wa.me/5535910144269?text=Olá%20Felipe%2C%20quero%20falar%20sobre...",
      bg: "bg-green-500",
      hover: "hover:bg-green-400",
    },
    {
      name: "Instagram",
      icon: <Instagram size={40} className="mb-4 text-pink-400" />,
      link: "https://www.instagram.com/felp.zip/",
      bg: "bg-pink-500",
      hover: "hover:bg-pink-400",
    },
    {
      name: "LinkedIn",
      icon: <Linkedin size={40} className="mb-4 text-blue-400" />,
      link: "https://www.linkedin.com/in/felipe-cesar-rodrigues/",
      bg: "bg-blue-500",
      hover: "hover:bg-blue-400",
    },
  ];

  return (
    <section
      id="contact"
      className="flex min-h-screen items-center justify-center bg-black px-6 py-20 text-white"
    >
      <div className="mx-auto max-w-5xl text-center">
        {/* Título */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-4 text-3xl font-bold text-teal-400 md:text-4xl"
        >
          Vamos Conversar
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-10 text-gray-400"
        >
          Escolha a rede social que preferir e fale comigo.
        </motion.p>

        {/* Cards de Contato */}
        <div className="grid gap-8 sm:grid-cols-3">
          {contacts.map((contact, index) => (
            <motion.div
              key={contact.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="flex flex-col items-center rounded-xl bg-gray-900 p-6 shadow-lg"
            >
              {contact.icon}
              <a
                href={contact.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-2 flex items-center justify-center rounded-lg ${contact.bg} ${contact.hover} px-6 py-3 font-semibold text-black transition`}
              >
                Falar no {contact.name}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
