import Link from 'next/link';
import { useRouter } from "next/router";
import Image from "next/image";
import github from '@img/github.svg';
import linkedin from '@img/linkedin.png';

export default function MainMenu({ position = '' }) {
    const router = useRouter();

    return (
        <nav className={'main-menu' + (position ? ' --' + position : '')}>
            <ul>
                {position === 'header' &&
                    <li className="has-icon"><a href="https://github.com/morphalex90" title="GitHub" target="_blank" rel="noopener noreferrer"><Image src={github} alt="GitHub" title="GitHub" height={26} width={26} priority /></a></li>
                }
                <li><Link href="/" title="Home">Home</Link></li>
                <li><Link href="/about" className={router.pathname === '/about' ? 'is-active' : ''} title="About">About</Link></li>
                <li><Link href="/projects" className={router.pathname === '/projects' ? 'is-active' : ''} title="Projects">Projects</Link></li>
                <li><Link href="/contact" className={router.pathname === '/contact' ? 'is-active' : ''} title="Contact">Contact</Link></li>
                <li><Link href="/cv.pdf" title="cv">CV</Link></li>

                {position === 'header' &&
                    <li className="has-icon"><a href="https://www.linkedin.com/in/piero-nanni-87407193/?locale=en_US" title="LinkedIn" target="_blank" rel="noopener noreferrer"><Image src={linkedin} alt="LinkedIn" title="LinkedIn" height={26} width={26} priority /></a></li>
                }
            </ul>
        </nav>
    );
}
