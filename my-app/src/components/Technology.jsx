// components/Technology.jsx
function Technology({ img, name }) {
    return (
        <div className="w-auto text-center bg-white p-3 flex flex-col items-center justify-center rounded-2xl md:opacity-30 duration-500 hover:opacity-100 hover:animate-bounce hover:z-50">
            <img src={img} alt={`Logo do ${name}`} title={name} className="w-16 mb-2" />
            <span className="text-sm font-semibold text-slate-800">{name}</span>
        </div>
    );
}

export default Technology;
