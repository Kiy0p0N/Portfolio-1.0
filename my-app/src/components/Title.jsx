function Title(props) {
    return (
        <h1 className={`${props.size} text-center font-semibold font-mono bg-gradient-to-br from-blue-700 to-blue-100 bg-clip-text text-transparent`}>
            {props.title}
        </h1>
    );
}

export default Title;