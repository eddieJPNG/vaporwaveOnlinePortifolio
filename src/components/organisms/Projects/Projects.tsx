import { useState, useMemo } from 'react';
import { projects } from '../../../data/projects';
import { Card } from '../../molecules';
import { Filter } from '../../molecules/Filter';
import { ProjectModal } from '../../molecules/ProjectModal';
import { AnimatedSection } from '../../atoms/AnimatedSection';
import { type Project } from '../../../types';

const PROJECT_CATEGORIES = [...new Set(projects.map((p) => p.categoria))] as const;

export const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('Todos');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'Todos') return projects;
    return projects.filter((p) => p.categoria === activeFilter);
  }, [activeFilter]);

  return (
    <section
      id="projects"
      className="py-20 px-4 bg-vaporwave-white-dark dark:bg-vaporwave-black-light"
    >
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <h2 className="text-3xl font-bold text-center text-vaporwave-black dark:text-vaporwave-white mb-12">
            Projetos
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <Filter
            categories={PROJECT_CATEGORIES}
            activeFilter={activeFilter}
            onFilterChange={setActiveFilter}
          />
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <AnimatedSection key={project.id} delay={index * 0.1}>
              <Card
                variant="elevated"
                padding="lg"
                className="cursor-pointer hover:scale-105 transition-transform h-full"
                onClick={() => setSelectedProject(project)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setSelectedProject(project);
                  }
                }}
              >
                {project.imagem && (
                  <img
                    src={project.imagem}
                    alt={project.titulo}
                    className="w-full h-40 object-cover rounded-t-lg mb-4 -mx-6 -mt-6 w-[calc(100%+3rem)]"
                  />
                )}
                <h3 className="text-xl font-bold text-vaporwave-purple mb-2">{project.titulo}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.descricao}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tecnologias.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs bg-vaporwave-purple/10 text-vaporwave-purple rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <span className="text-sm text-vaporwave-cyan hover:text-vaporwave-cyan-dark transition-colors">
                  Ver detalhes →
                </span>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>

      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  );
};
