import Link from 'next/link';
import { useRouter } from "next/router";

function MainMenu(props) {
    const router = useRouter();

    return (
        <nav role="navigation" className={'main-menu' + (props.position ? ' --' + props.position : '')}>
            <ul>
                <li><Link href="/"><a title="Home">Home</a></Link></li>
                <li><Link href="/about"><a className={router.pathname === '/about' ? 'is-active' : null} title="About">About</a></Link></li>
                <li><Link href="/projects"><a className={router.pathname === '/projects' ? 'is-active' : null} title="Projects">Projects</a></Link></li>
                <li><Link href="/contact"><a className={router.pathname === '/contact' ? 'is-active' : null} title="Contact">Contact</a></Link></li>
            </ul>
        </nav>
    );
}

export default MainMenu;