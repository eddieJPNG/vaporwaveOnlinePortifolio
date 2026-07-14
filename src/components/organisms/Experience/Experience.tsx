import { experiences } from '../../../data/experiences';
import { AnimatedSection } from '../../atoms/AnimatedSection';

export const Experience = () => {
  return (
    <section id="experience" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <AnimatedSection>
          <h2 className="text-3xl font-bold text-center text-vaporwave-black dark:text-vaporwave-white mb-12">
            Experiência
          </h2>
        </AnimatedSection>
        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-vaporwave-purple/30 -translate-x-1/2" />
          {experiences.map((exp, index) => (
            <AnimatedSection key={exp.id} delay={index * 0.15}>
              <div
                className={`relative mb-12 pl-12 md:pl-0 ${
                  index % 2 === 0 ? 'md:w-1/2 md:pr-8 md:mr-auto' : 'md:w-1/2 md:pl-8 md:ml-auto'
                }`}
              >
                <div className="absolute left-2.5 md:left-1/2 w-4 h-4 bg-vaporwave-purple rounded-full -translate-x-1/2 border-4 border-vaporwave-white dark:border-vaporwave-black" />
                <div className="bg-vaporwave-white dark:bg-vaporwave-black-light rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-2 py-1 text-xs bg-vaporwave-cyan/10 text-vaporwave-cyan-dark rounded">
                      {exp.tipo}
                    </span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">{exp.periodo}</span>
                  </div>
                  <h3 className="text-xl font-bold text-vaporwave-purple mb-1">{exp.cargo}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-3">{exp.empresa}</p>
                  <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-400 space-y-1">
                    {exp.conquistas.map((conquista, i) => (
                      <li key={i}>{conquista}</li>
                    ))}
                  </ul>
                  {exp.url && (
                    <a
                      href={exp.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-3 text-sm text-vaporwave-cyan hover:text-vaporwave-cyan-dark transition-colors"
                    >
                      Ver projeto →
                    </a>
                  )}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};
