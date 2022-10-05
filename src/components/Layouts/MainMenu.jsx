import Link from 'next/link';

function MainMenu(props) {
    return (
        <nav role="navigation" className={'main-menu' + (props.position ? ' --' + props.position : '')}>
            <ul>
                <li><Link href="/" className={({ isActive }) => isActive ? 'is-active' : undefined}><a>Home</a></Link></li>
                <li><Link href="/about" className={({ isActive }) => isActive ? 'is-active' : undefined}><a>About</a></Link></li>
                <li><Link href="/projects" className={({ isActive }) => isActive ? 'is-active' : undefined}><a>Projects</a></Link></li>
                <li><Link href="/contact" className={({ isActive }) => isActive ? 'is-active' : undefined}><a>Contact</a></Link></li>
            </ul>
        </nav>
    );
}

export default MainMenu;