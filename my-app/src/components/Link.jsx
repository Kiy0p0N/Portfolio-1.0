function Link({ href, content, onClick }) {
    return (
      <a
        href={href}
        onClick={onClick}
        className="text-white hover:text-blue-500 transition-colors duration-300"
      >
        {content}
      </a>
    );
  }
  
  export default Link;
  