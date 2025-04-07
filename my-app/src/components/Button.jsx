// Componente de botão reutilizável com suporte a download
function Button(props) {
    return (
        <a
            href={props.href}
            download={props.download}
            className="bg-blue-900 p-4 rounded-2xl hover:bg-blue-700"
        >
            {props.content}
        </a>
    );
}

export default Button;