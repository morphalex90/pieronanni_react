import Image from "next/image";
import github from '@img/github.svg';
import linkedin from '@img/linkedin.png';

function Socials() {
    return (
        <nav className="socials-menu">
            <ul>
                <li><a href="https://github.com/morphalex90" title="GitHub" target="_blank" rel="noopener noreferrer"><Image src={github} alt="GitHub" title="GitHub" height={30} width={30} /></a></li>
                <li><a href="https://www.linkedin.com/in/piero-nanni-87407193/?locale=en_US" title="LinkedIn" target="_blank" rel="noopener noreferrer"><Image src={linkedin} alt="LinkedIn" title="LinkedIn" height={30} width={30} /></a></li>
            </ul>
        </nav>
    );
}

export default Socials;