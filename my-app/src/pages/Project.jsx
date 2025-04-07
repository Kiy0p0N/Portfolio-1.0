import Title from "../components/Title";
import ProjectCard from "../components/ProjectCard";
import projects from "../data/projects";

function Project() {
    return (
        <section id="project">
            <div className="w-full pt-24 pb-24 flex flex-col justify-center items-center gap-8 px-4">
                <Title size="text-4xl md:text-5xl" title="Projetos" />

                {/* Grid responsivo para os cards */}
                <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full max-w-7xl">
                    {projects.map((project) => (
                        <ProjectCard
                            key={project.id}
                            name={project.name}
                            description={project.description}
                            repository={project.repository_url}
                            img_link={project.image_url}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Project;