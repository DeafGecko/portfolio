import { Hero } from './components/Hero';
import { ProjectGrid } from './components/ProjectGrid';
import { SkillsMarquee } from './components/SkillsMarquee';
import { ContactForm } from './components/ContactForm';

export default function Home() {
  return (
    <main>
      <Hero />
      <ProjectGrid />
      <SkillsMarquee />
      <ContactForm />
    </main>
  );
}
