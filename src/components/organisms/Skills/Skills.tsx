import { skills } from '../../../data/skills';
import { SKILL_CATEGORIES } from '../../../utils/constants';
import { SkillBadge } from '../../molecules';
import { AnimatedSection } from '../../atoms/AnimatedSection';
import tokyo from '../../../assets/backgrounds/tokyo.gif';
import addiIcon from '../../../assets/icons-decorative/additive-synthesis.png';

export const Skills = () => {
  return (
    <section id="skills" className="relative py-20 px-4 overflow-hidden">
      <img
        src={tokyo}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover opacity-20 pointer-events-none"
      />
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <div className="flex items-center justify-center gap-3 mb-12">
            <img src={addiIcon} alt="" aria-hidden="true" className="w-8 h-8" />
            <h2 className="text-3xl font-bold text-vaporwave-black dark:text-vaporwave-white">
              Habilidades
            </h2>
          </div>
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
                      iconPath={skill.iconePath}
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
