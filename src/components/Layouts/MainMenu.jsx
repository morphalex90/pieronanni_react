import Link from 'next/link';
import { useRouter } from "next/router";

function MainMenu(props) {
    const router = useRouter();

    return (
        <nav className={'main-menu' + (props.position ? ' --' + props.position : '')}>
            <ul>
                <li><Link href="/" title="Home">Home</Link></li>
                <li><Link href="/about" className={router.pathname === '/about' ? 'is-active' : null} title="About">About</Link></li>
                <li><Link href="/projects" className={router.pathname === '/projects' ? 'is-active' : null} title="Projects">Projects</Link></li>
                <li><Link href="/contact" className={router.pathname === '/contact' ? 'is-active' : null} title="Contact">Contact</Link></li>
            </ul>
        </nav>
    );
}

export default MainMenu;