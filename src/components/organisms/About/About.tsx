import { personalInfo } from '../../../data/personal';
import { SOCIAL_LINKS } from '../../../utils/constants';
import { AnimatedSection } from '../../atoms/AnimatedSection';

export const About = () => {
  return (
    <section
      id="about"
      className="py-20 px-4 bg-vaporwave-white-dark dark:bg-vaporwave-black-light"
    >
      <div className="max-w-4xl mx-auto text-center">
        <AnimatedSection>
          <h2 className="text-3xl font-bold text-vaporwave-black dark:text-vaporwave-white mb-8">
            Sobre Mim
          </h2>
        </AnimatedSection>
        <AnimatedSection delay={0.1}>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">{personalInfo.resumo}</p>
        </AnimatedSection>
        <AnimatedSection delay={0.2}>
          <div className="flex gap-4 justify-center">
            <a
              href={SOCIAL_LINKS.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-vaporwave-purple hover:text-vaporwave-purple-dark transition-colors"
            >
              GitHub
            </a>
            <a
              href={SOCIAL_LINKS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-vaporwave-purple hover:text-vaporwave-purple-dark transition-colors"
            >
              LinkedIn
            </a>
            <a
              href={SOCIAL_LINKS.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="text-vaporwave-purple hover:text-vaporwave-purple-dark transition-colors"
            >
              WhatsApp
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};
