function ImgSocial(props) {
    return (
        <a href={props.href} target="_blank">
            <img src={props.src} alt={props.alt}
            className="w-[30px] cursor-pointer"
            />
        </a>
    );
}

export default ImgSocial;