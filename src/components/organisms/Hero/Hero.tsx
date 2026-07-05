import { personalInfo } from '../../../data/personal';
import { motion } from 'framer-motion';
import { useReducedMotion } from '../../../hooks/useReducedMotion';

export const Hero = () => {
  const prefersReducedMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: prefersReducedMotion ? 0 : 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4">
      <motion.div
        className="text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          variants={itemVariants}
          className="text-4xl md:text-6xl font-bold text-vaporwave-black dark:text-vaporwave-white mb-4"
        >
          {personalInfo.nome}
        </motion.h1>
        <motion.p
          variants={itemVariants}
          className="text-xl md:text-2xl text-vaporwave-purple mb-8"
        >
          {personalInfo.cargo}
        </motion.p>
        <motion.div variants={itemVariants} className="flex gap-4 justify-center">
          <a
            href="#projects"
            className="inline-flex items-center justify-center px-6 py-3 bg-vaporwave-purple text-white rounded-lg hover:bg-vaporwave-purple-dark transition-colors font-medium text-lg"
          >
            Ver Projetos
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-6 py-3 border-2 border-vaporwave-purple text-vaporwave-purple rounded-lg hover:bg-vaporwave-purple/10 transition-colors font-medium text-lg"
          >
            Contato
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};
