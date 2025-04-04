function Link(props) {
    return (
        <a href={props.href} className="p-2 rounded-2xl hover:bg-blue-800">
            {props.content}
        </a>
    );
}

export default Link;