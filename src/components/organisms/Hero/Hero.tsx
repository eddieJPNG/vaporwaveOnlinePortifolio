import { personalInfo } from '../../../data/personal';
import { motion } from 'framer-motion';
import { useReducedMotion } from '../../../hooks/useReducedMotion';
import heroRoman from '../../../assets/backgrounds/roman.webp';
import heroTrees from '../../../assets/backgrounds/hero-trees.gif';

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
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden"
    >
      <img
        src={heroTrees}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover opacity-30 dark:opacity-20"
      />
      <img
        src={heroRoman}
        alt=""
        aria-hidden="true"
        className="absolute top-10 right-10 w-64 h-110 md:w-64 md:h-110 opacity-60 dark:opacity-40 pointer-events-none"
      />
      <motion.div
        className="relative z-10 text-center"
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
