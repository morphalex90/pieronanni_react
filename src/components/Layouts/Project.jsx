import { useEffect, useState, useContext } from 'react';
// import { GlobalContext } from '../Context/GlobalContext';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Project(props) {

    const [project] = useState(props.project);
    const [delay] = useState(props.delay);
    // const { setPopup } = useContext(GlobalContext);

    return (
        <motion.div className="projects__single"
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3, delay }}
        >
            {/* onClick={e => setPopup(project)} */}
            <div className="projects__single__image">
                <Image src={project.images[0]} alt={project.title} title={project.title} width={333} height={200} />
            </div>

            <div className="projects__single__content">
                <div className="projects__single__title">{project.title}</div>
                <div className="projects__single__tech">WP</div>
            </div>
        </motion.div >
    );
}
