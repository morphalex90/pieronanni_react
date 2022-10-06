import Image from "next/image";
import github from '@img/github.svg';
import linkedin from '@img/linkedin.png';

function Socials() {
    return (
        <nav className="socials-menu">
            <ul>
                <li><a href="https://github.com/morphalex90" title="GitHub" target="_blank" rel="noopener noreferrer"><Image src={github} alt={'GitHub'} title={'GitHub'} height={40} width={40} /> <span>GitHub</span></a></li>
                <li><a href="https://www.linkedin.com/in/piero-nanni-87407193/?locale=en_US" title="LinkedIn" target="_blank" rel="noopener noreferrer"><span>LinkedIn</span> <Image src={linkedin} alt={'LinkedIn'} title={'LinkedIn'} height={40} width={40} /></a></li>
            </ul>
        </nav>
    );
}

export default Socials;