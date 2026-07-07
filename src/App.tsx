import { lazy } from 'react';
import { PageTemplate } from './components/templates';
import { useTheme } from './hooks/useTheme';
import { Hero } from './components/organisms/Hero';
import { Footer } from './components/organisms/Footer';
import { LazySection } from './components/atoms';
import './styles/globals.css';

const About = lazy(() =>
  import('./components/organisms/About').then((m) => ({ default: m.About }))
);
const Skills = lazy(() =>
  import('./components/organisms/Skills').then((m) => ({ default: m.Skills }))
);
const Projects = lazy(() =>
  import('./components/organisms/Projects').then((m) => ({ default: m.Projects }))
);
const Experience = lazy(() =>
  import('./components/organisms/Experience').then((m) => ({ default: m.Experience }))
);
const Contact = lazy(() =>
  import('./components/organisms/Contact').then((m) => ({ default: m.Contact }))
);

function App() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <PageTemplate onThemeToggle={toggleTheme} isDark={isDark}>
      <Hero />
      <LazySection>
        <About />
      </LazySection>
      <LazySection>
        <Skills />
      </LazySection>
      <LazySection>
        <Projects />
      </LazySection>
      <LazySection>
        <Experience />
      </LazySection>
      <LazySection>
        <Contact />
      </LazySection>
      <Footer />
    </PageTemplate>
  );
}

export default App;
