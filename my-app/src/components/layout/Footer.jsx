import ImgSocial from '../ImgSocial';

import instagram from "../../assets/social/instagram.svg";
import github from "../../assets/social/github.svg";
import linkedin from "../../assets/social/linkedin.svg";

function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="bg-blue-950 w-full p-5 flex justify-between items-center">
            <p className='flex-1/2'>Copyright &copy; {year} Felipe.</p>

            <div className="flex-1/2 flex justify-end gap-[15px]">
                <ImgSocial href="https://www.instagram.com/felp.zip/" src={instagram} alt="Logo do Instagram" />
                <ImgSocial href="https://www.linkedin.com/in/felipe-cesar-rodrigues/" src={linkedin} alt="Logo do LinkedIn" />
                <ImgSocial href="https://github.com/Kiy0p0N" src={github} alt="Logo do Github" />
            </div>
        </footer>
    );
}

export default Footer;