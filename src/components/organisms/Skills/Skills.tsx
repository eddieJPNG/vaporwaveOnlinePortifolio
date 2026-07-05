import { skills } from '../../../data/skills';
import { SKILL_CATEGORIES } from '../../../utils/constants';
import { SkillBadge } from '../../molecules';
import { AnimatedSection } from '../../atoms/AnimatedSection';

export const Skills = () => {
  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <h2 className="text-3xl font-bold text-center text-vaporwave-black dark:text-vaporwave-white mb-12">
            Habilidades
          </h2>
        </AnimatedSection>
        {SKILL_CATEGORIES.map((category, categoryIndex) => {
          const categorySkills = skills.filter((s) => s.categoria === category);
          if (categorySkills.length === 0) return null;
          return (
            <AnimatedSection key={category} delay={categoryIndex * 0.1}>
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-vaporwave-purple mb-4 text-center">
                  {category}
                </h3>
                <div className="flex flex-wrap justify-center gap-3">
                  {categorySkills.map((skill) => (
                    <SkillBadge
                      key={skill.id}
                      name={skill.nome}
                      icon={skill.icone}
                      level={skill.nivel}
                    />
                  ))}
                </div>
              </div>
            </AnimatedSection>
          );
        })}
      </div>
    </section>
  );
};
