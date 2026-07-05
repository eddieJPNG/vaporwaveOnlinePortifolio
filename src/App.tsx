import { PageTemplate } from './components/templates';
import { useTheme } from './hooks/useTheme';
import { Hero, About, Skills, Projects, Experience, Contact, Footer } from './components/organisms';
import './styles/globals.css';

function App() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <PageTemplate onThemeToggle={toggleTheme} isDark={isDark}>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </PageTemplate>
  );
}

export default App;
