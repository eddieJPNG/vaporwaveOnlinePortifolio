import { personalInfo } from '../../../data/personal';
import { SOCIAL_LINKS, SITE_CONFIG } from '../../../utils/constants';

export const Footer = () => {
  return (
    <footer className="relative py-8 px-4 bg-vaporwave-black text-vaporwave-white">
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
              href="/curriculo-edson-rocha.pdf"
              download="Edson_Rocha_Desenvolvedor_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-vaporwave-cyan transition-colors text-sm"
            >
              Currículo
            </a>
            <a
              href={SOCIAL_LINKS.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-vaporwave-cyan transition-colors text-sm"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
