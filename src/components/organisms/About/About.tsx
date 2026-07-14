import { personalInfo } from '../../../data/personal';
import { SOCIAL_LINKS } from '../../../utils/constants';
import { AnimatedSection } from '../../atoms/AnimatedSection';
import headDecorative from '../../../assets/decorative/head.gif';

export const About = () => {
  return (
    <section
      id="about"
      className="relative py-20 px-4 bg-vaporwave-white-dark dark:bg-vaporwave-black-light overflow-hidden"
    >
      <img
        src={headDecorative}
        alt=""
        aria-hidden="true"
        className="absolute bottom-4 left-4 w-52 h-60 md:w-64 md:h-72 opacity-20 dark:opacity-10 pointer-events-none"
      />
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <AnimatedSection>
          <h2 className="text-3xl font-bold text-vaporwave-black dark:text-vaporwave-white mb-8">
            Sobre Mim
          </h2>
        </AnimatedSection>
        {personalInfo.imagem && (
          <AnimatedSection delay={0.05}>
            <div className="flex justify-center mb-6">
              <img
                src={personalInfo.imagem}
                alt={`Foto de ${personalInfo.nome}`}
                className="w-32 h-32 rounded-full border-4 border-vaporwave-purple object-cover"
              />
            </div>
          </AnimatedSection>
        )}
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
            <a
              href="/vaporwaveOnlinePortifolio/public/currículoEdsonRocha(23_06_26).pdf"
              download="Edson_Rocha_Desenvolvedor_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-vaporwave-purple hover:text-vaporwave-purple-dark transition-colors"
            >
              Currículo
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};
