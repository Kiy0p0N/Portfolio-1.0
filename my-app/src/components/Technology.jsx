function Technology(props) {
    return (
        <div className="w-auto bg-white p-3 flex items-center justify-center rounded-2xl opacity-30 duration-500 hover:opacity-100 hover:animate-bounce hover:z-50">

            <img src={props.img} alt={props.alt} 
                className="w-20"
            />
        </div>
    )
}

export default Technology;