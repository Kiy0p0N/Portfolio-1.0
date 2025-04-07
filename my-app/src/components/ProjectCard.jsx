import Title from "./Title";

function ProjectCard({ name, description, repository, img_link }) {
    return (
        <div className="relative group rounded-2xl overflow-hidden shadow-lg">
            {/* Imagem de fundo */}
            <img
                src={img_link}
                alt={`Imagem do projeto ${name}`}
                className="w-full h-72 object-cover transform duration-500 group-hover:scale-110"
            />

            {/* Overlay ao passar o mouse */}
            <div className="absolute inset-0 bg-slate-950/80 flex flex-col justify-center items-center px-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <h2 className="text-xl font-bold text-center mb-2">{name}</h2>
                <p className="text-sm text-center">{description}</p>

                <a
                    href={repository}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center justify-center px-4 py-2 rounded-full bg-blue-700 hover:bg-blue-600 transition-colors duration-300"
                >
                    Ver código &lt;/&gt;
                </a>
            </div>
        </div>
    );
}

export default ProjectCard;
