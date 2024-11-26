import { useState } from 'react';
import Modal from '@layouts/Modal';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Project({ project, delay }: { project: any, delay: any }) {
    const [modalShow, setModalShow] = useState(false);
    const [modalContent, setModalContent] = useState(null);

    return (
        <>
            <motion.div className="projects__single" initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.3, delay }} onClick={e => { setModalShow(true); setModalContent(project); }}>
                <div className="projects__single__image">
                    <Image src={require('../img/projects/' + project.images[0])} alt={project.title} title={project.title} width={333} height={200} />
                </div>

                <div className="projects__single__content">
                    <div className="projects__single__title">{project.title}</div>
                    <div className="projects__single__tech">
                        {project.technologies.map((tech: string, id: number) =>
                            <Image key={id} src={require('../img/' + tech + '.webp').default} alt={tech} title={tech} height={20} width={20} />
                        )}
                    </div>
                </div>
            </motion.div >

            <Modal onClose={() => setModalShow(false)} show={modalShow} content={modalContent} />
        </>
    );
}
