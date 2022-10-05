import { useEffect, useState, useContext } from 'react';
// import { GlobalContext } from '../Context/GlobalContext';
import Image from 'next/image';

export default function Project(props) {

    const [project, setProject] = useState(props.project);
    // const { setPopup } = useContext(GlobalContext);

    return (
        <div className="projects__single">
            {/* onClick={e => setPopup(project)} */}
            <div className="projects__single__image">
                <Image loading="lazy" src={project.images[0]} alt={project.title} title={project.title} typeof="Image" />
            </div>

            <div className="projects__single__content">
                <div className="projects__single__title">{project.title}</div>
                <div className="projects__single__tech">WP</div>
            </div>
        </div>
    );
}
