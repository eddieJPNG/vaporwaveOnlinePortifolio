import { personalInfo } from '../../../data/personal';
import { SOCIAL_LINKS, SITE_CONFIG } from '../../../utils/constants';
import seaBg from '../../../assets/backgrounds/sea.gif';

export const Footer = () => {
  return (
    <footer className="relative py-8 px-4 bg-vaporwave-black text-vaporwave-white overflow-hidden">
      <img
        src={seaBg}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover opacity-20 pointer-events-none"
      />
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} {SITE_CONFIG.author}. Todos os direitos reservados.
          </p>
          <div className="flex gap-4">
            <a
              href={SOCIAL_LINKS.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-vaporwave-cyan transition-colors text-sm"
            >
              GitHub
            </a>
            <a
              href={SOCIAL_LINKS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-vaporwave-cyan transition-colors text-sm"
            >
              LinkedIn
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="text-gray-400 hover:text-vaporwave-cyan transition-colors text-sm"
            >
              Email
            </a>
            <a
              href="/currículoEdsonRocha(23_06_26).pdf"
              download="Edson_Rocha_Desenvolvedor_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-vaporwave-cyan transition-colors text-sm"
            >
              Currículo
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
