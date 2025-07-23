import Hero from '@/components/sections/hero';
import About from '@/components/sections/about';
import Skills from '@/components/sections/skills';
import Experience from '@/components/sections/experience';
import Projects from '@/components/sections/projects';
import Contact from '@/components/sections/contact';
import Tiktok from '@/components/sections/tiktok';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Tiktok />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
    </main>
  );
}
