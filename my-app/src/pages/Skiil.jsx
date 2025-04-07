import Title from "../components/Title";
import Technology from "../components/Technology";
import technologies from "../data/technology";

// Agrupa tecnologias por categoria
const groupedTechnologies = technologies.reduce((acc, tech) => {
  if (!acc[tech.category]) acc[tech.category] = [];
  acc[tech.category].push(tech);
  return acc;
}, {});

function Skill() {
  return (
    <section id="skill">
      <div className="w-full pt-24 pb-24 flex flex-col justify-center items-center gap-10">
        <Title size="text-4xl md:text-5xl" title="Minhas habilidades" />

        {/* Renderiza categorias */}
        {Object.entries(groupedTechnologies).map(([category, techList]) => (
          <div
            key={category}
            className="w-5/6 flex flex-col items-center text-center gap-6"
          >
            <h3 className="text-2xl font-semibold text-white border-b-2 border-blue-600 pb-1 w-fit mx-auto">
              {category}
            </h3>
            <div className="w-full flex flex-wrap justify-center gap-6">
              {techList.map((tech) => (
                <Technology key={tech.id} img={tech.logo} name={tech.name} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skill;
