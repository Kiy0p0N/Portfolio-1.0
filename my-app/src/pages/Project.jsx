import Title from "../components/Title";

function Project() {
    return (
        <section id="project">
            <div className="w-full pt-24 pb-24 flex flex-col justify-center items-center gap-4">
                <Title size="text-3xl md:text-5xl" title="Projetos" />
            </div>
        </section>
    );
}

export default Project;