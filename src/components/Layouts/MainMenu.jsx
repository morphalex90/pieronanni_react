import Link from 'next/link';
import { useRouter } from "next/router";

import Image from "next/image";
import github from '@img/github.svg';
import linkedin from '@img/linkedin.png';

function MainMenu(props) {
    const router = useRouter();

    return (
        <nav className={'main-menu' + (props.position ? ' --' + props.position : '')}>
            <ul>
                {props.position === 'header' &&
                    <li className="has-icon"><a href="https://github.com/morphalex90" title="GitHub" target="_blank" rel="noopener noreferrer"><Image src={github} alt={'GitHub'} title={'GitHub'} height={26} width={26} priority /></a></li>
                }
                <li><Link href="/" title="Home">Home</Link></li>
                <li><Link href="/about" className={router.pathname === '/about' ? 'is-active' : null} title="About">About</Link></li>
                <li><Link href="/projects" className={router.pathname === '/projects' ? 'is-active' : null} title="Projects">Projects</Link></li>
                <li><Link href="/contact" className={router.pathname === '/contact' ? 'is-active' : null} title="Contact">Contact</Link></li>

                {props.position === 'header' &&
                    <li className="has-icon"><a href="https://www.linkedin.com/in/piero-nanni-87407193/?locale=en_US" title="LinkedIn" target="_blank" rel="noopener noreferrer"><Image src={linkedin} alt={'LinkedIn'} title={'LinkedIn'} height={26} width={26} priority /></a></li>
                }
            </ul>
        </nav>
    );
}

export default MainMenu;