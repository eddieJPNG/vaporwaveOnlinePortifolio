import { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { type Project } from '../../../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal = ({ project, onClose }: ProjectModalProps) => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (project) {
      dialog.showModal();
    } else {
      dialog.close();
    }
  }, [project]);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    const handleClose = () => onClose();
    dialog.addEventListener('close', handleClose);
    return () => dialog.removeEventListener('close', handleClose);
  }, [onClose]);

  return (
    <AnimatePresence>
      {project && (
        <dialog
          ref={dialogRef}
          className="fixed inset-0 m-auto backdrop:bg-black/60 bg-transparent rounded-lg p-0 max-w-2xl w-full h-fit max-h-fit"
          onClick={(e) => {
            if (e.target === dialogRef.current) onClose();
          }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="bg-vaporwave-white dark:bg-vaporwave-black-light rounded-lg p-6 shadow-2xl"
          >
            {project.imagem && (
              <img
                src={project.imagem}
                alt={project.titulo}
                className="w-full h-48 object-cover rounded-t-lg mb-4 -mx-6 -mt-6 w-[calc(100%+3rem)]"
              />
            )}
            <div className="flex justify-between items-start mb-4">
              <h2 className="text-2xl font-bold text-vaporwave-purple">{project.titulo}</h2>
              <button
                onClick={onClose}
                className="text-gray-500 hover:text-vaporwave-black dark:hover:text-vaporwave-white transition-colors text-2xl leading-none"
                aria-label="Fechar modal"
              >
                &times;
              </button>
            </div>

            <div className="mb-4">
              <span className="px-2 py-1 text-xs bg-vaporwave-cyan/10 text-vaporwave-cyan-dark rounded">
                {project.categoria}
              </span>
              <span className="ml-2 text-sm text-gray-500 dark:text-gray-400">
                {project.periodo}
              </span>
            </div>

            {project.descricaoLonga && (
              <p className="text-gray-600 dark:text-gray-300 mb-4">{project.descricaoLonga}</p>
            )}

            <div className="mb-4">
              <h3 className="text-sm font-semibold text-vaporwave-black dark:text-vaporwave-white mb-2">
                Tecnologias
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.tecnologias.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 text-xs bg-vaporwave-purple/10 text-vaporwave-purple rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex gap-4 mt-6">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-4 py-2 bg-vaporwave-purple text-white rounded-lg hover:bg-vaporwave-purple-dark transition-colors text-sm font-medium"
              >
                Ver no GitHub
              </a>
              <button
                onClick={onClose}
                className="inline-flex items-center justify-center px-4 py-2 border-2 border-vaporwave-purple text-vaporwave-purple rounded-lg hover:bg-vaporwave-purple/10 transition-colors text-sm font-medium"
              >
                Fechar
              </button>
            </div>
          </motion.div>
        </dialog>
      )}
    </AnimatePresence>
  );
};
